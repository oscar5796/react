/**
 * Created by oscar.santisteban on 1/24/2017.
 */
import React from 'react';
class Menu extends React.component{
    constructor(){
        var list = [];
    }
    createLiItems(num){
        for(let i = 0; i <= num, i++){
            return <li></li>
        }
    }
    render() {
        return <div className="menu">
            <ul className="menu__items"
                {
                    this.createLiItems(3)
                }
                >

            </ul>
        </div>
    }
};

export default Menu;