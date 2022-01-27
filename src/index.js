import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';

import './CSS/index.css';
import './CSS/fonts.css';

import App from './App';
import NotFound from './components/NotFound';
import Connexion from './components/Connexion'

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Connexion/>} />
      <Route path='/pseudo/:pseudo' element={<App/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
