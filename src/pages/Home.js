import React from 'react'
import Categoryfashion from '../components/Categoryfashion'
import Emailbanner from '../components/Emailbanner'
import Salesection from '../components/Salesection'
import Weeklysection from '../components/Weeklysection'
import Visual3 from '../components/Visual3'


export default function Home() {
  return (
    <div>
      <Visual3/>
      <Salesection/>
      <Weeklysection/>
      <Categoryfashion/>
      <Emailbanner/>
    </div>
  )
}


