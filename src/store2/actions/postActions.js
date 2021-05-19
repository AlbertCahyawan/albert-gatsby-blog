import { BLOG_DATA, DATA_LOADED } from './types';

export const setBlogData = (payload) => dispatch => { 
  dispatch({
    type: BLOG_DATA,
    payload: payload
  })
};

export const setDataLoaded = () => dispatch => { 
  dispatch({
    type: DATA_LOADED,
    payload: true
  })
}; 