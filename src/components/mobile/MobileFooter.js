import React from 'react'
import styles from './css/mobilefooter.module.css'

export default function MobileFooter() {
  return (
    <footer id={styles.mobile_footer}>
      <h2 className='hidden'>하단영역</h2>
      <p id={styles.footer_title}>Simple Man</p>
      <ul id={styles.footer_info_list}>
        <li>상호명 : (주)심플컴퍼니 대표자 : 홍길동</li>
        <li>주소 : 서울특별시 강남구 강남대로 428 만이빌딩/5층, 10층</li>
        <li>통신판매업신고 : 제 1234-서울강서-1234 호</li>
        <li>사업자등록번호 : 1234567890</li>
        <li>전화번호 : 02-1234-5678 Fax : (012)345-6789</li>
        <li>Email : simpleman@nate.com</li>
      </ul>
      <p className={styles.footer_copy}>COPYRIGHT © Simple Man 2022 - All Rights Reserved</p>
      <ul id={styles.footer_menu_list}>
        <li><button>회사소개</button></li>
        <li><button>이용약관</button></li>
        <li><button>개인정보처리방침</button></li>
        <li><button>이용안내</button></li>
        
      </ul>
    </footer>
  )
}
