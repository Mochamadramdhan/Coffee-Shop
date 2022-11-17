import React from 'react'

import People from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Button, {  } from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import './content/style.css'
import Price from './content/Price';
import Partner from './content/Partner';
import Teamwowrk from './content/Teamwork';
import Outstore from './content/Outstore';
import Testimoni from './content/Testimoni';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 30,
    display :'flex',
    backgroundColor: alpha(theme.palette.common.white, 80),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.8),
    },
    marginTop: 30,
    left : '65%',
    
    height:60,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    borderRadius: 10,
    padding: '10px 50px',
    color : 'black',
    lineHeight: 1.5,
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


export default function Content() {
  return (
<>
<div className='container-bg-content'>
    <div className="container-search">
              <Search className='search'>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}/>
              </Search>
    </div>
    <div className="container-get-started">
              <h1>Start Your Day with Coffee and Good Meals</h1>
              <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
              <BootstrapButton className='get-started' variant="contained" disableRipple>
                Get Started
              </BootstrapButton>
    </div>
</div>
        
<div className="container-home-page">
      <div className='conten-home-page'>
        <div className="circle">
          <People></People>
        </div>
        <div className="text-home-page">
        <h2>90+</h2>
        <p>Staff</p>
        </div>
        
      </div>
      <div className="vertikal"></div>
      <div className='conten-home-page'>
        
        <div className="circle">
          <LocationOnIcon></LocationOnIcon>
        </div>
        <div className="text-home-page">
          <h2>30+</h2>
          <p>Stores</p>
        </div>
      </div>
      <div className="vertikal"></div>
      <div className='conten-home-page'>
        
        <div className="circle">
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </div>
        <div className="text-home-page">
          <h2>800+</h2>
          <p>Customers</p>
        </div>
        
      </div>
</div>
<Teamwowrk/>
<Price/>
<Outstore/>
<Partner/>
<Testimoni/>
        
</>
  )
}
