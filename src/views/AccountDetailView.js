import {AccountDetail} from '../components/AccountDetail/AccountDetail';
import { useParams, useNavigate } from "react-router-dom";
import { AccountsContext } from "../reducers/accounts.reducer";
import { useContext } from "react";
import { IconButton } from '../components/Button/Button';

export const AccountDetailView = () => {
    const {id} = useParams();
    const [list] = useContext(AccountsContext);
    const account = list.find(item => item.id == id);
    const navigate = useNavigate();

    const onEditClick = () => {
        navigate(`/new${id}`);
    };
    
    return (
        <>
        <IconButton type="arrow"></IconButton>
        <AccountDetail
            item={account} 
            odDeleteClick={() => console.log('delete')} 
            onEditClick={() => onEditClick()}
        />
        </>
        
    );
};