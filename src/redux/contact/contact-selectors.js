import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleContact = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
      const normalizedFilter = filter.toLowerCase();
      
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactSelectors = {
  getVisibleContact,
  getFilter,
  getAllContacts,
};

export default contactSelectors;