import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Props1 from './Props1';
import Props2 from './Props2';
import Stateex from './Stateex';
import Validprop from './Validprop';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Props1 text={{uname:'Jai Hind'}} />
  <Props1 text={{uname:'love army'}}   data = 'helo' />  
  <Props2 text={{pname:'Prasanna'}} />
  <Stateex />
  <Validprop data={30} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
