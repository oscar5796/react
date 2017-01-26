/**
 * Created by oscar.santisteban on 1/26/2017.
 */
import React from 'react';
import Menu from './menu.js';
import App from './App.js';

import NewComponent from './newComponent/newComponent.js';

class MainComponent extends React.Component{
    constructor(){
        super();

    }
    render() {
        return <header>
            <Menu/>
            <App/>
            <NewComponent/>
        </header>
    }
}

export default MainComponent;