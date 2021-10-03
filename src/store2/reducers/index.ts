import { combineReducers } from 'redux';
import postReducer from './postReducer';

const reducers = combineReducers({
    reduxReducer: postReducer,
});
 
export default  reducers
export type RootState = ReturnType<typeof reducers>