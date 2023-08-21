import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from'./css/visual.module.css'
import './css/styles.css'
import gsap from 'gsap'

export default function Visual() {
  // const addCount=()=>{
  //   setNextIndex((prev=>prev+1))
  //   alert(nextIndex)
  // }
  // useEffect(()=>{
  //   nextBtn.current.addEventListener('click', addCount)

  //   return ()=>{
  //     nextBtn.current.removeEventListener('click', addCount)
  //   }
  
  // }, [nextIndex])

  // const visuals=[
  //   {index:0,title:'비주얼1',text:'비주얼1 텍스트'},
  //   {index:1,title:'비주얼2',text:'비주얼2 텍스트'},
  //   {index:2,title:'비주얼3',text:'비주얼3 텍스트'}
  // ]

  // const visualWrap=useRef()
  // const visualLi=useRef([])
  // const nextBtn=useRef()
  // const prevBtn=useRef()

  // let currentIndex=0;
  // let nextIndex=1;
  // let isSlide=false;

  // let visualWidth=null;
  // let visualLength=null;

  // useEffect(()=>{

  //   visualWidth=visualWrap.current.offsetWidth
  //   visualLength=visualLi.current.length

  //   gsap.set(visualLi.current,{left:visualWidth})
  //   gsap.set(visualLi.current[currentIndex],{left:0})

  // })

  // const showNextSlide=()=>{
  //   if(isSlide===false){
  //     isSlide=true;
  //     nextIndex=currentIndex+1;
  //     if(nextIndex>=visualLength){
  //       nextIndex=0
  //     }    

  //     gsap.to(visualLi.current[currentIndex],{left:-visualWidth})
  //     gsap.set(visualLi.current[nextIndex],{left:visualWidth})
  //     gsap.to(visualLi.current[nextIndex],{left:0,onComplete:()=>{
  //       isSlide=false;
  //       currentIndex=nextIndex
  //     }})
  //   }
    
  // }

  // const showPrevSlide=()=>{
  //   if(isSlide===false){
  //     isSlide=true
  //     nextIndex=currentIndex-1
  //     if(nextIndex<0){
  //       nextIndex=visualLength-1;
  //     }
  
  //     gsap.to(visualLi.current[currentIndex],{left:visualWidth})
  //     gsap.set(visualLi.current[nextIndex],{left:-visualWidth})
  //     gsap.to(visualLi.current[nextIndex],{left:0,onComplete:()=>{
  //       isSlide=false;
  //       currentIndex=nextIndex
  //     }})
  //   }
  // }


  return (
    <section id={styles.visual}>
      <h2 className='hidden'>메인비주얼</h2>

      {/* <div id={styles.visual_wrap}>
        <ul id={styles.visual_list} ref={visualWrap}>
          {
            visuals.map((item)=>(
              <li key={item.index} ref={(element)=>{visualLi.current[item.index]=element}}>
                <p className={styles.visual_title}>{item.title}</p>
                <p className={styles.visual_text}>{item.text}</p>
              </li>
            ))
          }
        </ul>
        <button id={styles.next_btn} ref={nextBtn} onClick={showNextSlide}>다음</button>
        <button id={styles.prev_btn} ref={prevBtn} onClick={showPrevSlide}>이전</button>
      </div> */}

      <p className={styles.visual_title}>
        시선을 사로잡는 스타일링
      </p>
      <p className={styles.visual_text}>
      최신 트렌드와 남성들의 다양한 스타일을 한 곳에서 만나보세요.<br/>
      옷뿐만 아니라 액세서리, 신발, 가방 등 다양한 아이템을 제공하여 완벽한 스타일링을 위한 쇼핑 경험을 선사합니다. <br/>
      자신의 개성을 뽐내고 스타일을 표현하기 위해 저희와 함께하세요.
      </p>
      <p className={styles.visual_shop_btn}><button >Shop Now</button></p>
      <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: -150,
                depth: 800,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="./images/visual_img01.jpg" alt="메인비주얼"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/visual_img02.jpg" alt="메인비주얼" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/visual_img03.jpg" alt="메인비주얼" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/visual_img04.jpg" alt="메인비주얼" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/visual_img05.jpg" alt="메인비주얼" />
              </SwiperSlide>
      </Swiper>
      

    </section>
  )
}
