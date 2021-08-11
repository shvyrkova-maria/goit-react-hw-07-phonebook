import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reducer';

const persistConfig = {
  key: 'savedContacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    phonebook: persistReducer(persistConfig, contactsReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };

//====================================================================
// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts/contacts-reducer';

// const rootReducer = combineReducers({ phonebook: contactsReducer });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// import { applyMiddleware } from 'redux';
//   applyMiddleware(logger),
