// import { propTypes } from 'prop-types';
import { Component } from 'react';
// import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { Container, AppTitle, AppContactsListTitle } from './App.styled';
import ContactFormFormik from './ContactFormFormik';
// import InitialContacts from '../js/InitialContacts.js';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onDelContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  onFilterContact = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  heandleSubmitForm = data => {
    console.log(data);
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      )
    )
      alert(`${data.name} is already in contacts`);
    else {
      const newId = nanoid();
      const newContact = { id: newId, ...data };
      console.log(data);
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    console.log('componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log('precState', prevState);
    console.log('State', this.state);
    console.log('precProps', prevProps);
    if (this.state.contacts !== prevState.contacts) {
      console.log('contacts updates');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContacts = this.getVisibleContacts();
    console.log('App ernder');
    return (
      <Container>
        <AppTitle>Phonebook</AppTitle>
        {/* <ContactForm onSubmit={this.heandleSubmitForm} /> */}
        <ContactFormFormik onSubmit={this.heandleSubmitForm} />
        <AppContactsListTitle>Contacts</AppContactsListTitle>
        <Filter
          filter={this.state.filter}
          onFilterContact={this.onFilterContact}
        />
        <ContactList
          contacts={visibleContacts}
          onDelContact={this.onDelContact}
        />
      </Container>
    );
  }
}
