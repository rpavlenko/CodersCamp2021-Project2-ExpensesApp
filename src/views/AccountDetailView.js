import {AccountDetail} from '../components/AccountDetail/AccountDetail';
import {useParams } from "react-router-dom";
import { AccountsContext } from "../reducers/accounts.reducer";
import { useContext } from "react";

export const AccountDetailView = () => {
    const {id} = useParams();
    const [list] = useContext(AccountsContext);
    const account = list.find(item => item.id == id);
    
    return (
        <>
        <AccountDetail  
            item={account} 
            odDeleteClick={() => console.log('delete')} 
            onEditClick={() => console.log('edit')}
        />
        </>
        
    );
};