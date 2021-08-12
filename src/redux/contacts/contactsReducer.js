import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { actions, fetchContacts } from 'redux/contacts';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  // [fetchContacts.pending]: (_, { payload }) => payload,
  // [fetchContacts.rejected]: (_, { payload }) => payload,

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

// import { createSlice } from '@reduxjs/toolkit';
// const contactsSlice = createSlice({
//   name: 'phonebook',
//   initialState: { contacts: [], filter: '' },
//   reducers: {
//     addContact(state, { payload }) {
//       return state.contacts.some(({ name }) => name === payload.name)
//         ? alert(`Contact ${payload.name} already exists`)
//         : { ...state, contacts: [payload, ...state.contacts] };
//     },
//     deleteContact(state, { payload }) {
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload),
//       };
//     },
//     getFilterValue(state, { payload }) {
//       return { ...state, filter: payload };
//     },
//   },
//   extraReducers: builder => {
//     builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
//       return { ...state, contacts: payload };
//     });
//   },
// });

// export const { addContact, deleteContact, getFilterValue } = contactsSlice.actions;

// export default contactsSlice.reducer;
