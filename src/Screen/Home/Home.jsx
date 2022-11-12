import React from 'react'
import Headbar from './Headbar'
import Navbar from './Navbar';
import Content from './Content';
import Promo from './content/Promo';
import './content/style.css'

export default function Home() {
  return (
    <>
    <div className='container-home'>
      <Headbar/>
      <Content/>
      <Promo></Promo>
      <Navbar>
        {/* <div className='promo'></div> */}
      </Navbar>
  </div>
</>
  )
}
