import PropTypes from 'prop-types';
import { ListItemText } from './ContactList.sryled';

const ContactList = ({ contacts, onDelContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ListItemText>{name}</ListItemText>
          <ListItemText>{number}</ListItemText>
          <button onClick={() => onDelContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
