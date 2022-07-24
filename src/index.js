import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import IndexAnimation from "./IndexAnimation"
import reportWebVitals from './reportWebVitals';
import ContextManagers from "./components/templates/ContextHandler"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextManagers>
    <Router>
        <IndexAnimation></IndexAnimation>
    </Router>
  </ContextManagers>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
