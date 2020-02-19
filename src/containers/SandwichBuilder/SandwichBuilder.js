import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich'
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../hoc/Aux';
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    meat: 3,
    cheese: 2,
    bacon: 1,
    salad: 0.5
}
class SandwichBuilder extends Component {
    state = {
        ingrediants: {
            meat: 0,
            cheese: 0,
            bacon: 0,
            salad: 0
        },
        totalPrice: 4,
        isPurchasable: false,
        purchasing: false
    }

    updateParchasable = (ing) => {
        console.log(Object.values(ing).reduce((a, b) => a + b))
        this.setState({ isPurchasable: (Object.values(ing).reduce((a, b) => a + b) > 0) })
    }

    addHandler = (type) => {
        const oldCount = this.state.ingrediants[type]
        const ingrs = { ...this.state.ingrediants }
        ingrs[type] = oldCount + 1
        const oldPrice = this.state.totalPrice
        this.setState({ ingrediants: ingrs, totalPrice: (oldPrice + INGREDIENT_PRICES[type]) })
        this.updateParchasable(ingrs)
    }

    removeHandler = (type) => {
        const oldCount = this.state.ingrediants[type]
        if (oldCount === 0) return
        
        const ingrs = { ...this.state.ingrediants }
        ingrs[type] = oldCount - 1
        const oldPrice = this.state.totalPrice
        this.setState({ ingrediants: ingrs, totalPrice: (oldPrice - INGREDIENT_PRICES[type]) })
        this.updateParchasable(ingrs)
    }

    purchasHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = ()=> {
        alert("Continue!!!")
    }

    render() {
        const disabledInfo = { ...this.state.ingrediants }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal closeModal={this.purchaseCancelHandler} show={this.state.purchasing}>
                    <OrderSummary onCancel={this.purchaseCancelHandler} onContinue={this.purchaseContinueHandler} ingrediants={this.state.ingrediants}></OrderSummary>
                </Modal>
                <Sandwich ingrediants={this.state.ingrediants}></Sandwich>
                <BuildControls
                    onAdd={this.addHandler}
                    onRemove={this.removeHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    isPurchasable={this.state.isPurchasable}
                    onOrder={this.purchasHandler}
                    onPuchase={this.purchasHandler}
                />
            </Aux>
        );
    }
}

export default SandwichBuilder;