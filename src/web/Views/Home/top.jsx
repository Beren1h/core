import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Home from './home.jsx';
import store from '../../Client/application/store.js';

ReactDOM.render(<Provider store={store}>
  <Home />
</Provider>);