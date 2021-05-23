import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import ContactForm from '../components/ContactForm';
import contactOperations from '../redux/contact/contact-operations';

const { fetchContacts } = contactOperations;

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

ContactsPage.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchContacts: fetchContacts,
};

export default connect(null, mapDispatchToProps)(ContactsPage);