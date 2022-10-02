import PropTypes from 'prop-types';
const Filter = ({ filter, onFilterContact }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={event => {
          onFilterContact(event);
        }}
        value={filter}
      />
    </label>
  );
};
export default Filter;
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterContact: PropTypes.func.isRequired,
};
