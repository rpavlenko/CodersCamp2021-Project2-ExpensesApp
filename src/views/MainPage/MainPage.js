// import { useState } from 'react';
import Table from '../../components/Table/Table';
import { Input } from '../../components/Input/Input';
// import Alert from '../../components/Alert/Alert';
// import Limit from '../../components/Limit/Limit';
import CategoryList from '../../components/CategoryList/CategoryList';
import { AccountsList } from '../../components/Accounts/AccountsList';
import { AddButton } from '../../components/Button/Button';
import Add from '../../assets/add.png';
import { StyledDate, StyledDateWrap } from './MainPage.styles';

const MainPage = () => {
  // const [showAlert, setShowAlert] = useState(true);
  // const onSetShowAlert = () => setShowAlert(false);

  return (
    <>
      <Table />
      {/*{showAlert ? null : <Limit category={'remont'} />}*/}
      {/*{showAlert ? (*/}
      {/*  <Alert category={'remont'} onSetShowAlert={onSetShowAlert} />*/}
      {/*) : null}*/}
      <AddButton text="Dodaj" imageName={Add} />
      <Input
        type="search"
        placeholder="Wyszukaj"
        icon={'glass'}
        inputLabel="nazwa pozycji"
      />
      <StyledDateWrap>
        <StyledDate>
          <Input type="date" inputLabel="początek zakresu" />
        </StyledDate>
        {/*<StyledDate onClick={() => setShowAlert(false)}>*/}
        <Input type="date" inputLabel="koniec zakresu" />
        {/*</StyledDate>*/}
      </StyledDateWrap>
      <CategoryList />
      <AccountsList />
    </>
  );
};

export default MainPage;
