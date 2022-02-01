import PropTypes from 'prop-types';
import { AccountsItem } from "./AccountsItem";
import { useNavigate } from "react-router-dom";

export const AccountsList = ({ list }) => {
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

AccountsList.propTypes = {
  list: PropTypes.array.isRequired,
};