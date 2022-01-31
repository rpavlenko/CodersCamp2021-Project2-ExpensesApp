import { AccountsItem } from './AccountsItem';
import { useNavigate } from 'react-router-dom';
import { AccountsContext } from '../../reducers/accounts.reducer';
import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { StyledButton } from './AccountsList.styles';

export const AccountsList = () => {
  const [list] = useContext(AccountsContext);
  const lastFive = list.slice(Math.max(list.length - 5, 0)).reverse();
  const navigate = useNavigate();

  const [accountList, setAccountList] = useState(lastFive);

  return (
    <div>
      {accountList.map((item) => (
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
      ))}
      {accountList.length === list.length ? null : (
        <StyledButton
          onClick={() =>
            setAccountList(
              list
                .slice(Math.max(list.length - (accountList.length + 5), 0))
                .reverse(),
            )
          }
        >
          Pokaż więcej
        </StyledButton>
      )}
    </div>
  );
};
