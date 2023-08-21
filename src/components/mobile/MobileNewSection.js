import React, { useEffect, useState } from 'react'
import styles from './css/mobilenewsection.module.css'
import { Link, useNavigate } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import regExp from '../../util/regExp'

export default function MobileNewSection() {
  const categorys=[
    {index:0, category:'상의'},
    {index:2, category:'하의'},
    {index:3, category:'신발'},
    {index:4, category:'가방'},
    {index:5, category:'액세서리'},
  ]

  const [selectCt, setSelectCt] = useState(categorys[0].category)

  const [allProducts] = useProducts()

  const [newItems, setNewItems] = useState([])
  const [categoryItems, setCategoryItems] = useState([])

  useEffect(()=>{
    const newItems = allProducts.filter((item)=>(item.isNew===true))
    setNewItems(newItems)
  }, [allProducts])

  useEffect(()=>{
    const categoryItems = newItems.filter((item)=>(item.category===selectCt))
    setCategoryItems(categoryItems)
  }, [selectCt, newItems])

  const navigate = useNavigate()

  return (
    <section id={styles.new_wrap}>
      <h2 className='hidden'>신상품</h2>
      <p id={styles.new_title}>New Arrival</p>
      <p id={styles.new_sub_title}>심플맨의 신상품을 만나보세요!</p>
      <ul id={styles.new_cate_list}>
        {
          categorys.map((item)=>(
            <li key={item.index} className={item.category===selectCt ? `${styles.selected}` : ''} onClick={()=>{setSelectCt(item.category)}}>
              <Link >
                <span>{item.category}</span>
              </Link>
            </li>
          ))
        }
        {/* <li className={styles.selected}>
          <Link>
            <span>상의</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>하의</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>신발</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>가방</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>액세서리</span>
          </Link>
        </li> */}
      </ul>

      <ul id={styles.new_prd_list}>
        {
          categoryItems.map((item)=>(
            <li key={item.id}>
              <Link to={`/mobile_products/${item.id}`}>
                <div className={styles.new_prd_img}><img src={item.image} alt='상품' /></div>
                <div className={styles.new_prd_text_wrap}>
                  <p className={styles.new_prd_name}>{item.name}</p>
                  <p className={styles.new_prd_text}>{item.text}</p>
                  <p className={styles.new_prd_price}>{regExp.comma(item.price)} 원</p>
                </div>
              </Link>
            </li>
          ))
        }
        {/* <li>
          <Link>
            <div className={styles.new_prd_img}><img src='./images/products_img06.jpg' alt='상품' /></div>
            <div className={styles.new_prd_text_wrap}>
              <p className={styles.new_prd_name}>스마일 오버핏 패치 긴팔티(4color)</p>
              <p className={styles.new_prd_text}>인기많은 스마일패치 가을신상 긴팔로 나왔습니다,^^"</p>
              <p className={styles.new_prd_price}>29,900 원</p>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <div className={styles.new_prd_img}><img src='./images/products_img12.jpg' alt='상품' /></div>
            <div className={styles.new_prd_text_wrap}>
              <p className={styles.new_prd_name}>GREENDALE.반집업 맨투맨(3color)</p>
              <p className={styles.new_prd_text}>밑단 스트링 들어가 핏잡아 입기 좋은 반집업 맨투맨입니다</p>
              <p className={styles.new_prd_price}>39,900 원</p>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <div className={styles.new_prd_img}><img src='./images/products_img04.jpg' alt='상품' /></div>
            <div className={styles.new_prd_text_wrap}>
              <p className={styles.new_prd_name}>헤이 스트라이프 반팔티(cotton fabric)</p>
              <p className={styles.new_prd_text}>적당히 얇고 퀄리티가 좋은 멀티 단가라 반팔입니다:)</p>
              <p className={styles.new_prd_price}>25,000 원</p>
            </div>
          </Link>
        </li> */}
      </ul>

      <button id={styles.viewall_btn} onClick={()=>{navigate('/mobile_products')}}>전체보기</button>
    </section>
  )
}
