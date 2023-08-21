
import { useState, useEffect } from 'react'
import styles from './css/productslist.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import regExp from '../util/regExp'





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
        {/* <li className={styles.selected}><Link>전체</Link></li>
        <li><Link>상의</Link></li>
        <li><Link>하의</Link></li>
        <li><Link>신발</Link></li>
        <li><Link>가방</Link></li>
        <li><Link>액세서리</Link></li> */}
      </ul>

      <ul id={styles.prdlist}>
        {
          categoryItems.map((item)=>(
            <li key={item.id} onClick={()=>{navigate(`/products/${item.id}`)}}>
              <Link >
                <p className={styles.prdlist_prdimg}>
                  <img src={item.image} alt='제품'/>
                </p>
                <p className={styles.prdlist_name}>
                  {item.name}
                </p>
                <p className={styles.prdlist_price}>
                  {regExp.comma(item.price)} 원
                  {/* {regExp.comma(item.price)} 원 */}
                </p>
                <p className={styles.prdlist_text}>
                  {item.text}
                </p>
                <p className={styles.prdlist_review}>
                  REVIEW : 1
                </p>
              </Link>
            </li>
          ))
        }
        {/* <li>
          <Link >
            <p className={styles.prdlist_prdimg}>
              <img src='./images/products_img01.jpg' alt='제품'/>
            </p>
            <p className={styles.prdlist_name}>
              수피마 컬러 맨투맨(cotton fabric)
            </p>
            <p className={styles.prdlist_price}>
              29,900 원
            </p>
            <p className={styles.prdlist_text}>
              컬러감이 좋아 단품으로 이쁘게 입으실수 있습니다 :)
            </p>
            <p className={styles.prdlist_review}>
              REVIEW : 4
            </p>
          </Link>
        </li>
        <li>
          <Link >
            <p className={styles.prdlist_prdimg}>
              <img src='./images/products_img02.jpg' alt='제품'/>
            </p>
            <p className={styles.prdlist_name}>
              GREENDALE.반집업 맨투맨(3color)
            </p>
            <p className={styles.prdlist_price}>
              39,900 원
            </p>
            <p className={styles.prdlist_text}>
              밑단 스트링 들어가 핏잡아 입기 좋은 반집업 맨투맨입니다
            </p>
            <p className={styles.prdlist_review}>
              REVIEW : 12
            </p>
          </Link>
        </li>
        <li>
          <Link >
            <p className={styles.prdlist_prdimg}>
              <img src='./images/products_img03.jpg' alt='제품'/>
            </p>
            <p className={styles.prdlist_name}>
              쿨에버 보트넥 스트라이프티(high Q)
            </p>
            <p className={styles.prdlist_price}>
              29,900 원
            </p>
            <p className={styles.prdlist_text}>
              넥라인 튼튼하고 , 원단 짱짱하네요 , 강추!!
            </p>
            <p className={styles.prdlist_review}>
              REVIEW : 6
            </p>
          </Link>
        </li>
        <li>
          <Link >
            <p className={styles.prdlist_prdimg}>
              <img src='./images/products_img04.jpg' alt='제품'/>
            </p>
            <p className={styles.prdlist_name}>
              스마일 오버핏 패치 긴팔티(4color)
            </p>
            <p className={styles.prdlist_price}>
              29,900 원
            </p>
            <p className={styles.prdlist_text}>
              인기많은 스마일패치 가을신상 긴팔로 나왔습니다,^^
            </p>
            <p className={styles.prdlist_review}>
              REVIEW : 28
            </p>
          </Link>
        </li>
        <li>
          <Link >
            <p className={styles.prdlist_prdimg}>
              <img src='./images/products_img05.jpg' alt='제품'/>
            </p>
            <p className={styles.prdlist_name}>
              헤이 스트라이프 반팔티(cotton fabric)
            </p>
            <p className={styles.prdlist_price}>
              25,000 원
            </p>
            <p className={styles.prdlist_text}>
              적당히 얇고 퀄리티가 좋은 멀티 단가라 반팔입니다:)
            </p>
            <p className={styles.prdlist_review}>
              REVIEW : 2
            </p>
          </Link>
        </li>
        <li>
          <Link >
            <p className={styles.prdlist_prdimg}>
              <img src='./images/products_img06.jpg' alt='제품'/>
            </p>
            <p className={styles.prdlist_name}>
              할리우드 퀄리티 반팔티(4color)
            </p>
            <p className={styles.prdlist_price}>
              19,900 원
            </p>
            <p className={styles.prdlist_text}>
              질좋은 원단으로 제작된 레터링 오버 반팔입니다:)
            </p>
            <p className={styles.prdlist_review}>
              REVIEW : 4
            </p>
          </Link>
        </li>
        <li>
          <Link >
            <p className={styles.prdlist_prdimg}>
              <img src='./images/products_img07.jpg' alt='제품'/>
            </p>
            <p className={styles.prdlist_name}>
              데일리 오버핏 반팔셔츠(cotton fabric)
            </p>
            <p className={styles.prdlist_price}>
              23,000 원
            </p>
            <p className={styles.prdlist_text}>
              여름내내 입기좋은 퀄리티높은 코튼 반팔셔츠입니다,^^
            </p>
            <p className={styles.prdlist_review}>
              REVIEW : 6
            </p>
          </Link>
        </li>
        <li>
          <Link >
            <p className={styles.prdlist_prdimg}>
              <img src='./images/products_img08.jpg' alt='제품'/>
            </p>
            <p className={styles.prdlist_name}>
              앤디 오버핏 체크셔츠(2color)
            </p>
            <p className={styles.prdlist_price}>
              39,900 원
            </p>
            <p className={styles.prdlist_text}>
              고급스러움이 느껴지는 체크로 제작된 셔츠입니다:)
            </p>
            <p className={styles.prdlist_review}>
              REVIEW : 14
            </p>
          </Link>
        </li> */}

      </ul>

    </section>
  )
}
