import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContext from './context/context';
import { Provider } from 'react-redux';
import {store} from '../src/Redux/configStore/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <Provider store={store}>
  // <AppContext>
  <Provider store={store}>
    <App />
  </Provider>
  // </AppContext>
  // </Provider>
  // </React.StrictMode>
);
reportWebVitals();
