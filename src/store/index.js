import { configureStore } from '@reduxjs/toolkit';
import reduxSlice from './reduxSlice'; 

export default configureStore({
  reducer: {
    reduxReducer: reduxSlice,
  },
});
 
