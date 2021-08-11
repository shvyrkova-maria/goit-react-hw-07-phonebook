import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add');
const deleteContact = createAction('phonebook/delete');
const getFilterValue = createAction('filter/get');

export { addContact, deleteContact, getFilterValue };
