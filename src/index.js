import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { ContextProvider } from "./context/Context"
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
      <App />  
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

