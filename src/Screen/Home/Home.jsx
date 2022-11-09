import React from 'react'
import Headbar from './Headbar'
import Navbar from './Navbar';
import Content from './content/Content';

export default function Home() {
  return (
    <>
    <div className='container-home'>
      <Headbar/>
      <Content/>
      <Navbar></Navbar>
  </div>
</>
  )
}
