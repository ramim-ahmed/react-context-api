import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import styles from './Product.module.css';
const Product = ({product}) => {
    const {image, title, price} = product;
    const {addToCart} = useContext(CartContext)
  return (
    <div className={styles.product_card}>
        <img src={image} alt="" />
        <div>
            <p>{title}</p>
            <p>$ {price}</p>
        </div>
        <div className={styles.add_cart}>
            <button onClick={ () => addToCart(title, price)}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Product