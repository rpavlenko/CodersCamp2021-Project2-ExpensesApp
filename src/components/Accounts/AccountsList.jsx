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
    }
];

export const AccountsList = () => {
    return (
        <div> 
            {listOfAccounts.map((item) => 
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