import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  padding: 20px 0;
  overflow-x: scroll;
  scrollbar-width: none; //FF browser

  &::-webkit-scrollbar { //other browsers
    display: none;
  }
`;