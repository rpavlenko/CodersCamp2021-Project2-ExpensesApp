import { StyledList } from './CategoryList.styles';
import ListItem from './ListItem/ListItem';
import PropTypes from 'prop-types';
import { initialData } from '../Form/AccountForm';

const CategoryList = ({ category, setCategory }) => {
  const categories = localStorage.getItem('categories')
    ? JSON.parse(localStorage.getItem('categories'))
    : initialData;

  return (
    <StyledList>
      {categories.map((item) => (
        <ListItem
          key={item.label}
          item={item}
          onClick={() => setCategory(item.label)}
          bgColor={item.color}
          isActive={category === item.label}
        />
      ))}
    </StyledList>
  );
};

CategoryList.propTypes = {
  onSubmit: PropTypes.object,
  category: PropTypes.object,
  setCategory: PropTypes.func,
};

export default CategoryList;
