import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PiCaretRightBold } from 'react-icons/pi';
import { PiCaretLeftBold } from 'react-icons/pi';
import styles from'./css/visual2.module.css'
import gsap from 'gsap'

export default function Visual3() {

  const visualList=useRef();
  const nextBtn=useRef();
  const prevBtn=useRef();

  let visualLength=useMemo(()=>(null), [])
  let visualWidth=useMemo(()=>(null), [])
  let isSlide = useMemo(()=>(false), [])

  // let timer =  useRef()

  useEffect(()=>{
    window.addEventListener('resize',resetVisual)

    return ()=>{
        window.removeEventListener('resize', resetVisual)
    }
  }, []) 

  useEffect(()=>{
    
    resetVisual();

    // timer = setInterval(nextSlide,3000)
  
    // return ()=> {
    //   clearInterval(timer)
    // } 

  }, [])
  
  const resetVisual = ()=>{
    visualLength=visualList.current.children.length
    visualWidth=visualList.current.children[0].offsetWidth
    gsap.set(visualList.current, {left:-visualWidth})
  }

  const nextSlide = useCallback(()=>{
    if(isSlide===false){
      isSlide=true;

      visualList.current.append(visualList.current.firstElementChild)
      gsap.set(visualList.current,{left:0})

      gsap.to(visualList.current, {left:-visualWidth, duration:0.7, onComplete:()=>{isSlide=false}})
    }
  }, [])

  const prevSlide = useCallback(()=>{
    if(isSlide===false){
      isSlide=true;
      
      visualList.current.prepend(visualList.current.lastElementChild)
      gsap.set(visualList.current,{left:-visualWidth*2})
      
      gsap.to(visualList.current, {left:-visualWidth, duration:0.7, onComplete:()=>{isSlide=false}})
    }
  }, [])

  // const autoPlay = useCallback(()=>{
    
  // }, [])
  
  // const stopAutoPlay = useCallback(()=>{
  //   clearInterval(timer)
  // }, [])



  return (
    <section id={styles.visual}>
      <h2 className='hidden'>메인비주얼</h2>

    

      <p className={styles.visual_title}>
        시선을 사로잡는 스타일링
      </p>
      <p className={styles.visual_text}>
      최신 트렌드와 남성들의 다양한 스타일을 한 곳에서 만나보세요.<br/>
      옷뿐만 아니라 액세서리, 신발, 가방 등 다양한 아이템을 제공하여 완벽한 스타일링을 위한 쇼핑 경험을 선사합니다. <br/>
      자신의 개성을 뽐내고 스타일을 표현하기 위해 저희와 함께하세요.
      </p>
      <p className={styles.visual_shop_btn}><button >Shop Now</button></p>
      <div id={styles.visual_wrap}  >
        <ul id={styles.visual_list} ref={visualList}>
          <li><img src='./images/visual_img01.jpg' alt='비주얼' /></li>
          <li><img src='./images/visual_img02.jpg' alt='비주얼' /></li>
          <li><img src='./images/visual_img03.jpg' alt='비주얼' /></li>
          <li className={styles.selected}><img src='./images/visual_img04.jpg' alt='비주얼' /></li>
          <li><img src='./images/visual_img05.jpg' alt='비주얼' /></li>
          <li><img src='./images/visual_img06.jpg' alt='비주얼' /></li>
          <li><img src='./images/visual_img07.jpg' alt='비주얼' /></li>
        </ul>
        <button className={styles.next_btn} ref={nextBtn} onClick={nextSlide}><PiCaretRightBold/></button>
        <button className={styles.prev_btn} ref={prevBtn} onClick={prevSlide}><PiCaretLeftBold/></button>
      </div>
      

    </section>
  )
}
