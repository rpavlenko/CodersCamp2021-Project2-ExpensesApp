import { StyledList } from './CategoryList.styles';
import ListItem from './ListItem/ListItem';

const CategoryList = () => {
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

  return (
    <StyledList>
      {categories.map((category) => (
        <ListItem key={category.id} item={category} />
      ))}
    </StyledList>
  );
};

export default CategoryList;
