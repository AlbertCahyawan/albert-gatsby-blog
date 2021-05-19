import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reduxSlice from './reduxSlice'; 
 
const middleware = [thunk];

export default configureStore({
  reducer: {
    reduxReducer: reduxSlice,
    middleware: [...middleware]
  },
});
 
