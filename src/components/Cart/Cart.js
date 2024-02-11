import React,{useContext} from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

export default function Cart(props) {
    const cartCtx=useContext(CartContext)
    const totalAmount=`$${cartCtx.totalAmount}`
    const hasItem=cartCtx.items.length>0
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span> 
        <span>{totalAmount}</span>
      </div>
      <div className={classes.action}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
       {hasItem && <button className={classes.button}>Order</button>} 
      </div>
    </Modal>
  );
}
