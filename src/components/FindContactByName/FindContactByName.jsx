const FindContactByName = ({ filter, onFilterContact }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        onChange={event => {
          onFilterContact(event);
        }}
        value={filter}
      />
    </div>
  );
};
export default FindContactByName;
