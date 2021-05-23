import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";

import actions from './contact-actions';

const {
  fetchContactSuccess,
  fetchContactsError,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} = actions;

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  error,
});