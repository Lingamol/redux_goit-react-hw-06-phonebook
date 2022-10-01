import { Component } from 'react';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onDelContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    return total ? total : 0;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm ... /> */}

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList
          contacts={this.state.contacts}
          onDelContact={this.onDelContact}
        />
      </div>
    );
  }
}
