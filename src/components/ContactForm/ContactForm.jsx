import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInpuId = shortid.generate();
  numberInputId = shortid.generate();
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    // console.log('name:', this.state.name);
    // console.log('number:', this.state.number);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label htmlFor={this.nameInpuId}>
          Name
          <input
            onChange={event => this.handleInputChange(event)}
            value={this.state.name}
            id={this.nameInpuId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            onChange={event => this.handleInputChange(event)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            id={this.numberInputId}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;
ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
