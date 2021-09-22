import { configureStore, MiddlewareArray  } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reduxSlice from './reduxSlice'; 

// Middleware handle need fixing
// additionalMiddleware, logge
const middleware = [thunk];

const store = configureStore({
  reducer: {
    reduxReducer: reduxSlice,
    // middleware: (getDefaultMiddleware:any) =>
    //   getDefaultMiddleware() 
    //     .concat(...middleware),

    // middleware: new MiddlewareArray().concat(...middleware),
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store

 