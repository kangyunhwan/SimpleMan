import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/styles.css';
import { Pagination } from 'swiper/modules';
import styles from './css/mobilebanner.module.css'

export default function MobileBanner() {
  return (
    <section id={styles.banner_wrap}>
      <h2 className='hidden'>배너</h2>
      <div id={styles.banner_list}>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide><div><img src='./images/mobile_banner.jpg' alt='배너'  /></div></SwiperSlide>
          <SwiperSlide><div><img src='./images/mobile_banner2.jpg' alt='배너'  /></div></SwiperSlide>
        </Swiper>
      </div>
      
    </section>
  )
}
