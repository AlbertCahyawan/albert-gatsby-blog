import { ActionType } from './types';
import { Action } from '../actions/index';
import { Dispatch } from 'redux';

export const setBlogData = (payload: any) => {
  return (dispatch: Dispatch<Action> )=> { 
    dispatch({
      type: ActionType.BLOG_DATA,
      payload: payload
    })
  };
}
  

export const setDataLoaded = () => {
  return (dispatch : Dispatch<Action>) => { 
    dispatch({
      type: ActionType.DATA_LOADED,
      payload: true
    })
  }; 

}