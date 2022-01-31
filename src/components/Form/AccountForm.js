import { PrimaryButton, ButtonExpenses, ButtonIncome } from '../Button/Button';
import {
  StyledNewPosition,
  ExpIncBtnGroup,
  InputDateStyled,
  InputGroupStyled,
} from '../../views/NewPosition/NewPosition.styles';
import { Input, InputSelect, InputAttachment } from '../Input/Input';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const initialData = [
  { value: 'remont', label: 'Remont' },
  { value: 'prezent', label: 'Prezent' },
  { value: 'ubrania', label: 'Ubrania' },
  { value: 'leczenie', label: 'Leczenie' },
];

export const AccountForm = (props) => {
  const today = new Date().toISOString().slice(0, 10);

  const [date, setDate] = useState(today);
  const [type, setType] = useState('Wydatki');
  const [category, setCategory] = useState({ label: '', value: '' });
  const [title, setTitle] = useState('');
  // TODO think how to remove console warning
  const [amount, setAmount] = useState(null);
  // const [attachment, setAttachment] = useState(null);

  const initialCategories = localStorage.getItem('categories')
    ? JSON.parse(localStorage.getItem('categories'))
    : initialData;
  const [categoryOptions, setCategoryOptions] = useState(initialCategories);

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      const newCategories = [...categoryOptions, newValue];
      setCategoryOptions(newCategories);
      setCategory(newValue);
      localStorage.setItem('categories', JSON.stringify(newCategories));
    },
    [categoryOptions],
  );

  const handleSubmit = () => {
    const data = {
      date,
      type,
      category,
      title,
      amount,
    };
    props.handleSubmit(data);
  };

  return (
    <>
      <StyledNewPosition>
        <InputDateStyled>
          <Input
            type="date"
            inputLabel="Data"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </InputDateStyled>
        <ExpIncBtnGroup>
          <ButtonExpenses
            text="Wydatki"
            isActive={type === 'Wydatki'}
            onClick={() => setType('Wydatki')}
          />
          <ButtonIncome
            text="Przychody"
            isActive={type === 'Przychody'}
            onClick={() => setType('Przychody')}
          />
        </ExpIncBtnGroup>
        <InputGroupStyled>
          <InputSelect
            isClearable
            inputLabel="Kategoria"
            value={category}
            options={categoryOptions}
            onChange={(option) => setCategory(option)}
            onCreateOption={handleCreate}
          />
          <Input
            type="text"
            inputLabel="Nazwa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="number"
            inputLabel="Kwota"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <InputAttachment
            type="file"
            inputLabel="Załącz plik"
            icon={'Attach'}
            style="visibility:hidden"
          />
        </InputGroupStyled>
        <PrimaryButton
          className="xxx"
          text="Dodaj"
          isActive={true}
          onClick={handleSubmit}
        />
      </StyledNewPosition>
    </>
  );
};

AccountForm.propTypes = {
  handleSubmit: PropTypes.func,
};
