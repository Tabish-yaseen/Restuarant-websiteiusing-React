import { Fragment,useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './Header.module.css'

export default function HeaderCartButton(props) {
  const cartCtx=useContext(CartContext)
  let numberOfCartItems=cartCtx.items.reduce((currNumber,item)=>{
    return currNumber+item.amount
  },0)
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </Fragment>
  );
}
