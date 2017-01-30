/**
 * Created by oscar.santisteban on 1/24/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {firstReducer, otherReducer} from './reducers/reducers.js'
import MainComponent from './MainComponent.js';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

export const store = createStore(

    combineReducers(
        {
            //This is equivalent to put:
            //{reducer:reducer,
            //otherReducer:otherReducer}
            fReducer: firstReducer,
            oReducer: otherReducer
        }
    ),
    {},
    applyMiddleware(logger()),//This could be only for dev purposes
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>,
    document.getElementById('app')
);


/*Stateless component
const App = (props) => {
    return (
    <div>
        Hello
    <div>
    );
}

App.propTypes = {
    title: React.propTypes.string
}

export default App
*/