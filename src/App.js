import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store'

export default () => (
  <ReduxProvider store = {store}>
    
  </ReduxProvider>
);
