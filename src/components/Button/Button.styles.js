import styled from 'styled-components';

export const PrimaryStyledButton = styled.button`
  ${'' /* position: absolute; */}
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

export const WydatkiStyledButton = styled.button.attrs((props) => ({
  text: props.className,
}))`
  background-color: ${(props) => (props.isActive ? '#F4600C' : '#FFFFFF')};
  color: ${(props) => (props.isActive ? '#FFFFFF' : '#F4600C')};
  border: ${(props) => (props.isActive ? 'none' : '3px solid #8B8484')};
  padding: 5px 10px;
  width: 122px;
  height: 36px;
  border-radius: 30px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 15px;
`;

export const PrzychodyStyledButton = styled(WydatkiStyledButton).attrs({
  text: 'Przychody',
})`
  background-color: ${(props) => (props.isActive ? '#638E2B' : '#FFFFFF')};
  color: ${(props) => (props.isActive ? '#FFFFFF' : '#638E2B')};
  border: ${(props) => (props.isActive ? 'none' : '3px solid #8B8484')};
`;

export const StyledIconButton = styled.img`
  height: ${(props) => (props.isSmall ? '25px' : '44px')};
  width: ${(props) => (props.isSmall ? '25px' : '44px')};
  color: #6a5f5f;
`;

export const StyledIconButtonWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
`;

export const StyledIconButtonText = styled.p`
  margin-right: 10px;
  font-size: 30px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 600;
`;
