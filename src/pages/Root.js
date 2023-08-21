import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import MainWrap from '../components/MainWrap'

export default function Root() {
  return (
    <>
      <Header/>
      <MainWrap>
        <Outlet/>
      </MainWrap>
      <Footer/>
    </>
  )
}
