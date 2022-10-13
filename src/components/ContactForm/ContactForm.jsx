import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useState } from 'react';
import {
  FormContact,
  FormInputLabel,
  FormInput,
  FormBtn,
} from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInpuId = shortid.generate();
  const numberInputId = shortid.generate();
  const handleInputChange = event => {
    // console.log(event.currentTarget.value);
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name: name, number: number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContact onSubmit={event => handleSubmit(event)}>
      <FormInputLabel l htmlFor={nameInpuId}>
        Name
        <FormInput
          onChange={event => handleInputChange(event)}
          value={name}
          id={nameInpuId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormInputLabel>
      <FormInputLabel htmlFor={numberInputId}>
        Number
        <FormInput
          onChange={event => handleInputChange(event)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          id={numberInputId}
        />
      </FormInputLabel>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormContact>
  );
};

export default ContactForm;
ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
