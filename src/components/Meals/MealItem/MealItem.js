import {useContext} from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'

export default function MealItem(props) {
   const cartCtx= useContext(CartContext)
    const price=`$${props.price.toFixed(2)}`

    const addToCartHandler=(amount)=>{
        cartCtx.addItem({
          id:props.id,
          name:props.name,
          price:props.price,
          amount:amount 
        })
    }
    
  return (
    <li className={classes.meal}>
        <div>
            <div>{props.name}</div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div><MealItemForm onAddToCart={addToCartHandler}/></div>
      
    </li>
  )
}
