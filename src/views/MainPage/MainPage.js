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
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../utils/helpers/api/categories/categories';

const MainPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [category, setCategory] = useState('Wszystkie');

  const { accountsState, limitsState } = useContext(AccountsContext);
  const [limits, limitsDispatch] = limitsState;
  const onSetShowAlert = () => limitsDispatch({ type: 'closeLastLimit' });

  const [list, dispatch] = accountsState;
  const [listToShow, setListToShow] = useState(list);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    getCategories()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);
  console.log('Categories', categories);

  useEffect(() => {
    setListToShow(list);
    filterList();
  }, [list, category]);
  let filteredList = list;

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

    if (category !== 'Wszystkie') {
      filteredList = filteredList.filter((item) => item.category === category);
    }
    if (filteredList) setListToShow(filteredList);
  };

  return (
    <>
      <Table />
      {limits.lastReachedLimit ? <Limit limitList={limits.list} /> : null}
      {limits.lastReachedLimit && !limits?.lastReachedLimit?.closed ? (
        <Alert
          category={limits?.lastReachedLimit?.label}
          onSetShowAlert={onSetShowAlert}
        />
      ) : null}
      <AddButton
        text="Dodaj"
        imageName={Add}
        onClick={() => navigate(`/new`)}
      />
      <Input
        type="search"
        placeholder="Wyszukaj"
        icon={'glass'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onSearchClick={filterList}
      />
      <StyledDateWrap>
        <StyledDate>
          <Input
            type="date"
            inputLabel="Początek zakresu"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
          />
        </StyledDate>
        <StyledDate>
          <Input
            type="date"
            inputLabel="Koniec zakresu"
            value={dateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
          />
        </StyledDate>
      </StyledDateWrap>
      <CategoryList category={category} setCategory={setCategory} />
      <AccountsList list={listToShow} dispatch={dispatch} />
    </>
  );
};
export default MainPage;
