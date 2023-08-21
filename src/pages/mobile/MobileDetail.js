import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './css/mobiledetail.module.css'
import useProducts from '../../hooks/useProducts'
import { useParams } from 'react-router-dom'
import regExp from '../../util/regExp'
import { getProductDetail } from '../../api/firebase'

export default function MobileDetail() {
  

  const [selectItem, setSelectItem] = useState([])

  const {mobProductsId} = useParams()
  
  useEffect(()=>{
    getProductDetail(mobProductsId).then((res)=>{
      setSelectItem(res)
    })
  }, [mobProductsId])

  let count = useMemo(()=>(1))

  const [prdCount, setPrdCount] = useState(count)

  const minusCount = useCallback(()=>{
    count--
    if(count<1){
      alert('최소 주문수량은 1개 입니다.')
      count=1;
    }else{
      setPrdCount(count)
    }
  }, [])

  const plusCount = useCallback(()=>{
    count++
    if(count>10){
      alert('최대 주문수량은 10개 입니다.')
      count=10;
    }else{
      setPrdCount(count)
    }
    
  }, [])

 

  return (
   <>
      {
        
          <section id={styles.prd_detail_wrap} >
          <h2 className='hidden'>상품디테일</h2>
            <div id={styles.prd_img}>
              <img src={selectItem.image} alt='상품' />
            </div>
            <div id={styles.prd_info_wrap}>
              <button className={styles.like_btn}>찜하기</button>
              <p className={styles.prd_name}>{selectItem.name}</p>
              <table className={styles.prd_table}>
                <tbody>
                  <tr className={styles.prd_table_price}>
                    <th>판매가</th>
                    <td>{regExp.comma(selectItem.price)} 원</td>
                  </tr>
                  <tr className={styles.prd_table_info}>
                    <th>상품요약정보</th>
                    <td>{selectItem.text}</td>
                  </tr>
                  <tr className={styles.prd_table_option}>
                    <th>색상</th>
                    <td>
                      <select>
                        <option>옵션선택</option>
                        <option>Black</option>
                        <option>Gray</option>
                        <option>White</option>
                      </select>
                    </td>
                  </tr>
                  <tr className={styles.prd_table_option}>
                    <th>사이즈</th>
                    <td>
                      <select>
                        <option>옵션선택</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </td>
                  </tr>
                  <tr className={styles.prd_table_count}>
                    <th>개수</th>
                    <td>
                      <button onClick={minusCount}>-</button>
                      <span> {prdCount} </span>
                      <button onClick={plusCount}>+</button>
                    </td>
                  </tr>
                </tbody>
                
              </table>
            </div>
            <div id={styles.total_price}>
              <p>Total</p>
              <p>{regExp.comma(selectItem.price*prdCount)} 원</p>
            </div>
            <div id={styles.btn_wrap}>
              <button className={styles.buy_btn}>BUY NOW</button>
              <button className={styles.cart_btn}>CART</button>
            </div>
            <div id={styles.prd_detail}>
              <p className={styles.prd_detail_title}>상품상세정보</p>
              <p className={styles.prd_detail_img}>
                <img src={selectItem.image} alt='상품상세'  />
              </p>
            </div>
            <div id={styles.prd_guide}>
              <p className={styles.prd_detail_title}>가이드</p>
              <p className={`${styles.prd_guide_title} ${styles.prd_guide_qothd}`}>배송안내</p>
              <ul className={styles.prd_guide_text}>
                <li>1. 구매금액 관계 없이 전상품 무료배송입니다.</li>
                <li>2. 결제일로부터 1~5일 이내에 상품이 출고됩니다.(단 토일 공휴일 제외)</li>
                <li>3. 배송은 본사 물류센터 또는 매장에서 발송 됩니다.</li>
                <li>4. 마이페이지 &gt; 구매내역 &gt; 주문/배송 조회 에서 구매하신 상품의 배송 상태를 확인하실 수 있습니다.</li>
              </ul>
              <p className={`${styles.prd_guide_title} ${styles.prd_guide_qksvna}`}>반품안내</p>
              <ul className={styles.prd_guide_text}>
                <li>1. 상품 수령일로부터 7일 이내에 교환/반품 신청을 해주시기 바랍니다.</li>
                <li>
                  2. 다음과 같은 경우 교환 및 반품 처리가 불가합니다.
                  <ul className={styles.prd_guide_sub_text}>
                    <li>상품수령일 기준으로 7일 이내 의사 밝혀주시지 않는 경우 (전자상거래 소비자 보호에 관한 법률에 의거한 기준</li>
                    <li>주문제작으로만 판매가 이루어지는 상품의 경우</li>
                    <li>소량의 구김, 실밥미처리, 초크자국으로 인한 무료 교환 및 반품을 원할경우</li>
                    <li>자세한 내용은 NOTICE 안에 택배 안내 참고 부탁드립니다.</li>
                  </ul>
                </li>
                <li>
                  3. 교환 및 반품 배송비 정책
                  <ul className={styles.prd_guide_sub_text}>
                    <li>상품 교환 시 선불로 보내실경우 2,500원, 착불로 보내실경우 5,000원</li>
                    <li>반품택배비가 확인되지 않을 경우 환불 되는 금액에서 차감 되어 환불됩니다.</li>
                    <li>상품 반품 시 반품택배비 기본 2,500원 (처음 구매하실때 7만원 이상으로 무료배송받았으나 상품 반품 후 7만원 미만일 경우 2,500원 추가됩니다.)</li>
                    <li>자세한 내용은 NOTICE 안에 택배 안내 참고 부탁드립니다.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        
      }
    </>
    
  )
}
