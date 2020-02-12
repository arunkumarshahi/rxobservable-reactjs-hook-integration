import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
// import { store, fetchUser } from './store';
import { store, fetchUser } from './store';
import { configureStore } from './ducks/configureStore';
// store.subscribe(App);

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
