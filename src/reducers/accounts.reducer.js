import { createContext } from 'react';

export const initialData = [
  {
    id: '1',
    amount: 520,
    category: 'Remont',
    title: 'Farby i kleje',
    date: '2022-01-10',
    attachment: null,
    type: 'Wydatek',
  },
  {
    id: '2',
    amount: 1000,
    category: 'Prezent',
    title: 'Prezent urodzinowy z okazji czterdziestych urodzin w restauracji',
    date: '2022-01-17',
    attachment: null,
    type: 'Przychód',
  },
  {
    id: '3',
    amount: 350,
    category: 'Ubrania',
    title: 'Spodnie i buty zimowe',
    date: '2022-01-05',
    attachment: null,
    type: 'Wydatek',
  },
  {
    id: '4',
    amount: 2000,
    category: 'Prezent',
    title: 'Wynagrodzenie za pracę - miesiąc styczeń',
    date: '2022-01-28',
    attachment: null,
    type: 'Przychód',
  },
  {
    id: '5',
    amount: 120,
    category: 'Leczenie',
    title: 'Wizyta u alergologa',
    date: '2022-01-04',
    attachment: null,
    type: 'Wydatek',
  },
  {
    id: '6',
    amount: 200,
    category: 'Remont',
    title: '(lastone) Panele',
    date: '2022-01-15',
    attachment: null,
    type: 'Wydatek',
  },
];

export const AccountsContext = createContext();

const accountFromLocalStorage = JSON.parse(
  localStorage.getItem('accountsList'),
);
export const accountsReducer = (state, action) => {
  let changedList;
  switch (action.type) {
    case 'addNewAccount':
      changedList = [...state, action.payload];
      //   In order to save the data between the sessions, we save it temporary in LocalStorage.
      localStorage.setItem('accountsList', JSON.stringify(changedList));
      return changedList;
    // case 'edit':
    //   return {};
    case 'filterAccounts':
      return action.payload;
    case 'resetAccounts':
      return accountFromLocalStorage;
    case 'deleteAccount':
      changedList = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('accountsList', JSON.stringify(changedList));
      return changedList;
    default:
      return state;
  }
};
