import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { actions, fetchContacts } from 'redux/contacts';

const contacts = createReducer([], {
  //   [fetchContacts.fulfilled]: (_, { payload }) => payload,
  //   [actions.addContact]: (state, { payload }) =>
  //     state.some(({ name }) => name === payload.name)
  //       ? alert(`Contact ${payload.name} already exists`)
  //       : [payload, ...state],
  //   [actions.deleteContact]: (state, { payload }) =>
  //     state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  //   [actions.getFilterValue]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
