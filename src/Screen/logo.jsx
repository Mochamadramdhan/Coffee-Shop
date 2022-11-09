import React from 'react';
import Cofee from './Home/Img/coffee 1.png'
import './style.css'

const Logo = () => {
  return(
    <div className='logo'>
      <img src={Cofee} alt="Logo.IconBali" className='Cofee'/>
      <h2>Coffee Shop</h2>
    </div>
  )

}
export default Logo;