import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/styles.css';
import { Pagination } from 'swiper/modules';
import styles from './css/mobilevisual.module.css'


export default function MobileVisual() {
  return (
    <section id={styles.visual_wrap}>
      <h2 className='hidden'>메인비주얼</h2>
      
      <ul id={styles.visual_list}>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <li>
              <p className={styles.visual_img}>
                <img src='./images/products_img23.jpg' alt='비주얼' />
              </p>
              <p className={styles.visual_title}>
                고급스러운 느낌!<br/>
                오버핏 체크셔츠
              </p>
              <p className={styles.visual_text}>
                앤디 오버핏 체크셔츠
              </p>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <p className={styles.visual_img}>
                <img src='./images/products_img08.jpg' alt='비주얼' />
              </p>
              <p className={styles.visual_title}>
                하루종일 편안한<br/>
                피그 반바지
              </p>
              <p className={styles.visual_text}>
                SUPIMA 피그먼트 반바지
              </p>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li>
              <p className={styles.visual_img}>
                <img src='./images/products_img02.jpg' alt='비주얼' />
              </p>
              <p className={styles.visual_title}>
                여름철<br/>
                입기 좋은 팬츠
              </p>
              <p className={styles.visual_text}>
                린넨 원턱 와이드 슬랙스
              </p>
            </li>
          </SwiperSlide>
        </Swiper>
      </ul>
    </section>
  )
}
