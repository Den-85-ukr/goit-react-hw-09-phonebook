import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import ContactForm from '../components/ContactForm';
import contactOperations from '../redux/contact/contact-operations';

const { fetchContacts } = contactOperations;

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );  
};