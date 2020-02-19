import React from 'react';
import Aux from '../../hoc/Aux'
import Button from '../../components/UI/Button/Button'

const orderSummary = (props) => {
    console.log(props)
    const summary = Object.keys(props.ingrediants).map(iKey => {
        return (<li key={iKey}>
            <span style={{ textTransform: 'capitalize' }}>{iKey}</span>: {props.ingrediants[iKey]}
        </li>
        )
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Igredients:</p>
            <ul>
                {summary}
            </ul>
            <p>Continue or Checkout</p>
            <Button btnType="Danger" clicked={props.onCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.onContinue}>Checkout</Button>
        </Aux>
    );
}

export default orderSummary;