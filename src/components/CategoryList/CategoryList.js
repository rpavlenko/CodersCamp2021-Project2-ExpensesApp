import { StyledList } from './CategoryList.styles';
import ListItem from './ListItem/ListItem';
import PropTypes from 'prop-types';
import { apiUrl } from '../../utils/serverURL';
import { useEffect, useState } from 'react';

const allCategories = {
  name: 'Wszystkie',
  color: '#8b796e',
};

const CategoryList = ({ category, setCategory }) => {
  const getInitialCategories = async () => {
    const userToken = JSON.parse(localStorage.getItem('user')).token;
    const response = await fetch(apiUrl.categories, {
      headers: {
        'Content-Type': 'application/json',
        'authorization-token': userToken,
      },
    });
    const data = await response.json();
    setCategoryList(data);
  };
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getInitialCategories();
  }, []);

  const categoriesWithAll = [allCategories, ...categoryList];
  return (
    <StyledList>
      {categoriesWithAll.map((item) => (
        <ListItem
          key={item.name}
          item={item}
          onClick={() => setCategory(item.name)}
          bgColor={item.color || '#8b796e'}
          isActive={category === item.name}
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
