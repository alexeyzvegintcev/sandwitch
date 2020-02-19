import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button onClick={()=>{props.onRemove(props.type)}} disabled={props.disabled[props.type]} className={classes.Less}>Less</button>
            <button onClick={()=>{props.onAdd(props.type)}} className={classes.More}>More</button>
        </div>
    );
}

export default buildControl;