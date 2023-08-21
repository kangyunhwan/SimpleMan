import React from 'react'

export default function MobileMainWrap({children}) {
  return (
    <main style={{width:'100vw',paddingTop:'60px',minHeight:'600px'}}>
      {children}
    </main>
  )
}
