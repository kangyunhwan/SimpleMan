import React from 'react'
import MobileHeader from '../../components/mobile/MobileHeader'
import { Outlet } from 'react-router-dom'
import MobileFooter from '../../components/mobile/MobileFooter'
import MobileMainWrap from '../../components/mobile/MobileMainWrap'

export default function MobileRoot() {
  return (
    <>
      <MobileHeader/>
      <MobileMainWrap>
        <Outlet/>
      </MobileMainWrap>
      <MobileFooter/>
    </>
  )
}
