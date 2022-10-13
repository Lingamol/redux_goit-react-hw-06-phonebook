import PropTypes from 'prop-types';
import { FilterInputLabel, FilterInput } from './Filter.Styled';
const Filter = ({ filter, onFilterContact }) => {
  return (
    <FilterInputLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        onChange={event => {
          onFilterContact(event);
        }}
        value={filter}
      />
    </FilterInputLabel>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterContact: PropTypes.func.isRequired,
};
