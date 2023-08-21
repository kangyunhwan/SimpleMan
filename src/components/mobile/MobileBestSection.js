import React, { useEffect, useState } from 'react'
import styles from './css/mobilebestsection.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import useProducts from '../../hooks/useProducts';
import regExp from '../../util/regExp';

export default function MobileBestSection() {
  
  const [allProducts] = useProducts()
  const [bestItems,setBestItems] = useState([])

  useEffect(()=>{
    
    const filterItems = allProducts.filter((item)=>(item.isBest===true))
    while(filterItems.length>4){
      filterItems.pop()
    }
    setBestItems(filterItems)
  }, [allProducts])

  const navigate = useNavigate();

  return (
    <section id={styles.best_wrap}>
      <h2 className='hidden'>베스트상품</h2>
      <p id={styles.best_title}>Weekly Best</p>
      <p className={styles.best_text}>이번주 베스트 상품을 만나보세요!</p>
      <ul id={styles.best_prd_list}>
        {
          bestItems.map((item)=>(
            <li key={item.id}>
              <Link to={`/mobile_products/${item.id}`}>
                <p className={styles.best_caption}>BEST</p>
                <p className={styles.best_prd_img}>
                  <img src={item.image} alt='베스트상품' />
                </p>
                <p className={styles.best_prd_title}>{item.name}</p>
                <p className={styles.best_prd_price}>{regExp.comma(item.price)} <span>원</span></p>
              </Link>
            </li>
          ))
        }

        {/* <li>
          <Link>
            <p className={styles.best_caption}>BEST</p>
            <p className={styles.best_prd_img}>
              <img src='./images/products_img01.jpg' alt='베스트상품' />
            </p>
            <p className={styles.best_prd_title}>수피마 컬러 맨투맨(cotton fabric)</p>
            <p className={styles.best_prd_price}>29,900 원</p>
          </Link>
        </li>
        <li>
          <Link>
            <p className={styles.best_caption}>BEST</p>
            <p className={styles.best_prd_img}>
              <img src='./images/products_img09.jpg' alt='베스트상품' />
            </p>
            <p className={styles.best_prd_title}>마리 롱 린넨 밴딩데님팬츠(3color)</p>
            <p className={styles.best_prd_price}>44,900 원</p>
          </Link>
        </li>
        <li>
          <Link>
            <p className={styles.best_caption}>BEST</p>
            <p className={styles.best_prd_img}>
              <img src='./images/products_img26.jpg' alt='베스트상품' />
            </p>
            <p className={styles.best_prd_title}>플로리다 뒷밴딩 데님팬츠(2color)</p>
            <p className={styles.best_prd_price}>29,900 원</p>
          </Link>
        </li>
        <li>
          <Link>
            <p className={styles.best_caption}>BEST</p>
            <p className={styles.best_prd_img}>
              <img src='./images/products_img25.jpg' alt='베스트상품' />
            </p>
            <p className={styles.best_prd_title}>데일리 오버핏 반팔셔츠(cotton fabric)</p>
            <p className={styles.best_prd_price}>23,000 원</p>
          </Link>
        </li> */}
      </ul>
      
      <p className={styles.view_all_btn}><button onClick={()=>{navigate('/mobile_products')}}>View All <span><BsArrowRight/></span></button></p>
    </section>
  )
}
