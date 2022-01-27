import {
  PrimaryButton,
  ButtonExpenses,
  ButtonIncome,
  IconButton,
} from '../../components/Button/Button';
import {
  StyledNewPosition,
  ExpIncBtnGroup,
  InputDateStyled,
  InputGroupStyled,
} from '../../views/NewPosition/NewPosition.styles';
import {
  Input,
  InputCategory,
  InputAttachment,
} from '../../components/Input/Input';


export default function NewPosition() {
  return (
    <>
      <IconButton type="arrow"></IconButton>
      <StyledNewPosition>
        <InputDateStyled>
          <Input Input type="date" inputLabel="Data"></Input>
        </InputDateStyled>
        <ExpIncBtnGroup>
          <ButtonExpenses text="Wydatki" isActive={true}></ButtonExpenses>
          <ButtonIncome text="Przychody" isActive={false}></ButtonIncome>
        </ExpIncBtnGroup>
        <InputGroupStyled>
          <InputCategory
            type="search"
            inputLabel="Kategoria"
            icon={'ArrowD'}
          ></InputCategory>
          <Input type="text" inputLabel="Nazwa"></Input>
          <Input type="text" inputLabel="Kwota"></Input>
          <InputAttachment
            type="file"
            inputLabel="Załącz plik"
            icon={'Attach'}
            style="visibility:hidden"
          ></InputAttachment>
        </InputGroupStyled>
        <PrimaryButton
          className="xxx"
          text="Dodaj"
          isActive={true}
        ></PrimaryButton>
      </StyledNewPosition>
    </>
  );
}
