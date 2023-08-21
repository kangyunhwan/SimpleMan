import React from 'react'

export default function MainWrap({children}) {
  return (
    <div style={{width:'100%',minHeight:'800px'}}>
      {children}
    </div>
  )
}
