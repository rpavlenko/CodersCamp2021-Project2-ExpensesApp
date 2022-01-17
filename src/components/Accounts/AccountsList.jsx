import { AccountsItem } from "./AccountsItem";

const listOfAccounts = [
    {
        id: 1,
        amount: 120,
        category: "Remont",
        title: "Farby i kleje",
        date: "03-01-2022",
        attachment: null,
        type: 1,
    },
    {
        id: 2,
        amount: 10,
        category: "Prezent",
        title: "klejehdjhgdfjhsdgjfhgsjhfghgjjhggjhgkuy7uyurtyrtererw",
        date: "03-01-2022",
        attachment: null,
        type: 2,
    },
    {
        id: 3,
        amount: 120,
        category: "Remont",
        title: "Farby i kleje",
        date: "03-01-2022",
        attachment: null,
        type: 1,
    },
    {
        id: 4,
        amount: 10,
        category: "Prezent",
        title: "klejehdjhgdfjhsdgjfhgsjhfghgjjhggjhgkuy7uyurtyrtererw",
        date: "03-01-2022",
        attachment: null,
        type: 2,
    },
    {
        id: 5,
        amount: 120,
        category: "Remont",
        title: "Farby i kleje",
        date: "03-01-2022",
        attachment: null,
        type: 1,
    },
    {
        id: 6,
        amount: 10,
        category: "Prezent",
        title: "lastone",
        date: "03-01-2022",
        attachment: null,
        type: 2,
    }
];

export const AccountsList = () => {
    const lastFive = listOfAccounts.slice(Math.max(listOfAccounts.length - 5, 0)).reverse();

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
        </div>
    );
};