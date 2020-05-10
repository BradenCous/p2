import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { provider, Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';


const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);


ReactDOM.render(
  // <React.StrictMode></React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  
  ,
  document.getElementById('root')
);

//React.StrictMode???

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
