
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/styles.css';
import { Pagination } from 'swiper/modules';

import styles from './css/mobileproducts.module.css'
import { Link, useLocation } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import regExp from '../../util/regExp';


export default function MobileProducts() {
  
  const [allProducts] = useProducts()

  const categorys = [
    {index:0, category:'전체'},
    {index:1, category:'상의'},
    {index:2, category:'하의'},
    {index:3, category:'신발'},
    {index:4, category:'가방'},
    {index:5, category:'액세서리'},
  ]

  const [selectCategory, setSelectCategory] = useState(categorys[0].category)

  const [categoryItems, setCategoryItems] = useState([])

  useEffect(()=>{
    if(selectCategory==='전체'){
      setCategoryItems(allProducts)
    }else{
      setCategoryItems(()=>(allProducts.filter((item)=>(item.category===selectCategory))))
    }
  }, [selectCategory, allProducts])
  

  const {search} = useLocation()

  useEffect(()=>{
    if(search){
      const ct = decodeURIComponent(new URLSearchParams(search).get('category'))
      if (ct){
        setSelectCategory(ct)
      }
    }
  }, [search])


  return (
    <section id={styles.prd_wrap}>
      <h2 className='hidden'>상품리스트</h2>
      <p id={styles.prd_title}>{selectCategory}</p>
      <div id={styles.prd_category_list}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={15}
          // pagination={{
          //   clickable: true,
          // }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          {
            categorys.map((item)=>(
              <SwiperSlide key={item.index}><button  className={item.category===selectCategory ? `${styles.selected}` : ''} onClick={()=>{setSelectCategory(item.category)}}>{item.category}</button></SwiperSlide>
            ))
          }
          {/* <SwiperSlide><button className={styles.selected}>전체</button></SwiperSlide>
          <SwiperSlide><button>상의</button></SwiperSlide>
          <SwiperSlide><button>하의</button></SwiperSlide>
          <SwiperSlide><button>신발</button></SwiperSlide>
          <SwiperSlide><button>가방</button></SwiperSlide>
          <SwiperSlide><button>액세서리</button></SwiperSlide> */}
        </Swiper>
      </div>
     
     <ul id={styles.prd_list}>
      {
        categoryItems.map((item)=>(
          <li key={item.id}>
            <Link to={`/mobile_products/${item.id}`}>
              <p className={styles.prd_img}><img src={item.image} alt='제품'/></p>
              <p className={styles.prd_name}>{item.name}</p>
              <p className={styles.prd_price}>{regExp.comma(item.price)} 원</p>
            </Link>
          </li>
        ))
      }
      {/* <li>
        <Link>
          <p className={styles.prd_img}><img src='./images/products_img01.jpg' alt='제품'/></p>
          <p className={styles.prd_name}>수피마 컬러 맨투맨</p>
          <p className={styles.prd_price}>29,900원</p>
        </Link>
      </li>
      <li>
        <Link>
          <p className={styles.prd_img}><img src='./images/products_img01.jpg' alt='제품'/></p>
          <p className={styles.prd_name}>수피마 컬러 맨투맨</p>
          <p className={styles.prd_price}>29,900원</p>
        </Link>
      </li>
      <li>
        <Link>
          <p className={styles.prd_img}><img src='./images/products_img01.jpg' alt='제품'/></p>
          <p className={styles.prd_name}>수피마 컬러 맨투맨</p>
          <p className={styles.prd_price}>29,900원</p>
        </Link>
      </li>
      <li>
        <Link>
          <p className={styles.prd_img}><img src='./images/products_img01.jpg' alt='제품'/></p>
          <p className={styles.prd_name}>수피마 컬러 맨투맨</p>
          <p className={styles.prd_price}>29,900원</p>
        </Link>
      </li> */}
     </ul>
    </section>
  )
}
