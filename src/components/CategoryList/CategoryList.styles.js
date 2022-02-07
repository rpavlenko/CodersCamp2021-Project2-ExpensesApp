import styled from 'styled-components';

export const StyledList = styled.div`
  display: flex;
  padding: 20px 0;
  overflow-x: scroll;
  scrollbar-width: none;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  //FF browser

  &::-webkit-scrollbar {
    //other browsers
    display: none;
  }
`;
