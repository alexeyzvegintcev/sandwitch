import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich'
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls';
const INGREDIENT_PRICES={
    meat:3,
    cheese: 2,
    bacon:1,
    salad: 0.5}
class SandwichBuilder extends Component {
    state ={
        ingrediants:{
            meat:0,
            cheese: 0,
            bacon: 0,
            salad: 0
        },
        totalPrice: 4
    }

    addHandler = (type) => {
        const oldCount = this.state.ingrediants[type]
        const ingrs = {...this.state.ingrediants}
        ingrs[type] = oldCount + 1
        const oldPrice = this.state.totalPrice
        this.setState({ingrediants: ingrs, totalPrice: (oldPrice+ INGREDIENT_PRICES[type])})
    }

    removeHandler = (type) => {
        const oldCount = this.state.ingrediants[type]
        if (oldCount === 0) return
        const ingrs = {...this.state.ingrediants}
        ingrs[type] = oldCount - 1
        const oldPrice = this.state.totalPrice
        this.setState({ingrediants: ingrs, totalPrice: (oldPrice - INGREDIENT_PRICES[type])})
    }

    render() {
        const disabledInfo = {...this.state.ingrediants}
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <div>
                <Sandwich ingrediants={this.state.ingrediants}></Sandwich>
                <BuildControls 
                onAdd={this.addHandler}
                onRemove={this.removeHandler}
                disabled={disabledInfo} 
                />
            </div>
        );
    }
}

export default SandwichBuilder;