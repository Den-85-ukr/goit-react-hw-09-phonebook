import axios from 'axios';

import contactActions from './contact-actions';

const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = contactActions;

//axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest());
    try {
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data))
    } catch (error) {
        dispatch(fetchContactError(error));
    };
};
    
const addContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

const contactOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactOperations;