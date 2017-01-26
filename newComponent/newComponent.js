/**
 * Created by oscar.santisteban on 1/26/2017.
 */
import React from 'react';
import '../styles.scss';
import {createStore, combineReducers, applyMiddleware} from 'redux';
//combineReducers is for applying multiple reducers

import logger from 'redux-logger';

class NewComponent extends React.Component{
    constructor(){
        super();

    }

    render() {
        return <div className="menu">
            This is a new component
            <ul className="menu__items">
                <li className="menu__item"><a className="menu__itemContent">FIRST</a></li>
                <li className="menu__item"><a className="menu__itemContent">SECOND</a></li>
                <li className="menu__item"><a className="menu__itemContent">THIRD</a></li>
            </ul>
        </div>
    }
};

export default NewComponent;