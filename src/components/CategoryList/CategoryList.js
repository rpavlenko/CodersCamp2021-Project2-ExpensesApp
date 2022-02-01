import { StyledList } from './CategoryList.styles';
import ListItem from './ListItem/ListItem';
import PropTypes from 'prop-types';

const CategoryList = ({ handleClick, filter, setFilter }) => {
  const categories = [
    {
      id: 0,
      name: 'Wszystkie',
      color: 'red',
    },
    {
      id: 1,
      name: 'Ubrania',
      color: 'salmon',
    },
    {
      id: 2,
      name: 'Remont',
      color: 'green',
    },
    {
      id: 3,
      name: 'Leczenie',
      color: 'orange',
    },
    {
      id: 4,
      name: 'Inne',
      color: 'gray',
    },
  ];

  handleClick = (e) => {
    e.target.value = 'category';
    console.log(e.target.value);
  };

  return (
    <StyledList>
      {categories.map((category) => (
        <ListItem
          key={category.id}
          item={category}
          handleClick={handleClick}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      ))}
    </StyledList>
  );
};

CategoryList.propTypes = {
  item: PropTypes.object,
  name: PropTypes.string,
  filter: PropTypes.string,
  handleClick: PropTypes.func,
  setFilter: PropTypes.func,
};
// const handleclick = () => {
//   console.log('click');
// };

export default CategoryList;
