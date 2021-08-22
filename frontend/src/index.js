import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
$(".app").css("height","100vh");
$(".panel").css("height","100%");
$(".panel > .container-fluid").css("height","auto");