import React from 'react';
import Lego from '../screen/Logo'
import '../screen/Home/homestyle.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
const preventDefault = (event) => event.preventDefault();


const Navbar  = () => {
  return(

<div className='navbar'>
  <div className="container-navbar">
  <div className="container-logo-sosmed">
        <Lego/>
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
        <p className='credit'>©2020CoffeeStore</p>
  </div>
  <div className="container-poduct">
  <Box
      sx={{
        display: {
          xs: 'none',
          md: 'flex',
          lg: 'flex'},
        flexWrap: 'wrap',
        flexDirection:'column',
        justifyContent: 'center',  
        color: 'black',
        lineHeight: 2,
      }}
      onClick={preventDefault}
    >
      <h3>Product</h3>
      <Link href="#" underline="hover" color="inherit">
        {'Download'}
      </Link>
      <Link href="#" underline="hover" color="inherit">
        {'Pricing'}
      </Link>
      <Link href="#" underline="hover" color="inherit">
        {'Locations'}
      </Link>
      <Link href="#" underline="hover" color="inherit">
        {'Countries'}
      </Link>
      <Link href="#" underline="hover" color="inherit">
        {'Countries'}
      </Link>
    </Box>
  </div>
  <div className="container-poduct">
  <Box
      sx={{
        display: {
          xs: 'none',
          md: 'none',
          lg: 'flex'},
        flexWrap: 'wrap',
       
        flexDirection:'column',
        
        color: 'black',
        lineHeight: 2,
      }}
      onClick={preventDefault}
    >
      <h3>Engage</h3>
      <Link href="#" underline="hover" color="inherit">
        {'Coffe Shop ?'}
      </Link>
      <Link href="#" underline="hover" color="inherit">
        {'FAQ'}
      </Link>
      <Link href="#" underline="hover" color="inherit">
        {'About Us'}
      </Link>
      <Link href="#" underline="hover" color="inherit">
        {'Privacy Policy'}
      </Link>
      <Link href="#" underline="hover" color="inherit">
        {'Terms of Service'}
      </Link>
    </Box>
  </div>
  
</div>

</div>
  )

}
export default Navbar;