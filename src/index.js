import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/redux-store';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  rerenderEntireTree(store.getState());
});

reportWebVitals();
