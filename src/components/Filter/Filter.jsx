const FindContactByName = ({ filter, onFilterContact }) => {
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
export default FindContactByName;
