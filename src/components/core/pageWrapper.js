import React from 'react';
import { Provider } from 'react-redux'; 
import store from '@/store'; 
import App from './app' 
// this is for using normal method without redux toolkit just commment on which one you want to use
// import store from '@/store2'; 

export default ({ element }) => (
  <Provider store={store}>
    <App>
      {element}
    </App>
  </Provider>
);
  
 
 
