import { StyledList } from './CategoryList.styles';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

const CategoryList = ({ categoryFilter }) => {
  const categories = [
    {
      id: 0,
      name: 'Wszystkie',
      color: '#F4600C',
    },
    {
      id: 1,
      name: 'Ubrania',
      color: '#EEA67E',
    },
    {
      id: 2,
      name: 'Remont',
      color: '#83BEF5',
    },
    {
      id: 3,
      name: 'Leczenie',
      color: '#EFB82B',
    },
    {
      id: 4,
      name: 'Prezent',
      color: '#8088CC',
    },
    {
      id: 5,
      name: 'Inne',
      color: 'gray',
    },
  ];

  return (
    <StyledList>
      {categories.map((category) => (
        <ListItem
          key={category.id}
          item={category}
          value={category.name}
          categoryFilter={categoryFilter}
        />
      ))}
    </StyledList>
  );
};

CategoryList.propTypes = {
  value: PropTypes.string,
  categoryFilter: PropTypes.func,
};

export default CategoryList;
