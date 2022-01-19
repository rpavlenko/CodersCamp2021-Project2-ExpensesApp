import PropTypes from 'prop-types';
import {DetailContainer, NameOfExpense, ColumnContainer, BoldText, StyledAmountColor, PropsRow, IconsContainer, AmountContainer, ConfirmationStyle } from './AccountDetail.styles.js';
import penBig from './penBig.png';
import trashBig from './trashBig.png';


export const AccountDetail = (props) => {
    const {onEditClick, odDeleteClick, item } = props;
    const { date, title, amount, type, category } = item;

    return (
        <DetailContainer>
            <NameOfExpense>
              {type}
            </NameOfExpense>
            <ColumnContainer>
                <BoldText>Data: </BoldText>
                <PropsRow> {date} </PropsRow>
                <BoldText>Kategoria: </BoldText>
                <PropsRow> {category} </PropsRow>
                <BoldText>Nazwa: </BoldText>
                <PropsRow> {title} </PropsRow>
                <AmountContainer>
                    <BoldText>Kwota: </BoldText>
                    <StyledAmountColor isExpense={type === "Wydatek"}>
                        {amount} zł
                    </StyledAmountColor>
                </AmountContainer>
                <BoldText>Potwierdzenie:</BoldText>
                <ConfirmationStyle>Potwierdzenie.jpg</ConfirmationStyle>
            </ColumnContainer>
            <IconsContainer>  
                <img src={trashBig} onClick={odDeleteClick}/>
                <img src={penBig} onClick={onEditClick}/>
            </IconsContainer>
        </DetailContainer>
    );
};

AccountDetail.propTypes = {
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