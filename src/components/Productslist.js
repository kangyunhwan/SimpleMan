
import { useState, useEffect } from 'react'
import styles from './css/productslist.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import Product from './Product'





export default function Productslist() {

  const [allProducts] = useProducts()

  const categorys=[
    {index:0,text:'전체'},
    {index:1,text:'상의'},
    {index:2,text:'하의'},
    {index:3,text:'신발'},
    {index:4,text:'가방'},
    {index:5,text:'액세서리'},
  ]

  const [selectCategory,setSelectCategory] = useState(categorys[0].text)

  const [categoryItems, setCategoryItems] = useState([])

  useEffect(()=>{
    if(selectCategory==='전체'){
      setCategoryItems(allProducts)
    }else{
      setCategoryItems(allProducts.filter((item)=>(item.category===selectCategory)))
    }
  },[selectCategory, allProducts])

  const navigate=useNavigate()
  

  const { search } = useLocation();

  useEffect(() => { // 메인에서 선택한 카테고리 보여줌 
    if (search) {
      const ct = decodeURIComponent(new URLSearchParams(search).get('category')) // serch 전체값을 받아와서 category속성의 값만 얻어내는 약속된 객체함수 
      //decodeURIComponent 이스케이핑 된 문자열을 정상적인 문자열로 되돌려주는 역할을 한다
      if (ct) {
        setSelectCategory(ct);
      }
    }
  }, [search])

  return (
    <section id={styles.prdlist_wrap}>
      <h2 className='hidden'>상품 리스트</h2>
      <p id={styles.prdlist_title}>
        {selectCategory}
      </p>
      <ul id={styles.prdlist_catelist}>
        {
          categorys.map((item)=>(
            <li key={item.index} onClick={()=>{setSelectCategory(item.text)}} className={selectCategory===item.text ? styles.selected : ''}><Link>{item.text}</Link></li>
          ))
        }

      </ul>

      <ul id={styles.prdlist}>
        {
          categoryItems.map((item)=>(
            <Product key={item.id} product={item} onNavigate={navigate} />
          ))
        }
      </ul>

    </section>
  )
}
