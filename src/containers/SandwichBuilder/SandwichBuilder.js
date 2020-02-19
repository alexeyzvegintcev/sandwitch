import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich'

class SandwichBuilder extends Component {
    state ={
        ingrediants:{
            meat:2,
            cheese: 2,
            bacon: 1,
            salad: 1
        }
    }
    render() {
        return (
            <div>
                <Sandwich ingrediants={this.state.ingrediants}></Sandwich>
                <p>builder</p>
            </div>
        );
    }
}

export default SandwichBuilder;