import PropTypes from 'prop-types';
import { StyledItem } from './ListItem.styles';

const ListItem = ({ item, value, categoryFilter }) => {
  return (
    <StyledItem
      bgcolor={item.color}
      value={value}
      onClick={() => categoryFilter(item.name)}
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
  categoryFilter: PropTypes.func,
  value: PropTypes.string,
};
