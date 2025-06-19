import React, { useEffect, useState } from 'react'
import styles from './css/header.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi';
import { useAuthContext } from '../context/AuthContext';
import { login, logout } from '../api/firebase';

export default function Header() {

  const [clickIndex,setClickIndex] = useState(0)

  const mainMenus=[
    {index:0,path:'/',text:'Home'},
    {index:1,path:'/event',text:'Event'},
    {index:2,path:'/products',text:'Products'},
    {index:3,path:'/about',text:'About'}
  ]

  const navigate=useNavigate()

  const goToHome = ()=>{
    navigate('/')
    setClickIndex(0)
  }

  const {search} = useLocation();
  

  useEffect(()=>{
    
    
    if(search){
      const path = decodeURIComponent(new URLSearchParams(search).get('path'))
      
      if(path==='products'){
        setClickIndex(2)
      }

      console.log(search);
    }
  },[search])

  const {user} = useAuthContext()
  // console.log('user', user)

  return (
   
    <header id={styles.pcheader}>
      <h1 id={styles.logo} onClick={goToHome}><button>Simple Man</button></h1>

      <nav id={styles.mainmenu}>
        <h2 className='hidden'>메인메뉴</h2>
        <ul id={styles.mainmenu_list}>
          {
            mainMenus.map((item)=>(
              <li key={item.index} className={item.index===clickIndex ? styles.selected : ''} onClick={()=>{setClickIndex(item.index)}}><Link to={item.path}>{item.text}</Link></li>    
            ))
          }

          {/* <li><Link to='/'>Home</Link></li>
          <li><Link to='/trending'>Trending</Link></li>
          <li><Link to='/category'>Category</Link></li>
          <li><Link to='/about'>About Us</Link></li> */}
        </ul>
      </nav>

      {
        user ?

        <>
          <p className={styles.basket}>
            <button ><FiShoppingBag/></button>
          </p>

          <p className={styles.login_btn}>
            <button onClick={logout}>Logout</button>
          </p>

          <div className={styles.profile}>
            <p>{`${user.displayName} 님`}</p>
            <button><img src={user.photoURL} alt='프로필' /></button>
          </div>
        </>
        :
        <>
          {/* <p className={styles.basket}>
            <button ><FiShoppingBag/></button>
          </p> */}

          <p className={styles.login_btn}>
            <button onClick={login}>Login</button>
          </p>
        </>
      }

      
      {
      //   user ? 

      //  <>
      //     <p className={styles.basket}>
      //       <button ><FiShoppingBag/></button>
      //     </p>

      //     <p className={styles.login_btn}>
      //       <button onClick={logout}>Logout</button>
      //     </p>

      //     <div className={styles.profile}>

      //       <p>{`${user.displayName} 님 나가주세요`}</p>
      //       <button><img src={user.photoURL}/></button>
           
      //     </div>


      //   </>
      //   :
      //   <>
      //     <p className={styles.basket}>
      //       <button ><FiShoppingBag/></button>
      //     </p>

      //     <p className={styles.login_btn}>
      //       <button onClick={login}>Login</button>
      //     </p>
      //   </>
          
      }






      {/* <p className={styles.signup}>
        <button>Sign Up</button>
      </p> */}
      
      
        
    </header>

  )
}







