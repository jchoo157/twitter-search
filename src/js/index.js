require('../css/styles.css');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import logger from 'redux-logger';

const middlewareBuilder = () => {

  let middleware = {};
  let universalMiddleware = [thunk];
  let allComposeElements = [];

  if (process.browser) {
    if (process.env.NODE_ENV === 'development') {
      middleware = applyMiddleware(...universalMiddleware,createLogger());
      allComposeElements = [
        middleware,
      ]
    } else {
      middleware = applyMiddleware(...universalMiddleware);
      allComposeElements = [
        middleware,
      ]
    }
  } else {
    middleware = applyMiddleware(...universalMiddleware);
    allComposeElements = [
      middleware
    ]
  }

  return allComposeElements;

}

function configureStore(initialState) {
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}


let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)