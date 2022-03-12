import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  margin-top: 200px;
  padding: 30px 20px 0;
  text-align: center;
  background-color: #f8d478;
  border-radius: 15px;
`;

export const StyledHeading = styled.h3`
  font-size: 40px;
  color: green;
  text-transform: uppercase;

  ${props => props.success === 'loading' && css`
    color: red
  `}
`;

export const StyledParagraph = styled.p`
  margin: 40px 0 50px;
  font-size: 20px;
`;