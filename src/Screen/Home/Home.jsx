import React from 'react'
import Headbar from '../../component/Headbar'
import Navbar from '../../component/Navbar';
import Content from './Content';
import Promo from './content/Promo';
import './content/style.css'


export default function Home() {
  return (
    <>
    <div className='cogit antainer-home'>
 
      <Headbar/>
      
      <Content/>
      <Promo/>
      <Navbar></Navbar>

  </div>
</>
  )
}
