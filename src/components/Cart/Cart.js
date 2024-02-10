import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

export default function Cart() {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "sushi", amount: "2", price: "12.99" }].map(
        (item) => (
          <li>item.name</li>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span> 
        <span>35.62</span>
      </div>
      <div className={classes.action}>
        <button className={classes['button--alt']}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}