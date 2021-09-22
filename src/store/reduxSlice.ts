import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import type { RootState } from '@/store'
import { BData } from '@/types';

export const reduxSlice = createSlice({
    name:'reduxSlice',
    initialState:{ 
        dataLoaded: false,
        blogData:[], 
    }, 
    reducers: {  
        // may need to set right payload type
        setBlogData: (state,action: PayloadAction<BData[]>) => {    
           state.blogData = action.payload;
        },
        setDataLoaded: (state) => {   
            state.dataLoaded = true;
        }, 
    }
}) 

export const { setBlogData,setDataLoaded } = reduxSlice.actions;
 
export const data = (state: RootState) => state.reduxReducer.blogData; 
export const hasLoaded = (state: RootState) => state.reduxReducer.dataLoaded; 

export default reduxSlice.reducer;

