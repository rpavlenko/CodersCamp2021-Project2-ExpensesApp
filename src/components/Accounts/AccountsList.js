import { AccountDetail } from "../AccountDetail/AccountDetail";
import { AccountsItem } from "./AccountsItem";
import { AccountsContext } from "../../reducers/accounts.reducer";
import { useContext } from "react";

export const AccountsList = () => {
    const [list] = useContext(AccountsContext);
    const arrayList = Object.values(list);
    const lastFive = arrayList.slice(Math.max(arrayList.length - 5, 0)).reverse();
    const detailedAccount = list[1];
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