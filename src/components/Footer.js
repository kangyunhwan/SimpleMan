import React from 'react'
import { Link } from 'react-router-dom'
import styles from './css/footer.module.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoPinterestAlt } from 'react-icons/bi';

export default function Footer() {
  return (
    <div id={styles.footer_wrap}>
      <footer id={styles.pc_footer}>


        <article id={styles.footer_info}>
          <h2 className='hidden'>주소</h2>
          <p className={styles.footer_address}>
          서울특별시 강남구 강남대로 428 만이빌딩/5층, 10층 Tex : (012)345-6789 Fax : (012)345-6789 Email : simpleman@nate.com
          </p>
          <p className={styles.footer_copy}>
          COPYRIGHT © Simple Man 2022 - All Rights Reserved
          </p>
        </article>

      </footer>
    </div>
    
  )
}
