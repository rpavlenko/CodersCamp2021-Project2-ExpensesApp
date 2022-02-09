import PropTypes from 'prop-types';
import {
  DetailContainer,
  NameOfExpense,
  ColumnContainer,
  BoldText,
  StyledAmountColor,
  PropsRow,
  IconsContainer,
  ConfirmationStyle,
  StyledImg,
} from './AccountDetail.styles.js';
import penBig from './penBig.png';
import trashBig from './trashBig.png';

export const AccountDetail = (props) => {
  const { onEditClick, odDeleteClick, item } = props;
  const { date, title, amount, type, category } = item;

  return (
    <DetailContainer>
      <NameOfExpense>{type}</NameOfExpense>
      <ColumnContainer>
        <BoldText>Data: </BoldText>
        <PropsRow> {date} </PropsRow>
        <BoldText>Kategoria: </BoldText>
        <PropsRow> {category} </PropsRow>
        <BoldText>Nazwa: </BoldText>
        <PropsRow> {title} </PropsRow>
        <BoldText>Kwota: </BoldText>
        <StyledAmountColor isExpense={type === 'Wydatek'}>
          {' '}
          {amount} zł{' '}
        </StyledAmountColor>
        <BoldText>Potwierdzenie:</BoldText>
        <ConfirmationStyle>Potwierdzenie.jpg</ConfirmationStyle>
      </ColumnContainer>
      <IconsContainer>
        <StyledImg src={penBig} onClick={onEditClick} />
        <StyledImg src={trashBig} onClick={odDeleteClick} />
      </IconsContainer>
    </DetailContainer>
  );
};

AccountDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
  }),
  onEditClick: PropTypes.func,
  odDeleteClick: PropTypes.func,
};
