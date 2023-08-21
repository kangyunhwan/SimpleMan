import React, { useCallback, useMemo, useRef } from 'react'
import styles from './css/mobileheader.module.css'
import { RiMenu2Fill } from 'react-icons/ri';
import { RiSearch2Line } from 'react-icons/ri';
import { gsap } from 'gsap';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { login, logout } from '../../api/firebase';


export default function MobileHeader() {

  const mainMenuList=[
    {index:0, name:'Home', pathname:'/', subMenuList:[]},
    {index:1, name:'Event', pathname:'/', subMenuList:[{index:0, name:'이벤트', pathname:'/mobile_event'}, ]},
    {index:2, name:'Products', pathname:'/', subMenuList:[{index:0, name:'전체', pathname:'/mobile_products'}, {index:1, name:'상의', pathname:'/mobile_products'}, {index:2, name:'하의', pathname:'/mobile_products'}, {index:3, name:'신발', pathname:'/mobile_products'}, {index:4, name:'가방', pathname:'/mobile_products'}, {index:5, name:'액세서리', pathname:'/mobile_products'}]},
    {index:3, name:'About', pathname:'/', subMenuList:[{index:0, name:'회사소개', pathname:'/mobile_about'}]},
    {index:4, name:'Community', pathname:'/', subMenuList:[{index:0, name:'Q&A', pathname:'/mobile_qna'}, {index:1, name:'공지사항', pathname:'/mobile_notice'}]},
  ]

  const menuWrap = useRef()
  const grayLayer = useRef()

  const closeMenu = useCallback(()=>{
    grayLayer.current.style.display='none'
    gsap.to(menuWrap.current, {left:'-80vw',onComplete:()=>{
      gsap.set('body,html', {overflow:'visible'})
      gsap.set(menuWrap.current, {display:'none'})
    }})
    if(selectedMenu!==null){
      selectedMenu.classList.remove(`${styles.selected}`);
      gsap.to(selectedMenu, {height:closeHeight})
      
      selectedMenu=null
    }
  }, [])

  const openMenu = useCallback(()=>{
    grayLayer.current.style.display='block'
    gsap.set('body,html', {overflow:'hidden'})
    gsap.set(menuWrap.current, {display:'block'})
    gsap.to(menuWrap.current, {left:0})

    if(selectedMenu!==null){
      selectedMenu.classList.remove(`${styles.selected}`);
      gsap.to(selectedMenu, {height:closeHeight})
      
      selectedMenu=null
    }
  }, [])

  let selectedMenu = useMemo(()=>(null), [])

  let closeHeight = useMemo(()=>(50), [])
  let openHeight = useMemo(()=>(null), [])

  const activateMenu = useCallback((menu)=>{
      if(selectedMenu===null){
        selectedMenu=menu;
        selectedMenu.classList.add(`${styles.selected}`)
        openHeight=closeHeight+(selectedMenu.children[1].offsetHeight);
        gsap.to(selectedMenu, {height:openHeight, duration:0.3,})
      }else if(selectedMenu!==menu){
        selectedMenu.classList.remove(`${styles.selected}`)
        gsap.to(selectedMenu, {height:closeHeight, duration:0.3})
  
        selectedMenu=menu;
        selectedMenu.classList.add(`${styles.selected}`)
        openHeight=closeHeight+(selectedMenu.children[1].offsetHeight);
        gsap.to(selectedMenu, {height:openHeight, duration:0.3})
      }else if(selectedMenu===menu){
        selectedMenu.classList.remove(`${styles.selected}`);
        gsap.to(selectedMenu, {height:closeHeight, duration:0.3})
        
        selectedMenu=null
      }
  }, [])

  const navigate = useNavigate()

  const {user} = useAuthContext()
  console.log('user', user)

  return (
    <header id={styles.mobile_header}>
      <h1 id={styles.mobile_logo} onClick={()=>{navigate('/')}}>Simple Man</h1>
      <button id={styles.mobile_menu} onClick={openMenu}><RiMenu2Fill/></button>
      <button id={styles.mobile_search}><RiSearch2Line/></button>
      <nav id={styles.menu_wrap} ref={menuWrap}>
        <h2 className='hidden'>모바일메뉴</h2>
        <p id={styles.menu_logo}>Simple Man</p>
        <div className={styles.menu_text_wrap}>
          {
            user ? 
            <>
              <p>{`${user.displayName} 님 환영합니다.`}</p>
            </>
            :
            <>
              <p>로그아웃 상태입니다.</p>
              <p>
                심플맨에 가입하여<br/>
                더 많은 혜택을 누리세요.
              </p>
            </>
          }
        </div>
        <ul id={styles.mobile_login_menu}>
          {
            user ? 
              <li><button onClick={logout}>로그아웃</button></li>            
            :
              <li><button onClick={login}>로그인</button></li>
          }
          <li><button>회원가입</button></li>
        </ul>
        <ul id={styles.mobilemenu_list}>
          {
            mainMenuList.map((item)=>(
              <li key={item.index} onClick={(e)=>{if(item.subMenuList.length>0){activateMenu(e.currentTarget)}}}>
                {
                  item.subMenuList.length>0 ? 
                  <>
                    {item.name}
                    <span className={styles.mobile_icon}><img src="/images/mobilemenu_icon04.png" alt=""/></span>                          
                    <ul className={styles.mobilesubmenu_list}>
                      {
                        item.subMenuList.map((subItem)=>(
                          <li key={subItem.index} onClick={closeMenu}><Link to={{pathname:subItem.pathname,search:`${createSearchParams({category:`${subItem.name}`})}`}}>{subItem.name}</Link></li>
                        ))
                      }
                    </ul>
                  </>
                  :
                  <>
                    <Link onClick={closeMenu} to={item.pathname}>{item.name}</Link>
                  </>
                }
              </li>
            ))
          }
          {/* <li>HOME</li>
          <li >
            Event
            <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
            <ul className={styles.mobilesubmenu_list}>
              <li>이벤트</li>
            </ul>
          </li>
          <li >
            Products
            <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
            <ul className={styles.mobilesubmenu_list}>
              <li>전체</li>
              <li>상의</li>
              <li>하의</li>
              <li>신발</li>
              <li>가방</li>
              <li>액세서리</li>
            </ul>
          </li>
          <li >
            About
            <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
            <ul className={styles.mobilesubmenu_list}>
              <li>회사소개</li>
            </ul>
          </li>
          <li >
            Community
            <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
            <ul className={styles.mobilesubmenu_list}>
              <li>Q&A</li>
              <li>공지사항</li>
            </ul>
          </li> */}
        </ul>
        <div id={styles.menu_banner}>
          <img src='/images/menu_banner.jpg' alt='배너광고' />
        </div>
        <div id={styles.info_wrap}>
          <p className={styles.info_title}>CUSTOMER SERVICE</p>
          <p>MON-FRI 10:00 - 17:00</p>
          <p>LUNCH 12:00 - 13:00</p>
          <p>SAT.SUN.HOLIDAY OFF</p>
          <p>Copyright © SimpleMan All Rights Reserved</p>
        </div>
        <button id={styles.close_btn} onClick={closeMenu}>닫기</button>
      </nav>
      <div id={styles.gray_layer} ref={grayLayer} onClick={closeMenu}></div>
    </header>
  )
}

