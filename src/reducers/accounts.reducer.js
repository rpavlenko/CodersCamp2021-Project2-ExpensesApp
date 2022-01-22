import { createContext } from 'react';

export const initialData = {
    1: {
        id: 1,
        amount: 120,
        category: "Remont",
        title: "Farby i kleje",
        date: "03-01-2022",
        attachment: null,
        type: "Wydatek",
    },
    2: {
        id: 2,
        amount: 10,
        category: "Prezent",
        title: "Prezent urodzinowy z okazji czterdziestych urodzin w restauracji",
        date: "03-01-2022",
        attachment: null,
        type: "Przychód",
    },
    3: {
        id: 3,
        amount: 120,
        category: "Remont",
        title: "Farby i kleje",
        date: "03-01-2022",
        attachment: null,
        type: "Wydatek",
    },
    4: {
        id: 4,
        amount: 10,
        category: "Prezent",
        title: "klejehdjhgdfjhsdgjfhgsjhfghgjjhggjhgkuy7uyurtyrtererw",
        date: "03-01-2022",
        attachment: null,
        type: "Przychód",
    },
    5: {
        id: 5,
        amount: 120,
        category: "Remont",
        title: "Farby i kleje",
        date: "03-01-2022",
        attachment: null,
        type: "Wydatek",
    },
    6: {
        id: 6,
        amount: 10,
        category: "Prezent",
        title: "lastone",
        date: "03-01-2022",
        attachment: null,
        type: "Przychód",
    }
  };
  
  export const AccountsContext = createContext();
  
  export const accountsReducer = (state, action) => {
    switch (action.type) {
      case 'addNewAccount':
        return {...state, ...action.payload};
      // case 'edit':
      //   return {};
      // case 'delete':
      //   return {};
      default:
        return state;
    }
  };
  