import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const ingredients = [
    {type: 'salad', label: "Salad"},
    {type: 'meat', label: "Meat"},
    {type: 'cheese', label: "Cheese"},
    {type: 'bacon', label: "Bacon"},
]

const buildControls = (props) => {
    return (
        <div>
            {ingredients.map(ing => 
            <BuildControl 
                onAdd={props.onAdd} 
                onRemove={props.onRemove} 
                key={ing.type} 
                label={ing.label} 
                type={ing.type}
                disabled={props.disabled}/>)}
        </div>
    );
}

export default buildControls;