import { StyledList } from './CategoryList.styles';
import ListItem from './ListItem/ListItem';
import PropTypes from 'prop-types';
import { initialData } from '../Form/AccountForm';

const allCategories = {
  value: 'wszystkie',
  label: 'Wszystkie',
  color: '#8b796e',
};
const CategoryList = ({ category, setCategory }) => {
  const categories = localStorage.getItem('categories')
    ? JSON.parse(localStorage.getItem('categories'))
    : initialData;

  const categoriesWithAll = [allCategories, ...categories];
  return (
    <StyledList>
      {categoriesWithAll.map((item) => (
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
  category: PropTypes.string,
  setCategory: PropTypes.func,
};

export default CategoryList;
