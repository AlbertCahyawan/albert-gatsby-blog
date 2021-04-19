import { createSlice } from '@reduxjs/toolkit';
import blogData from '../data/blog'
export const reduxSlice = createSlice({
    name:'reduxTest',
    initialState:{ 
        blogData, 
    }, 
    reducers: { 
    },
})  
export const { add,reduce,changeWord} = reduxSlice.actions;
 
export const data = state => state.reduxReducer.blogData; 

export default reduxSlice.reducer;