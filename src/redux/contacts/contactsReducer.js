import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { actions } from 'redux/contacts';

const filter = createReducer('', {
  [actions.getFilterValue]: (_, { payload }) => payload,
});

export default combineReducers({ filter });
