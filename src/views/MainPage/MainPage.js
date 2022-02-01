import { useEffect, useState } from 'react';
import { useContext } from 'react';
import Table from '../../components/Table/Table';
import { Input } from '../../components/Input/Input';
import Alert from '../../components/Alert/Alert';
import Limit from '../../components/Limit/Limit';
import CategoryList from '../../components/CategoryList/CategoryList';
import { AccountsList } from '../../components/Accounts/AccountsList';
import { AddButton } from '../../components/Button/Button';
import Add from '../../assets/add.png';
import { StyledDate, StyledDateWrap } from './MainPage.styles';
import { AccountsContext } from '../../reducers/accounts.reducer';

const MainPage = () => {
  const [showAlert, setShowAlert] = useState(true);
  const onSetShowAlert = () => setShowAlert(false);

  const [name, setName] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const [list, dispatch] = useContext(AccountsContext);
  const [listToShow, setListToShow] = useState(list);
  useEffect(() => {
    setListToShow(list);
  }, [list]);
  let filteredList;

  const filterList = () => {
    if (name)
      filteredList = list.filter((item) =>
        item.title.toLowerCase().includes(name.toLowerCase().trim()),
      );
    if (dateStart)
      filteredList = filteredList
        ? filteredList.filter(
            (item) => new Date(item.date) >= new Date(dateStart),
          )
        : list.filter((item) => new Date(item.date) >= new Date(dateStart));
    if (dateEnd)
      filteredList = filteredList
        ? filteredList.filter(
            (item) => new Date(item.date) <= new Date(dateEnd),
          )
        : list.filter((item) => new Date(item.date) <= new Date(dateEnd));

    if (filteredList) setListToShow(filteredList);
  };

  return (
    <>
      <Table expenses={300} incomes={800} />
      {showAlert ? null : <Limit category={'remont'} />}
      {showAlert ? (
        <Alert category={'remont'} onSetShowAlert={onSetShowAlert} />
      ) : null}
      <AddButton text="Dodaj" imageName={Add} />
      <Input
        type="search"
        placeholder="Wyszukaj"
        icon={'glass'}
        inputLabel="nazwa pozycji"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onSearchClick={filterList}
      />
      <StyledDateWrap>
        <StyledDate>
          <Input
            type="date"
            inputLabel="początek zakresu"
            filter={dateStart}
            setFilter={setDateStart}
          />
        </StyledDate>
        <StyledDate onClick={() => setShowAlert(false)}>
          <Input
            type="date"
            inputLabel="koniec zakresu"
            filter={dateEnd}
            setFilter={setDateEnd}
          />
        </StyledDate>
      </StyledDateWrap>
      <CategoryList />
      <AccountsList list={listToShow} dispatch={dispatch} />
    </>
  );
};

export default MainPage;
