/**
 * Created by oscar.santisteban on 1/24/2017.
 */
import React from 'react';

class Ejemplo extends React.Component {
    constructor() {
        super();
        this.state = { height: 0 };
    }

    changeHeight (height){
        this.setState({height: height});
    }

    render() {
        return <div>
            <img
                src="http://facebook.github.io/react/img/logo.svg"
                ref={(img) => {
                    if (!img) return;
                    this.img = img;
                    this.img.onload = ()=>{
                        this.changeHeight(this.img.height);
                    };
                }}
                width  = {200}
                height = {100}
            />
            <div style={{
                height: this.state.height,
                backgroundColor: 'red'
            }}>
                Tengo el mismo alto que la imagen!
            </div>
        </div>;
    }
};
export default Ejemplo;