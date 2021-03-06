import { useSelector, useDispatch } from 'react-redux';

import contactSelectors from '../../redux/contact/contact-selectors';
import contactOperations from '../../redux/contact/contact-operations';
import ListItem from "../ListItem";

import styles from "./ContactList.module.scss";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.getVisibleContact);

  const onDeleteContact = contactId =>
    dispatch(contactOperations.deleteContact(contactId));

  return (
    <ul className={styles.phoneBookList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteItem={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};