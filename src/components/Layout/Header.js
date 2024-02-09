import React,{Fragment} from 'react'
import mealImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

export default function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="A table of meals" />
        </div>
        
      
    </Fragment>
  )
}
