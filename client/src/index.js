import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
const store = createStore(applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>Hola Mundo</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
registerServiceWorker();
