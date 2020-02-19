import React from 'react';
import classes from './Sandwich.module.css'
import SandwichIngredient from '../Ingredients/SandwichIngredient';

const sandwich = (props) =>{
    const allIngrediants = Object.keys(props.ingrediants).map((key) =>{
        return [...Array(props.ingrediants[key])].map( (_, i)=>{
            return <SandwichIngredient key={key+i} type={key}/>
        })
    })
    return (
        <div className={classes.Sandwich}>
            <SandwichIngredient type='bread-top'/>
           {allIngrediants}
            <SandwichIngredient type='bread-bottom'/>
        </div>
    );
}

export default sandwich