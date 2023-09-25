import React from 'react'
import styles from './css/categoryfashion.module.css'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'

export default function Categoryfashion() {

  const navigate=useNavigate()

  return (
    <section id={styles.cate_wrap}>
      <h2 className="hidden">카테고리 선택</h2>
      <p id={styles.cate_title}>
        Category Fashion
      </p>
      <p id={styles.cate_subtitle}>
        원하는 카테고리별로 상품을 찾아보세요
      </p>
      <ul id={styles.cate_list}>
      <li>
          <Link to={{ pathname: `/products`, search: `?${createSearchParams({ category: '전체', path:'products'})}`}}>
            <img src='./images/category_all.jpg' alt='전체카테고리'/>
          </Link>
        </li>
        <li>
          <Link to={{ pathname: `/products`, search: `?${createSearchParams({ category: '상의', path:'products' })}`}}>
            <img src='./images/category_shirt.jpg' alt='상의카테고리'/>
          </Link>
        </li>
        <li>
          <Link to={{pathname:'/products', search: `?${createSearchParams({category:'하의', path:'products'})}`}}>
            <img src='./images/category_pants.jpg' alt='하의카테고리'/>
          </Link>
        </li>
        <li>
          <Link onClick={()=>{navigate({pathname:'/products',search:`?${createSearchParams({category : '가방', path:'products'})}`})}}>
            <img src='./images/category_bag.jpg' alt='가방카테고리'/>
          </Link>
        </li>
        <li>
          <Link to={{pathname:`/products`, search:`?${createSearchParams({category:'신발', path:'products'})}`}}>
            <img src='./images/category_shoes.jpg' alt='신발카테고리'/>
          </Link>
        </li>
        <li>
          <Link to={{pathname:`/products`, search:`?${createSearchParams({category:`액세서리`, path:'products'})}`}}>
            <img src='./images/category_belt.jpg' alt='액세서리카테고리'/>
          </Link>
        </li>
        <li>
          <Link to={{pathname:`/products`, search:`?${createSearchParams({category:`액세서리`, path:'products'})}`}}>
            <img src='./images/category_cap.jpg' alt='액세서리카테고리'/>
          </Link>
        </li>
        <li>
          <Link to={{pathname:`/products`, search:`?${createSearchParams({category:`액세서리`, path:'products'})}`}}>
            <img src='./images/category_clock.jpg' alt='액세서리카테고리'/>
          </Link>
        </li>
        <li>
          <Link to={{ pathname: `/products`, search: `?${createSearchParams({ category: '상의', path:'products' })}`}}>
            <img src='./images/category_outer.jpg' alt='상의카테고리'/>
          </Link>
        </li>

      </ul>

      <p className={styles.cate_morebtn} >
        <button onClick={()=>{navigate('/products')}}>More Categories</button>
      </p>

    </section>
  )
}
