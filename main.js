/**
 * Created by oscar.santisteban on 1/24/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Ejemplo from './Ejemplo.js';
import Menu from './menu.js';


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Ejemplo/>, document.getElementById('other'));
ReactDOM.render(<Menu/>, document.getElementById('other'));

