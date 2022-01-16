import styled from 'styled-components';

export const StyledLimit = styled.div`
  position: relative;
  margin-bottom: 21px;
  padding: 10px 32px 10px 37px;
  border: 3px solid #f4600c;
  border-radius: 20px;

  & svg {
    position: absolute;
    content: '';
    top: -33px;
    right: -10px;
  }

  & p {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #f4600c;
  }
`;
