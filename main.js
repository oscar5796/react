/**
 * Created by oscar.santisteban on 1/24/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from './MainComponent.js';
import {Provider} from 'react-redux';
import store from './menu'


ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>,
    document.getElementById('app')
);


