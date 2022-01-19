import styled from "styled-components";

export const StyledItem = styled.li`
  margin: 0 4px;
  padding: 6px 18px;
  font-size: 14px;
  text-align: center;
  color: white;
  background-color: ${(props) => props.bgcolor};
  border-radius: 15px;
`;