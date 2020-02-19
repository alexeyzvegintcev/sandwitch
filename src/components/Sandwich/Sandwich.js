import React from 'react';
import classes from './Sandwich.module.css'
import SandwichIngredient from '../Ingredients/SandwichIngredient';

const sandwich = (props) =>{
    let allIngrediants = Object.keys(props.ingrediants).map((ikey) =>{
        return [...Array(props.ingrediants[ikey])].map( (_, i)=>{
            return <SandwichIngredient key={ikey+i} type={ikey}/>
        })
    }).reduce((arr, el)=>{return arr.concat(el)}, [])
    if (allIngrediants.length === 0){
        allIngrediants = <p>Start addidng ingrediants</p>
    }
    return (
        <div className={classes.Sandwich}>
            <SandwichIngredient type='bread-top'/>
           {allIngrediants}
            <SandwichIngredient type='bread-bottom'/>
        </div>
    );
}

export default sandwich