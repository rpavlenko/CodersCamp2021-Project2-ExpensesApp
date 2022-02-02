import { StyledList } from './CategoryList.styles';
import ListItem from './ListItem/ListItem';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const CategoryList = ({ handleClick }) => {
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

  useEffect(() => {
    handleClick = (e) => {
      // let val = e.target.value;
      console.log(e.target.innerText);
    };
  }, [handleClick]);

  return (
    <StyledList>
      {categories.map((category) => (
        <ListItem
          key={category.id}
          item={category}
          handleClick={handleClick}
          filter={category.name}
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
