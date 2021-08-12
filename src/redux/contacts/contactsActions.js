import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const getFilterValue = createAction('filter/get');

export { addContact, deleteContact, getFilterValue };
