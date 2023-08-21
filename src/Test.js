import React, { useEffect, useReducer, useRef } from 'react'

export default function Test() {

  const selectedMenu=useRef([])

  useEffect(()=>{
    selectedMenu.current[0].parentElement.style.border='solid 3px red'

    // for(const item of selectedMenu.current){
    //   item.style.border='solid 3px green'
    // }
  })

  const menus=[
    {index:0, text:'menu1'},
    {index:1, text:'menu2'},
    {index:2, text:'menu3'},
    {index:3, text:'menu4'}
  ]

  

  return (



    <div>

      <ul id='menu_list'>
          {
            menus.map((item)=>(
              <li ref={(el)=>(selectedMenu.current[item.index]=el)} key={item.index}>{item.text}</li>             
            ))
          }
      </ul>


    </div>
  )
}
