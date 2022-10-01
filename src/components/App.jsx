import { number } from 'prop-types';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import FindContactByName from './FindContactByName';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  onDelContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  onFilterContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      ),
    }));
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
  // onAddContact = () => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.push({
  //       id: 'id - 5',
  //       name: this.state.name,
  //       number: this.state.number,
  //     }),
  //   }));
  // };

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
        <ContactForm />

        <h2>Contacts</h2>
        <FindContactByName
          filter={this.state.filter}
          onFilterContact={this.handleInputChange}
        />
        <ContactList
          contacts={this.state.contacts}
          onDelContact={this.onDelContact}
        />
      </div>
    );
  }
}
