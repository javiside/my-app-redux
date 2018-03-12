import './globalStyle/index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

// Injecting the merged reducers and the thunk middleware to the store 
const store = createStore(rootReducer, applyMiddleware(thunk));

// Wrapping the App with the Provider, to be able to access the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import registerServiceWorker from './testAndWorker/registerServiceWorker';
registerServiceWorker();
