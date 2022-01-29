import { AccountForm } from "../../components/Form/AccountForm";
import { IconButton } from "../../components/Button/Button";
import { useContext } from "react";
import { AccountsContext } from "../../reducers/accounts.reducer";



export const NewPosition = () => {
  const [,dispatch] = useContext(AccountsContext);
  
  const handleSubmit = (data) => {
      console.log(data);
      const id = 'id' + (new Date()).getTime();
      dispatch({type: "addNewAccount", payload: {...data, id}});
  };

  return (
    <>
      <IconButton type="arrow"></IconButton>
      <AccountForm handleSubmit={handleSubmit}/>
    </>
  );
};
