/**
 * Created by oscar.santisteban on 1/24/2017.
 */
import React from 'react';
import './styles.scss';

class Menu extends React.Component{
    constructor(){
        super();
        this.state = {liElements:[]};
        this.setState({liElements: [].push(<li className="menu_item">OK</li>)});
        this.setState({liElements: [].push(<li className="menu_item">OK</li>)});
    }

    render() {
        return <div className="menu">
            <ul className="menu__items">
                <li className="menu__item"><span className="menu__itemContent">FIRST</span></li>
                <li className="menu__item"><span className="menu__itemContent">SECOND</span></li>
                <li className="menu__item"><span className="menu__itemContent">THIRD</span></li>
            </ul>
        </div>
    }
};

export default Menu;