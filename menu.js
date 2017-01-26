/**
 * Created by oscar.santisteban on 1/24/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent.js'
import './styles.scss';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
//combineReducers is for applying multiple reducers

import logger from 'redux-logger';

class Menu extends React.Component{
    constructor(){
        super();

    }

    render() {
        return <div className="menu">
            <ul className="menu__items">
                <li className="menu__item"><a className="menu__itemContent">FIRST</a></li>
                <li className="menu__item"><a className="menu__itemContent">SECOND</a></li>
                <li className="menu__item"><a className="menu__itemContent">THIRD</a></li>
            </ul>
        </div>
    }
};

export default Menu;

const initialState = {
    result:1,
    lastValues:[],
    userName: 'Max'
};
const reducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD":
        /*    state = {
                //...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };*/

            Object.assign({},state,{
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            });

            break;
        case "SUBSTRACT":
            state = {
                //...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            state.lastValues.push(action.payload)
            break;

    }
    return state; // always has to return a state
};
const otherInitialState = {
    userName:'Oscar',
    userLastName: 'Santisteban'
};
const otherReducer = (state = otherInitialState, action) => {
    switch (action.type){
        case 'SET_NAME':
            Object.assign({},state,{
                userName: action.payload.userName,
                userLastName: action.payload.userLastName
            });
            break;
        case 'SET_ID':
            break;
    }
    return state;
};

const myLogger = (store) => (next) => (action) => {
    console.log('Logged Action ', action);
    next(action);
};

export const store = createStore(
    combineReducers(
        {
            //This is equivalent to put:
            //{reducer:reducer,
            //otherReducer:otherReducer}
            reducer,
            otherReducer
        }
    ),
    {},
    applyMiddleware(myLogger, logger()),//This could be only for dev purposes
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(()=>{
    console.log("Store updated",store.getState());
});

//Here we could see an action and how to trigger one
store.dispatch({
    type: "ADD",
    payload: 10
});

store.dispatch({
    type: "ADD",
    payload: 20
});

store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    //This could be a bad idea because in this we will set up the name, not all the properties
    type: 'SET_NAME',
    payload: {
        userName: 'Andres',
        userLastName: 'Rodriguez'
    }
});




