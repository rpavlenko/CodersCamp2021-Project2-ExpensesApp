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
  ArrowButtonStyled,
} from '../../views/NewPosition/NewPosition.styles';
import Input from '../../components/Input/Input';
import Arrow from '../../assets/arrow.png';
// import ArrowDown from '../../assets/arrowd.png';
import Attach from '../../assets/attach.png';
// import { Attach } from '../../assets/attach.png';

export default function NewPosition() {
  return (
    <>
      <ArrowButtonStyled>
        <IconButton imageName={Arrow}></IconButton>
      </ArrowButtonStyled>
      <StyledNewPosition>
        <InputDateStyled>
          <Input Input type="date" inputLabel="Data"></Input>
        </InputDateStyled>
        <ExpIncBtnGroup>
          <ButtonExpenses text="Wydatki" isActive={true}></ButtonExpenses>
          <ButtonIncome text="Przychody" isActive={false}></ButtonIncome>
        </ExpIncBtnGroup>
        <InputGroupStyled>
          <Input type="search" inputLabel="Kategoria"></Input>
          <Input type="text" inputLabel="Nazwa"></Input>
          <Input type="text" inputLabel="Kwota"></Input>
          <Input type="text" inputLabel="Załącz plik">
            {Attach}
          </Input>
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
