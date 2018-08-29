// https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f
import React from 'react'; // Main React lib
import ReactDOM from 'react-dom'; // Main React DOM lib
import { Provider } from 'react-redux'; // Injects Redux to components
import { createStore, applyMiddleware } from 'redux'; // Redux
import ReduxPromise from 'redux-promise'; // Middleware
import createSagaMiddleware from 'redux-saga'; // Redux saga

import App from './components/app';
import rootReducer from './reducers/index'; // import reducers
import sagas from './sagas/sagas'; // import sagas

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// Configure middleware with redux-promise for AJAX requests
const defaultState = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, defaultState, applyMiddleware(ReduxPromise, sagaMiddleware));
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
