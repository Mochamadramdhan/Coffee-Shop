import React from 'react';
import Logo from '../logo'
import './homestyle.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar  = () => {
  return(

    <div className='navbar'>
      {/* <div className="container-promo">
      <div className="promo">
      
      </div>
      </div> */}
<div className="container-logo-sosmed">
      <Logo/>
      <p className='p-navbar'>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
      <div className="container-sosmned">
        <div className='content-sosmed'>
          <div className="circle">
          <FacebookIcon></FacebookIcon>
            
          </div>
        </div>
        <div className='content-sosmed'>
          <div className="circle">
            <InstagramIcon></InstagramIcon>
          </div>
        </div>
        <div className='content-sosmed'>
          <div className="circle">
          <TwitterIcon></TwitterIcon>
          </div>
        </div>
        </div>
      </div>
</div>
  )

}
export default Navbar;