import React from 'react';
// redux
import { Provider } from 'react-redux';
import store  from './store'
// views
import Home from './views/home'

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
)
