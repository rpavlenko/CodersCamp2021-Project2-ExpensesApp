import PropTypes from 'prop-types';
import { StyledItem } from './ListItem.styles';

const ListItem = ({ item, filter, setFilter, handleClick }) => {
  return (
    <StyledItem
      bgcolor={item.color}
      onClick={handleClick}
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      {item.name}
    </StyledItem>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object,
  color: PropTypes.string,
  name: PropTypes.string,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  handleClick: PropTypes.func,
};
