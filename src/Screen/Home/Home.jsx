import React from 'react'
import Headbar from './Headbar'
// import Navbar from './Navbar';
import Content from './Content';

export default function Home() {
  return (
    <>
    <div className='container'>
      <Headbar/>
      <Content/>
      {/* <Navbar/> */}
  </div>
</>
  )
}
