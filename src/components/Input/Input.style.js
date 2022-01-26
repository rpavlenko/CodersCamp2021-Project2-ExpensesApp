import styled from 'styled-components';
import glass from '../../assets/magnifying-glass.png';

export const StyledInput = styled.input`
  width: 100%;
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  color: #6a5f5f;

  ${({ type }) =>
    type === 'search' &&
    `
      display: flex;
      width: 95%;
      font-size: 18px;
      
      &::placeholder {
      color: #6A5F5F;
      }
    `}

  &::-webkit-calendar-picker-indicator{
    margin: 0;
  };
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 2px;
  margin-left: 10px;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  color: #6a5f5f;
`;

export const StyledInputGroup = styled.div`
  //min-width: 267px;
  min-height: 47px;
  padding: 5px 10px;
  border: 2px solid #6a5f5f;
  border-radius: 15px;

  ${({ icon }) =>
    icon &&
    `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;

    & > button {
      background-image: url('${glass}');
      width: 22px;
      height: 22px;
    }
  `};

  &:last-of-type {
    margin-bottom: 45px;
  }
`;
