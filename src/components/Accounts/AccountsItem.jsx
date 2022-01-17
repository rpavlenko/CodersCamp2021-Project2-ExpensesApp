import PropTypes from 'prop-types';
import { ItemBox, StyledText, StyledTitle, StyledAmount, FirstColumn, SecondColumn, ThirdColumn, StyledIcon  } from './AccountsItem.styles';
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
                <StyledTitle>
                   {title.length > 30 ?
                    `${title.substring(0, 30)}...` : title
                    }
                </StyledTitle>
            </FirstColumn>
            <SecondColumn>
                <StyledText>Kwota: </StyledText>
                <StyledAmount isExpense={type === 1}>{amount} zł</StyledAmount>
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
    item: {
        id: PropTypes.number,
        date: PropTypes.string,
        title: PropTypes.string,
        category: PropTypes.string,
        type: PropTypes.number,
        amount: PropTypes.number,
    },
    onEditClick: PropTypes.func,
    odDeleteClick: PropTypes.func,
  };