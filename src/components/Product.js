import React from 'react'
import styles from './css/product.module.css'
import regExp from '../util/regExp'
import { Link } from 'react-router-dom'

export default function Product({product,onNavigate}) {
  return (
    <li onClick={()=>{onNavigate(`/products/${product.id}`)}}>
     
        <p className={styles.prdlist_prdimg}>
          <img src={product.image} alt='제품'/>
        </p>
        <p className={styles.prdlist_name}>
          {product.name}
        </p>
        <p className={styles.prdlist_price}>
          {regExp.comma(product.price)} 원
          {/* {regExp.comma(item.price)} 원 */}
        </p>
        <p className={styles.prdlist_text}>
          {product.text}
        </p>
        <p className={styles.prdlist_review}>
          REVIEW : 1
        </p>
     
    </li>
  )
}
