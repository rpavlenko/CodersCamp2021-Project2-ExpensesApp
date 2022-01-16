import { StyledAlert, StyledTitle, StyledText } from './Alert.styles';

export default function Alert() {
  return (
    <StyledAlert>
      <StyledTitle>ALERT</StyledTitle>
      <StyledText>Przekroczyłeś limit wydatków w kategorii remont.</StyledText>

      {/* place for button */}
    </StyledAlert>
  );
}
