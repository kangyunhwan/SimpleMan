import React, { useEffect, useState } from 'react'
import styles from './css/salesection.module.css'
import { Link, createSearchParams } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import regExp from '../util/regExp'

export default function Salesection() {

  const [allProducts] = useProducts()

  const [saleItems,setSaleItems] = useState([])

  useEffect(()=>{
    const saleItems=allProducts.filter((item)=>(item.isSale===true))
    setSaleItems(saleItems)
  },[allProducts])

  return (
    <section id={styles.saleprd_wrap}>
      <h2 className='hidden'>이번달 할인 상품</h2>
      <p id={styles.saleprd_title}>
        Promo this Month
      </p>
      <p id={styles.saleprd_subtitle}>
        이번달 할인중인 상품들을 만나보세요!
      </p>
      <ul id={styles.saleprd_list}>
        {
          saleItems.map((item)=>(
            <li key={item.id}>
              <Link to={{pathname:`/products/${item.id}`,search:`?${createSearchParams({path:'products'})}`}}>
              <p className={styles.saleprd_prdimg}>
                <img src={item.image} alt='스트릿 다운 버킷햇 벙거지'/>
                </p>
                <p className={styles.saleprd_price}>
                  <span>{item.salePercent}<span className={styles.saleprd_percent}>%</span></span> 
                  {regExp.comma(item.price)}
                </p>
                <p className={styles.saleprd_text}>
                  {item.name}
                </p>
              </Link>
           </li>
          ))
        }
        {/* <li>
          <Link>
            <p className={styles.saleprd_prdimg}>
              <img src='./images/saleprd_prdimg00.jpg' alt='미디움 심플 토트백 가죽가방 크로스백'/>
            </p>
            <p className={styles.saleprd_price}>
              <span>20<span className={styles.saleprd_percent}>%</span></span> 
              19,900 
            </p>
            <p className={styles.saleprd_text}>
              미디움 심플 토트백 가죽가방 크로스 백
            </p>
          </Link>
        </li>
        <li>
         <Link>
          <p className={styles.saleprd_prdimg}>
            <img src='./images/saleprd_prdimg01.jpg' alt='스트릿 다운 버킷햇 벙거지'/>
            </p>
            <p className={styles.saleprd_price}>
              <span>19<span className={styles.saleprd_percent}>%</span></span> 
              18,700
            </p>
            <p className={styles.saleprd_text}>
              스트릿 다운 버킷햇 벙거지
            </p>
         </Link>
        </li>
        <li>
         <Link>
          <p className={styles.saleprd_prdimg}>
            <img src='./images/saleprd_prdimg02.jpg' alt='올드스쿨 클래식 스니커즈'/>
            </p>
            <p className={styles.saleprd_price}>
              <span>37<span className={styles.saleprd_percent}>%</span></span>
              43,700 
            </p>
            <p className={styles.saleprd_text}>
              올드스쿨 클래식 스니커즈
            </p>
         </Link>
        </li>
        <li>
         <Link>
          <p className={styles.saleprd_prdimg}>
            <img src='./images/saleprd_prdimg03.jpg' alt='루카스 데이트 남성 블랙 가죽시계'/>
            </p>
            <p className={styles.saleprd_price}>
              <span>42<span className={styles.saleprd_percent}>%</span></span> 
              69,900 
            </p>
            <p className={styles.saleprd_text}>
              루카스 데이트 남성 블랙 가죽시계 
            </p>
         </Link>
        </li>
        <li>
          <Link>
            <p className={styles.saleprd_prdimg}>
            <img src='./images/saleprd_prdimg04.jpg' alt='엑스 밴드 4cm 키높이 검정 쪼리 여름
              가죽 샌들 슬리퍼 여행 코디 블랙'/>
            </p>
            <p className={styles.saleprd_price}>
              <span>30<span className={styles.saleprd_percent}>%</span></span> 
              32,800 
            </p>
            <p className={styles.saleprd_text}>
              엑스 밴드 4cm 키높이 검정 쪼리 여름
              가죽 샌들 슬리퍼 여행 코디 블랙
            </p>
          </Link>
        </li> */}
      </ul>

      <p className={styles.saleprd_allbtn}>
        <Link to='/products'> View All</Link>
      </p>
    </section>
  )
}
