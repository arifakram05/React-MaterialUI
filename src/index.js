// https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f
import React from 'react'; // Main React lib
import ReactDOM from 'react-dom'; // Main React DOM lib
import { Provider } from 'react-redux'; // Injects Redux to components
import { createStore, applyMiddleware } from 'redux'; // Redux
import ReduxPromise from 'redux-promise'; // Middleware

import App from './components/app';
import reducers from './reducers'; // import reducers

// Configure middleware with redux-promise for AJAX requests
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
