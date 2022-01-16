import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  padding: 12px 10px;
  width: 271px;
  height: 64px;
  background-color: ${(props) => (props.isActive ? '#638e2b' : '#8B8484')};
  color: #ffffff;
  border: none;
  border-radius: 30px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 26px;
`;

export default StyledButton;
