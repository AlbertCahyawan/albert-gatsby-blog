import { BLOG_DATA, DATA_LOADED } from '../actions/types';

const initialState = {
  dataLoaded: false,
  blogData:{}, 
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BLOG_DATA:
      return {
        ...state,
        blogData: action.payload
      };
    case DATA_LOADED:
      return {
        ...state,
        dataLoaded: action.payload
      };
    default:
      return state;
  }
}
 