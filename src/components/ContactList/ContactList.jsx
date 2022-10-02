import PropTypes from 'prop-types';
import {
  ListItemText,
  ListItem,
  List,
  ListItemBtn,
} from './ContactList.sryled';

const ContactList = ({ contacts, onDelContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemText>{name}</ListItemText>
          <ListItemText>{number}</ListItemText>
          <ListItemBtn onClick={() => onDelContact(id)}>Delete</ListItemBtn>
        </ListItem>
      ))}
    </List>
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
  onDelContact: PropTypes.func.isRequired,
};
