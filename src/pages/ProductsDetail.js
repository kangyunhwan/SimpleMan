import React from 'react'
import styles from './css/productsdetail.module.css'
import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import regExp from '../util/regExp'
import { getProductDetail } from '../api/firebase'

export default function ProductsDetail() {
  // const [allProducts] = useProducts()

  const {productId} = useParams()

  const [selectProduct, setSelectProduct] = useState([])

  useEffect(()=>{
    // const selectProduct=allProducts.filter((item)=>(item.id===productId))
    // setSelectProduct(selectProduct)

    getProductDetail(productId).then((res)=>{
      setSelectProduct(res)
    })
    
    
  },[productId])


  return (
    <>
      {
             <section id={styles.detail_top_wrap}>
              <h2 className='hidden'>상품정보</h2>
              <div id={styles.info_wrap}>
                <div id={styles.detail_top_img}>
                  <img src={selectProduct.image} alt='제품'/>
                </div>
                <div id={styles.detail_top_info}>
                  <p className={styles.info_title}>{selectProduct.name}</p>
                  <div className={styles.info_icon}>
                    {selectProduct.isBest===true ? <p className={styles.icon_best}>BEST</p> : ''}
                    <p className={styles.icon_new}>NEW</p>
                  </div>
                  <p className={styles.info_price}>
                    <span> {regExp.comma(selectProduct.price)} </span>원
                  </p>
                  <div className={styles.info_option}>
                    <p>색상</p>
                    <ul className={styles.info_option_color}>
                      <li><button>Black</button></li>
                      <li className={styles.selected}><button>Light Blue</button></li>
                      <li><button>Dark blue</button></li>
                    </ul>
                    <p>사이즈</p>
                    <ul className={styles.info_option_size}>
                      <li><button>S</button></li>
                      <li><button>M</button></li>
                      <li className={styles.selected}><button>L</button></li>
                      <li><button>XL</button></li>
                      <li><button>XXL</button></li>
                    </ul>
                  </div> 
                  <div className={styles.info_total}>
                    <p className={styles.info_total_text}>가격</p>
                    <p className={styles.info_total_price}><span>{regExp.comma(selectProduct.price)}</span> 원</p>
                  </div> 
                  <ul className={styles.info_guide}>
                    <li>
                      <p><span>배송비</span></p>
                      <p className={styles.guide_text}>전 상품 무료배송</p>
                    </li>
                    <li>
                      <p><span>카드혜택</span></p>
                      <p className={styles.guide_text}>자세히보기</p>
                    </li>
                  </ul>
                  <div className={styles.info_btn_wrap}>
                    <button className={styles.info_basket_btn}>장바구니</button>
                    <button className={styles.info_buy_btn}>구매하기</button>
                  </div>
                </div>
              </div>
              
              <div id={styles.detail_wrap} >
                <div id={styles.detail_left}>
                  <p className={styles.detail_title}>
                    상세정보
                  </p>
                  <div id={styles.detail_imgwrap}>
                    <img src={selectProduct.image} alt='제품상세'/>
                  </div>
        
                  <p className={styles.detail_title}>
                    가이드
                  </p>
        
                  <div id={styles.guide_wrap}>
                    <p className={styles.guide_title}>
                      배송안내
                    </p>
                    <ul className={styles.guide_textlist}>
                      <li>1. 구매금액 관계 없이 전상품 무료배송입니다.</li>
                      <li>2. 결제일로부터 1~5일 이내에 상품이 출고됩니다.(단 토일 공휴일 제외)</li>
                      <li>3. 배송은 본사 물류센터 또는 매장에서 발송 됩니다.</li>
                      <li>4.  마이페이지 &gt; 구매내역 &gt; 주문/배송 조회 에서 구매하신 상품의 배송 상태를 확인하실 수 있습니다.</li>
                    </ul>
        
                    <p className={styles.guide_title}>교환 및 반품 유의 사항</p>
                    <ul>
                      <li>1. 상품 수령일로부터 7일 이내에 교환/반품 신청을 해주시기 바랍니다.</li>
                      <li>
                        2. 다음과 같은 경우 교환 및 반품 처리가 불가합니다.
                        <ul>
                          <li>상품수령일 기준으로 7일 이내 의사 밝혀주시지 않는 경우 (전자상거래 소비자 보호에 관한 법률에 의거한 기준)</li>
                          <li>주문제작으로만 판매가 이루어지는 상품의 경우</li>
                          <li>소량의 구김, 실밥미처리, 초크자국으로 인한 무료 교환 및 반품을 원할경우</li>
                          <li>상품의 착용흔적 및 오염이 있을 경우 (화장품, 향수, 탈취제, 섬유유연제, 바디로션, 담배냄새, 집냄새, 옷늘어남 등 포함)</li>
                          <li>고객 부주의로 세탁 및 상품의 변형, 의도적인 훼손 등으로 새 것의 상태가 아니며 상품의 판매가치가 떨어지는 경우</li>
                          <li>이미 품절 된 상품, 세일상품, 화이트색상(아이보리 포함), 퍼제품, 신발, 가방, 악세사리류(모자,시계,양말,머플러 등)</li>
                          <li>오배송 및 불량일 경우에도 위의 같은 경우는 어떠한 처리도 불가능합니다.</li>
                          <li>자세한 내용은 NOTICE 안에 교환 택배 안내 참고 부탁드립니다.</li>
                        </ul>
                      </li>
                      <li>
                        3. 교환 및 반품 배송비 정책
                        <ul>
                          <li>상품 교환 시 선불로 보내실경우 2,500원, 착불로 보내실경우 5,000원</li>
                          <li>상품 반품 시 반품택배비 기본 2,500원 (처음 구매하실때 7만원 이상으로 무료배송받았으나 상품 반품 후 7만원 미만일 경우 2,500원 추가됩니다.)</li>
                          <li>교환택배비가 확인되지 않을 경우 미입금 안내문자 전송 후 교환보류되며, 입금하신 후 1시간 이후에 고객센터로 입금확인 부탁드립니다. (미연락시 누락, 지연 될 수 있습니다.)</li>
                          <li>반품택배비가 확인되지 않을 경우 환불 되는 금액에서 차감 되어 환불됩니다.</li>
                        </ul>
                      </li>
                    </ul>
        
                  </div>
                </div>

                <div id={styles.detail_right}>
                  <select className={styles.side_color_pick}>
                    <option>색상</option>
                    <option>Black</option>
                    <option>Light Blue</option>
                    <option>Dark Blue</option>
                  </select>
                  <select className={styles.side_size_pick}>
                    <option>사이즈</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XL</option>
                  </select>
                  <ul className={styles.side_prd_list}>
                    <li>
                      <p className={styles.side_prd_img}>
                        <img src={selectProduct.image} alt='제품'/>
                      </p>
                      <div className={styles.side_prd_option}>
                        <p className={styles.side_option_name}>LightBlue / L</p>
                        <p className={styles.side_option_btn}>
                          <button>-</button>
                          <span>1</span>
                          <button>+</button>
                        </p>
                      </div>
                      <button className={styles.side_delete_btn}>X</button>
                    </li>
                  </ul>
                  <div className={styles.side_total_wrap}>
                    <div className={styles.side_total_price}>
                      <p >합계</p>
                      <p >{regExp.comma(selectProduct.price)} 원</p>
                    </div>
                    <div className={styles.side_btn_wrap}>
                      <button className={styles.side_basket_btn}>장바구니</button>
                      <button className={styles.side_buy_btn}>구매하기</button>
                    </div>
                  </div>
                </div>

        

 
                
              </div>
             
          </section>
  
      }
    </>
  )
}
