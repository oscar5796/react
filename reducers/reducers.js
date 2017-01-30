/**
 * Created by oscar.santisteban on 1/27/2017.
 */

import {createStore, combineReducers, applyMiddleware} from 'redux';

var initialState = {
    result:1,
    lastValues:[],
    userName: 'Max'
};

export const firstReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD":
            /*    state = {
             //...state,
             result: state.result + action.payload,
             lastValues: [...state.lastValues, action.payload]
             };*/
            console.log(action.payload);
            Object.assign({},state,{
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            });

            break;
    }
    return state; // always has to return a state
};
const otherInitialState = {
    userName:'Oscar',
    userLastName: 'Santisteban'
};
export const otherReducer = (state = otherInitialState, action) => {
    switch (action.type){
        case 'SET_NAME':
            Object.assign({},state,{
                userName: action.payload
            });
            break;
        case 'SET_ID':
            break;
    }
    return state;
};


