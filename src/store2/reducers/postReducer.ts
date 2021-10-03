import { ActionType } from '../actions/types';
import { Action } from '../actions/index';
import { BData } from '@/types';

const initialState: any = {
  dataLoaded: false,
  blogData : [] , 
};


export default function(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.BLOG_DATA:
      return {
        ...state,
        blogData: action.payload
      };
    case ActionType.DATA_LOADED:
      return {
        ...state,
        dataLoaded: action.payload
      };
    default:
      return state;
  }
}
 