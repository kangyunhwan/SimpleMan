import React from 'react'
import styles from './css/emailbanner.module.css'
import { AiOutlineSend } from 'react-icons/ai';

export default function Emailbanner() {
  return (
    <section id={styles.mail_wrap}>
      <h2 className='hidden'>이메일 입력하고 소식받기</h2>

      <div id={styles.mail_contents_wrap}>
        <p className={styles.mail_title}>
          최대 40% 할인받기
        </p>
        <p className={styles.mail_text}>
          Simple Man의 소식들을 접해보세요.
        </p>
        <form id={styles.mail_form}>
          <input type="text" placeholder='이메일을 입력하세요'/>
          <button><AiOutlineSend/></button>
        </form>
      </div>
    </section>
  )
}
