// import PropTypes from 'prop-types';
import { FilterTitle, FilterInput } from './Filter.styled';
import { setFilterValue } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const filterInputHandler = event => {
    const inputValue = event.target.value;
    dispatch(setFilterValue(inputValue));
  };

  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        // value={inputValue}
        onChange={filterInputHandler}
        title="Search field"
        required
      />
    </div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
