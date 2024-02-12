import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log(existingItemIndex);
    let existingItem = state.items[existingItemIndex];
    console.log("existingItem", existingItem);
    let updatedItems;
    if (existingItem) {
      const updateItem={...existingItem,amount:existingItem.amount+action.item.amount}
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if(action.type==='Remove'){
    const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.id)
    let existingItem=state.items[existingCartItemIndex]
    const updatedTotalAmount=state.totalAmount-existingItem.price
    let updatedItems
    if(existingItem.amount===1){
      updatedItems=state.items.filter((item)=>item.id!==existingItem.id)

    }
    else{
      const updatedItem={...existingItem,amount:existingItem.amount-1}
      updatedItems=[...state.items]
      updatedItems[existingCartItemIndex]=updatedItem
    }
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "Add", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({type:'Remove',id:id})
  };
  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
