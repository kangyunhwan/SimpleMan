import React from 'react'
import styles from './css/about.module.css'

export default function About() {
  return (
    <section id={styles.about_wrap}>
      <h2 className='hidden'>회사소개</h2>
      About
      {/* <p id={styles.about_title}>
        About
      </p> */}
      {/* <div className={styles.about_img}>
        <img src='./images/about_main_img.jpg' alt='회사소개'/>
      </div> */}
      {/* <div className={styles.about_text}>
        <p>최신 트렌드와 남성들의 다양한 스타일을 한 곳에서 만나보세요.</p>
        <p>옷뿐만 아니라 액세서리, 신발, 가방 등 다양한 아이템을 제공하여 완벽한 스타일링을 위한 쇼핑 경험을 선사합니다.</p>
        <p>자신의 개성을 뽐내고 스타일을 표현하기 위해 저희와 함께하세요.</p>
      </div> */}
    </section>  
  )
}
