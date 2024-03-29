import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Itinerary.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Testing, Notes, CreateProjectButton, Date} from './Itinerary.js';
import Login from './login.js';
import Signup from './Signup.js';

//This renders the entire app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
