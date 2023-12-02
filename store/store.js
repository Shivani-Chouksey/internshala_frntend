import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import studentReducer from './Reducers/studentReducer';
import employeReducer from './Reducers/employeReducer';

import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    studentReducer,
    employeReducer,
  },
  middleware: [thunk], // Add Redux Thunk middleware
});
