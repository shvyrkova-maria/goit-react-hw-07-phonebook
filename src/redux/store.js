import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts/contactsReducer';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export { store };
