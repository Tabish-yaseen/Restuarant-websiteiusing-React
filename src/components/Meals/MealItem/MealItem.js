import React from 'react'
import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'

export default function MealItem(props) {
    const price=`$${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
        <div>
            <div>{props.name}</div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div><MealItemForm/></div>
      
    </li>
  )
}
