import React from 'react'
import Imglogin from './imglogin/imgLoginSignUp.png'
import Navbar from '../../component/Navbar'
import Formlogin from './Formlogin'
import Grid from '@mui/material/Grid';



export default function Login() {
  return (
    <>
<div className="container-login">
<Grid container spacing={2}>
    <Grid item  xs={1} md={6} lg={6}>
            <img  src={Imglogin} alt="Img.login" className='Img-login'/>
    </Grid>
    <Grid item  xs={4} md={6} lg={6}>
        <Formlogin/>
    </Grid>
</Grid>
<Navbar/>
</div>

    </>
  )
}
