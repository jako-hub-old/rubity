import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store'
import MainLayout from './main/layouts/MainLayout';
import './styles/tailwind.css';
import './css/app.css';

export default () => (
  <ReduxProvider store = {store}>
    <MainLayout />
  </ReduxProvider>
);
