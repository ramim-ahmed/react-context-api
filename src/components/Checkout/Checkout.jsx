import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext';
import styles from './Checkout.module.css';
const Checkout = () => {
    const {cart} = useContext(CartContext);

  return (
    <div className='container'>
        { cart.length === 0 ? (
            <div>
                <p>Your Cart Empty</p>
                <Link to='/'>Shop Now</Link>
            </div>
        ):(
            cart.map( item => (
                <div className={styles.cart_item}>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                </div>
            ))
        )}
    </div>
  )
}

export default Checkout