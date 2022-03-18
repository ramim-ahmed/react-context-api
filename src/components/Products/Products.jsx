import React from 'react'
import Product from '../Product/Product'
import styles from './Products.module.css'
const Products = ({products}) => {
  return (
    <main className='container'>
      <div className={styles.product_container}>
      { products.length === 0 ? (
          <div>
             Loading...........
          </div>
      ):(
          products.map( product => <Product key={product.id} product={product} />)
      )}
      </div>
    </main>
  )
}

export default Products