import React, { useState, useEffect } from 'react'
import styles from './css/weeklysection.module.css'
import { Link, createSearchParams } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import regExp from '../util/regExp'

export default function Weeklysection() {

  const [allProducts] = useProducts()

  const [bestItems,setBestItems] = useState([])

  useEffect(()=>{
    const aaa=allProducts.filter((item)=>(item.isBest===true))
    while(aaa.length>3){
      aaa.pop()
    }
    setBestItems(aaa)
  }, [allProducts])

  return (
    <section id={styles.weekprd_wrap}>
      <h2 className='hidden'>이번주 베스트 상품</h2>
      <p id={styles.weekprd_title}>
        Weekly Best Trending
      </p>
      <p id={styles.weekprd_subtitle}>
        이번주 베스트 상품을 만나보세요!
      </p>

      <ul id={styles.weekprd_list}> 

        {
          bestItems.map((item)=>(
            <li key={item.id}>
              <Link to={{pathname:`/products/${item.id}`, search:`?${createSearchParams({path:'products'})}`}}>
                <p className={styles.weekprd_prdimg}>
                  <img src={item.image} alt='제품'/>
                </p>
                <p className={styles.weekprd_name}>
                  {item.name}
                </p>
                <p className={styles.weekprd_price}>
                  {regExp.comma(item.price)}
                </p>
              {
                item.isBest===true && <p className={styles.weekprd_best}>BEST</p>
              }
              </Link>
            </li>
          ))
        }
        {/* <li>
          <Link>
            <p className={styles.weekprd_prdimg}>
              <img src='./images/weekprd_prdimg00.jpg' alt='아이스 투턱 세미와이드 슬랙스'/>
            </p>
            <p className={styles.weekprd_name}>
              아이스 투턱 세미와이드 슬랙스
            </p>
            <p className={styles.weekprd_price}>
              35,700
            </p>
          </Link>
        </li>
        <li>
          <Link>
            <p className={styles.weekprd_prdimg}>
              <img src='./images/weekprd_prdimg01.jpg' alt='스톤 아이스 오버 셔츠'/>
            </p>
            <p className={styles.weekprd_name}>
              스톤 아이스 오버 셔츠
            </p>
            <p className={styles.weekprd_price}>
              41,000
            </p>
          </Link>
        </li>
        <li>
          <Link>
            <p className={styles.weekprd_prdimg}>
              <img src='./images/weekprd_prdimg02.jpg' alt='트랜디 워싱청 반팔남방'/>
            </p>
            <p className={styles.weekprd_name}>
              트랜디 워싱 청반팔 남방
            </p>
            <p className={styles.weekprd_price}>
              49,900
            </p>
          </Link>
        </li> */}

      </ul>

      <p className={styles.weekprd_morebtn} >
        <Link to='/products'>See More Trending</Link>
      </p>
    </section>
  )
}
