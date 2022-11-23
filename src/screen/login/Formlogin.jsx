import React from 'react'
import Logo from '../Logo'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { yellow } from '@mui/material/colors';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';

export default function Formlogin() {
  return (
    <div>
    <Box sx={{
        display: {
          xs: 'none',
          md: 'none',
          lg: 'flex'}
    }}
    >
        <Logo/>
        
        </Box>  
        <Button variant="contained" sx={{ color: 'black', backgroundColor: yellow[700],borderRadius:'50px', height:'45px',width:'150px' }}>Contained</Button>
        
    <Box sx={{
        display: 'flex',
        justifyContent:'center',
        flexDirection: 'row'
    }}
    color={{
      xs: 'white',
      md: '#6A4029',
      lg: '#6A4029'
    }}>
        <h1>Sign Up</h1>
        <form action="Login"></form>
    </Box>
    <Box component="form" noValidate autoComplete="off">
      
      <FormControl sx={{ width: '505px', margin:'70px'}}>
      <p>Email Adress :</p>
        <OutlinedInput placeholder="Enter your email adress" />
      </FormControl> 
      <FormControl sx={{ width: '505px', marginLeft:'70px'}}>
      <p>Password :</p>
        <OutlinedInput placeholder="Enter your password" />
      </FormControl>
      <FormControl sx={{ width: '505px', margin:'70px' }}>
      <p>Phone Number :</p>
        <OutlinedInput placeholder="Enter your phone number" />
      </FormControl>
      <Button variant="contained" sx={{ color: 'black', backgroundColor: yellow[700],borderRadius:'20px', height:'75px',width:'505px' }}>Sign Up</Button>
      <Button variant="outlined" startIcon={<Avatar src={'/imglogin/google.png'} />} sx={{ color: 'black', backgroundColor: 'white',borderRadius:'20px', height:'75px',width:'505px' }}>
      Sign up with Google
      </Button>
    </Box>
    </div>
  )
}
