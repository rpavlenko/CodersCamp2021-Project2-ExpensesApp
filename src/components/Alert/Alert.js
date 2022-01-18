import PropTypes from 'prop-types';
import { StyledAlert, StyledTitle, StyledText } from './Alert.styles';

export default function Alert({ category }) {
  return (
    <StyledAlert>
      <StyledTitle>ALERT</StyledTitle>
      <StyledText>
        Przekroczyłeś limit wydatków w kategorii {category}.
      </StyledText>

      {/* place for button */}
    </StyledAlert>
  );
}

Alert.propTypes = {
  category: PropTypes.string.isRequired,
};
