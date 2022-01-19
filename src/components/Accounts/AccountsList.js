import { AccountDetail } from "../AccountDetail/AccountDetail";
import { AccountsItem } from "./AccountsItem";

const listOfAccounts = [
    {
        id: 1,
        amount: 120,
        category: "Remont",
        title: "Farby i kleje",
        date: "03-01-2022",
        attachment: null,
        type: "Wydatek",
    },
    {
        id: 2,
        amount: 10,
        category: "Prezent",
        title: "Prezent urodzinowy z okazji czterdziestych urodzin w restautacji",
        date: "03-01-2022",
        attachment: null,
        type: "Przychód",
    },
    {
        id: 3,
        amount: 120,
        category: "Remont",
        title: "Farby i kleje",
        date: "03-01-2022",
        attachment: null,
        type: "Wydatek",
    },
    {
        id: 4,
        amount: 10,
        category: "Prezent",
        title: "klejehdjhgdfjhsdgjfhgsjhfghgjjhggjhgkuy7uyurtyrtererw",
        date: "03-01-2022",
        attachment: null,
        type: "Przychód",
    },
    {
        id: 5,
        amount: 120,
        category: "Remont",
        title: "Farby i kleje",
        date: "03-01-2022",
        attachment: null,
        type: "Wydatek",
    },
    {
        id: 6,
        amount: 10,
        category: "Prezent",
        title: "lastone",
        date: "03-01-2022",
        attachment: null,
        type: "Przychód",
    }
];

export const AccountsList = () => {
    const lastFive = listOfAccounts.slice(Math.max(listOfAccounts.length - 5, 0)).reverse();
    const detailedAccount = listOfAccounts[1];
    return (
        <div> 
            {lastFive.map((item) => 
                <AccountsItem 
                    key={item.id} 
                    item={item} 
                    odDeleteClick={() => console.log('delete')} 
                    onEditClick={() => console.log('edit')}
                />
            )}
            <AccountDetail  
                item={detailedAccount} 
                odDeleteClick={() => console.log('delete')} 
                onEditClick={() => console.log('edit')}
            />
        </div>
    );
};