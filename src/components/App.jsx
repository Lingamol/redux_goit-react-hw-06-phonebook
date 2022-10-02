// import { propTypes } from 'prop-types';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import FindContactByName from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onDelContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  onFilterContact = event => {
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(name.toLowerCase())
    //   ),
    // }));
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
  // handleInputChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log('name:', this.state.name);
  //   console.log('number:', this.state.number);
  //   // const { name, value } = event.currentTarget;
  //   // this.setState({
  //   //   [name]: value,
  //   // });
  // };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.heandleSubmitForm} />

        <h2>Contacts</h2>
        <FindContactByName
          filter={this.state.filter}
          onFilterContact={this.onFilterContact}
        />
        <ContactList
          contacts={visibleContacts}
          onDelContact={this.onDelContact}
        />
      </div>
    );
  }
}
