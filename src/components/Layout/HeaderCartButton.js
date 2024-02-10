import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './Header.module.css'

export default function HeaderCartButton(props) {
  return (
    <Fragment>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>4</span>
      </button>
    </Fragment>
  );
}
