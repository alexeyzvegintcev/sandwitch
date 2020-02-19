import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const ingredients = [
    {type: 'salad', label: "Salad"},
    {type: 'meat', label: "Meat"},
    {type: 'cheese', label: "Cheese"},
    {type: 'bacon', label: "Bacon"},
]

const buildControls = (props) => {
    return (
        <div>
            <p>Price <strong>{props.price.toFixed(2)}</strong></p>
            {ingredients.map(ing => 
            <BuildControl 
                onAdd={props.onAdd} 
                onRemove={props.onRemove} 
                key={ing.type} 
                label={ing.label} 
                type={ing.type}
                disabled={props.disabled}/>)}
                <button disabled={!props.isPurchasable} onClick={props.onOrder} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;