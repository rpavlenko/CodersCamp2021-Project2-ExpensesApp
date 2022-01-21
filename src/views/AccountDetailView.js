import {AccountDetail} from '../components/AccountDetail/AccountDetail';
import {useParams } from "react-router-dom";

export const AccountDetailView = () => {
    const {id} = useParams();

    const temporaryAccount = {
        id: 6,
        amount: 10,
        category: "Prezent",
        title: "lastone",
        date: "03-01-2022",
        attachment: null,
        type: "Przychód",
    };

    return (
        <>
        <h1>We are on detail page of id: {id}</h1>
         <AccountDetail  
            item={temporaryAccount} 
            odDeleteClick={() => console.log('delete')} 
            onEditClick={() => console.log('edit')}
        />
        </>
        
    );
};