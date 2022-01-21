import PropTypes from 'prop-types';
import { ItemBox, StyledText, StyledText2, StyledTitle, StyledAmount, FirstColumn, SecondColumn, ThirdColumn, StyledIcon  } from './AccountsItem.styles';
import pen from './pen.png';
import trash from './trash.png';

export const AccountsItem = (props) => {
    const {onEditClick, odDeleteClick, item } = props;
    const { date, title, amount, type } = item;

    return ( 
        <>
        <ItemBox>
            <FirstColumn> 
                <StyledText>{date}</StyledText> 
                <StyledTitle>{title}</StyledTitle>
            </FirstColumn>
            <SecondColumn>
                <StyledText2>Kwota: </StyledText2>
                <StyledAmount isExpense={type === "Wydatek"}>{amount} zł</StyledAmount>
            </SecondColumn>
            <ThirdColumn>
                <StyledIcon src={pen} onClick={onEditClick}/>
                <StyledIcon src={trash} onClick={odDeleteClick}/>
            </ThirdColumn>
        </ItemBox>
        </>
    );   
};

AccountsItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        date: PropTypes.string,
        title: PropTypes.string,
        category: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.number,
    }),
    onEditClick: PropTypes.func,
    odDeleteClick: PropTypes.func,
  };