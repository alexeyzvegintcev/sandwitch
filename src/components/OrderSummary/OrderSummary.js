import React from 'react';
import Aux from '../../hoc/Aux/Aux'
import Button from '../../components/UI/Button/Button'

class orderSummary extends React.Component {
    componentWillUpdate(){
        console.log("Order Summary Will Update")
    }

    summary = () => Object.keys(this.props.ingrediants).map(iKey => {
        return (<li key={iKey}>
            <span style={{ textTransform: 'capitalize' }}>{iKey}</span>: {this.props.ingrediants[iKey]}
        </li>
        )
    })
    render() {
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Igredients:</p>
                <ul>
                    {this.summary()}
                </ul>
                <p>Continue or Checkout</p>
                <Button btnType="Danger" clicked={this.props.onCancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.onContinue}>Checkout</Button>
            </Aux>
        )
    }
}

export default orderSummary;