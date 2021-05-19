import { createSlice } from '@reduxjs/toolkit';
export const reduxSlice = createSlice({
    name:'reduxSlice',
    initialState:{ 
        dataLoaded: false,
        blogData:{}, 
    }, 
    reducers: {  
        setBlogData: (state,action) => {    
           state.blogData = action.payload;
        },
        setDataLoaded: (state) => {   
            state.dataLoaded = true;
        },
    }
}) 

export const { setBlogData,setDataLoaded } = reduxSlice.actions;
 
export const data = state => state.reduxReducer.blogData; 
export const hasLoaded = state => state.reduxReducer.dataLoaded; 

export default reduxSlice.reducer;

