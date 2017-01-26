/**
 * Created by oscar.santisteban on 1/24/2017.
 */
import React from 'react';


class App extends React.Component{

    constructor(){
        super();
        this.state = {num:0};
    }
/*
    componentWillMount(){
        this.state = {num:0};
    }*/
    changeNumber(){
        this.setState({num:Math.ceil(Math.random() * 6)});
    }
    render(){
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={()=>this.changeNumber()}>Lanzar</button>
            </div>
        )
    }
}
export default App;