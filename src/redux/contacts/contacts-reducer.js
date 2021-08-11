import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from 'redux/contacts/contacts-actions';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

const contacts = createReducer(contactsInitialState, {
  [actions.addContact]: (state, { payload }) =>
    state.some(({ name }) => name === payload.name)
      ? alert(`Contact ${payload.name} already exists`)
      : [payload, ...state],

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.getFilterValue]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
