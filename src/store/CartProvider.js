import React,{useReducer} from 'react'
import CartContext from './cart-context'

const defaultCartState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==='Add'){
        const updatedItems=state.items.concat(action.item)
        const updatedTotalAmount=state.totalAmount+action.item.price * action.item.amount
       return{
        items:updatedItems,
        totalAmount:updatedTotalAmount
       }

    }
    return defaultCartState
}
const CartProvider=(props)=> {
     const[cartState,dispatchCartState]=  useReducer(cartReducer,defaultCartState)
    const addItemToCartHandler=(item)=>{
        dispatchCartState({type:'Add',item:item})

    }
    const removeItemFromCartHandler=(id)=>{

    }
    const cartcontext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider
