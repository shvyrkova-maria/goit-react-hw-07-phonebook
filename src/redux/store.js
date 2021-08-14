import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import logger from 'redux-logger';
import contactsReducer from './contacts/contactsReducer';
import { contactApi } from 'services/contactApi';

// const middleware = [...getDefaultMiddleware(), logger, contactApi.middleware];
const middleware = [...getDefaultMiddleware(), contactApi.middleware];

const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

setupListeners(store.dispatch);
export { store };
