import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import contactOperations from '../../redux/contact/contact-operations';
import contactSelectors from '../../redux/contact/contact-selectors';

import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error('ERROR');
    }
  };

  const contacts = useSelector(contactSelectors.getAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const findName = name => {
      const normalizedName = name.toLowerCase();
      return contacts.find(
        contact => contact.name.toLowerCase() === normalizedName,
      );
    };

    const checkName = findName(name);

    if (checkName) {
      alert(`${name} is already in contacts`);
      resetForm();
      return;
    }
    dispatch(contactOperations.addContact({ name, number }));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
      <form onSubmit={handleSubmit} className={styles.addContactForm}>
        <label>
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <span>Number</span>
          <input
            type="tel"
            value={number}
            onChange={handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
};

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   findName = name => {
//     const { contacts } = this.props;
//     const normalizedName = name.toLowerCase();
//     return contacts.find(
//       contact => contact.name.toLowerCase() === normalizedName,
//     );
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { name } = this.state;
//     const { onSubmit } = this.props;

//     const checkName = this.findName(name);

//     if (checkName) {
//       alert(`${name} is already in contacts`);
//       this.resetForm();
//       return;
//     }

//     onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} className={styles.addContactForm}>
//         <label>
//           <span>Name</span>
//           <input
//             type="text"
//             value={name}
//             onChange={this.handleChange}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//           <span>Number</span>
//           <input
//             type="tel"
//             value={number}
//             onChange={this.handleChange}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   contacts: contactSelectors.getAllContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: contact => dispatch(contactOperations.addContact(contact)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);