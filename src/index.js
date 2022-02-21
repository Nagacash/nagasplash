import React from 'react';
import ReactDOM from 'react-dom';
import MyProvider from './context/MyProvider'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <MyProvider><App /></MyProvider>
    , document.querySelector('#root')
);


