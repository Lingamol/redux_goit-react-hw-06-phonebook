import { propTypes } from 'prop-types';
import { Component } from 'react';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log('name:', this.state.name);
    console.log('number:', this.state.number);
    // const { name, value } = event.currentTarget;
    // this.setState({
    //   [name]: value,
    // });
  };
  onAddContact = () => {
    this.setState(prevState => ({
      contacts: prevState.contacts.push({
        id: 'id - 5',
        name: this.state.name,
        number: this.state.number,
      }),
    }));
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Name
          <input
            onChange={event => this.handleInputChange(event)}
            type="text"
            name="name"
            required
            value={this.state.name}
          />
        </label>
        <label>
          Number
          <input
            onChange={event => this.handleInputChange(event)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;
