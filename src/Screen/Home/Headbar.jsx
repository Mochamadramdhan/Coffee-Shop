import Button from '@mui/material/Button';
import React from 'react';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../logo'
const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  borderRadius: 50,
  padding: '10px 25px',
  marginLeft: 30,
  color : 'black',
  lineHeight: 1,
  backgroundColor: '#FFBA33',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color:'white',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});


const Headbar  = () => {
  return(
  <>
    
    <div className='headbar'>
      <div className="logo-headbar">
        <Logo className='coba'></Logo>
      </div>
      <div className="container-button-headbar">
        <MenuItem>Home</MenuItem>
        <MenuItem>Product</MenuItem>
        <MenuItem>Your Cart</MenuItem>
        <MenuItem>History</MenuItem>
      </div>
      <p className='login-headbar'>Login</p>
      <BootstrapButton variant="contained" disableRipple>
              Sign Up
          </BootstrapButton>
    </div>
    </>
  )

}
export default Headbar;