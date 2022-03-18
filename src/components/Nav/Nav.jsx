import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import styles from "./Nav.module.css";
const Nav = () => {
  const {cart} = useContext(CartContext);
  console.log(cart);
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav_content}>
          <div>
            <Link to="/">BDSHOP</Link>
          </div>
          <Link to='/checkout'>
            <div className={styles.cart}>
              cart <span>{cart.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
