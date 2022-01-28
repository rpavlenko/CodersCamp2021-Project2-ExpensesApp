import { createContext } from 'react';

export const initialData = [
  {
    id: "1",
    amount: 520,
    category: 'Remont',
    title: 'Farby i kleje',
    date: '10-01-2022',
    attachment: null,
    type: 'Wydatek',
  },
  {
    id: "2",
    amount: 1000,
    category: 'Prezent',
    title: 'Prezent urodzinowy z okazji czterdziestych urodzin w restauracji',
    date: '17-01-2022',
    attachment: null,
    type: 'Przychód',
  },
  {
    id: "3",
    amount: 350,
    category: 'Ubrania',
    title: 'Spodnie i buty zimowe',
    date: '05-01-2022',
    attachment: null,
    type: 'Wydatek',
  },
  {
    id: "4",
    amount: 2000,
    category: 'Prezent',
    title: 'Wynagrodzenie za pracę - miesiąc styczeń',
    date: '28-01-2022',
    attachment: null,
    type: 'Przychód',
  },
  {
    id: "5",
    amount: 120,
    category: 'Leczenie',
    title: 'Wizyta u alergologa',
    date: '04-01-2022',
    attachment: null,
    type: 'Wydatek',
  },
  {
    id: "6",
    amount: 200,
    category: 'Remont',
    title: '(lastone) Panele',
    date: '15-01-2022',
    attachment: null,
    type: 'Wydatek',
  },
];

export const AccountsContext = createContext();

export const accountsReducer = (state, action) => {
  switch (action.type) {
    case 'addNewAccount':
      // eslint-disable-next-line no-case-declarations
      const newValue = [...state, ...action.payload];
      //   In order to save the data between the sessions, we save it temporary in LocalStorage.
      localStorage.setItem('accountsList', JSON.stringify(newValue));
      return newValue;
    // case 'edit':
    //   return {};
    case 'deleteAccount':
      // TODO I will add save to local storage only after we have functionality adding new accounts
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
