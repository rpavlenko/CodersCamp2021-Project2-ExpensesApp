import PropTypes from 'prop-types';
import { StyledItem } from './ListItem.styles';

const ListItem = ({ item }) => {
  return <StyledItem bgcolor={item.color}>{item.name}</StyledItem>;
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object,
  color: PropTypes.string,
  name: PropTypes.string,
};
