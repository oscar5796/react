/**
 * Created by oscar.santisteban on 1/24/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent.js'
import './styles.scss';
import {connect} from 'react-redux';
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
                <li className="menu__item"><a onClick={() => this.props.add(10)} className="menu__itemContent">ADD TEN</a></li>
                <li className="menu__item"><a onClick={() => this.props.setName('Anna')} className="menu__itemContent">SECOND</a></li>
                <li className="menu__item"><a className="menu__itemContent">THIRD</a></li>
                <p>{this.props.firstReducer.result}</p>
            </ul>
        </div>
    }
};



const mapStateToProps = (state)=>{
    return {
        firstReducer: state.fReducer,
        otherReducer: state.oReducer
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        add: (value)=>{
            dispatch({
                type: "ADD",
                payload: value
            });
        },
        setName: (name)=>{
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    };
};

//export default Menu;

export default connect(mapStateToProps, mapDispatchToProps)(Menu);


