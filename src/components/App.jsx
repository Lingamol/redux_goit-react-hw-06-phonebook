// import { propTypes } from 'prop-types';
// import { Component } from 'react';
import { useState } from 'react';
// import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { Container, AppTitle, AppContactsListTitle } from './App.styled';
import ContactFormFormik from './ContactFormFormik';
// import InitialContacts from '../js/InitialContacts.js';1
// let initialContacts = [];
import useLocalStorage from 'hooks/useLocalStorage';
// import { useMemo } from 'react';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filterName, setFilterName] = useState('');

  const onDelContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const onFilterContact = event => {
    setFilterName(event.currentTarget.value);
  };

  const heandleSubmitForm = data => {
    // console.log(data);
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      )
    )
      alert(`${data.name} is already in contacts`);
    else {
      const newId = nanoid();
      const newContact = { id: newId, ...data };
      // console.log(data);
      setContacts(prevState => [newContact, ...prevState]);
    }
  };

  // const visibleContacts = useMemo(() => {
  //   const normalizedFilter = filterName.toLocaleLowerCase();
  //   const visibleContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  //   return visibleContacts ? visibleContacts : [];
  // }, [contacts, filterName]);

  const visibleContacts = () => {
    const normalizedFilter = filterName.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts ? visibleContacts : [];
  };

  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      {/* <ContactForm onSubmit={heandleSubmitForm} /> */}
      <ContactFormFormik onSubmit={heandleSubmitForm} />
      <AppContactsListTitle>Contacts</AppContactsListTitle>
      <Filter filter={filterName} onFilterContact={onFilterContact} />
      <ContactList contacts={visibleContacts()} onDelContact={onDelContact} />
    </Container>
  );
};
