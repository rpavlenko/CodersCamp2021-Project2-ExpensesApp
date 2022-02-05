import { AccountsItem } from './AccountsItem';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './AccountsList.styles';
import PropTypes from 'prop-types';

export const AccountsList = ({ list, dispatch }) => {
  const lastFive = list.slice(Math.max(list.length - 5, 0)).reverse();
  const navigate = useNavigate();

  return (
    <div>
      {lastFive.map((item) => (
        <AccountsItem
          key={item.id}
          item={item}
          odDeleteClick={(e) => {
            dispatch({ type: 'deleteAccount', payload: { id: item.id } });
            e.stopPropagation();
          }}
          onEditClick={(e) => {
            navigate(`/detail/${item.id}/edit`);
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

AccountsList.propTypes = {
  list: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
};
