import { AccountsItem } from "./AccountsItem";
import { useNavigate } from "react-router-dom";
import { AccountsContext } from "../../reducers/accounts.reducer";
import { useContext } from "react";

export const AccountsList = () => {
    const [list] = useContext(AccountsContext);
    const lastFive = list.slice(Math.max(list.length - 5, 0)).reverse();
    const navigate = useNavigate();

    return (
        <div> 
            {lastFive.map((item) => 
                <AccountsItem 
                    key={item.id} 
                    item={item} 
                    odDeleteClick={(e) => {
                        console.log('delete');
                        e.stopPropagation();
                    }} 
                    onEditClick={(e) => {
                        console.log('edit');
                        e.stopPropagation();
                    }} 
                    onClick={() => navigate(`/detail/${item.id}`)}
                />
            )}
        </div>
    );
};