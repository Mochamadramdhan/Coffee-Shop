import React from 'react'
import Box from '@mui/material/Box';
import './style.css';
import Grid from '@mui/material/Grid';

import { styled} from '@mui/material/styles';
import Button, {  } from '@mui/material/Button';

const BootstrapButton = styled(Button)({
  position:'relative',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  borderRadius: 10,
  padding: '10px 50px',
  color : 'black',
  minWidth:250,
  height:60,
  justifyContent:"center",
  backgroundColor: '#FFBA33',
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

export default function Promo() {
  return (
<div className="container-promo">
  
    <Box sx={{ maxWidth: 1140 , height:233 , backgroundColor:'#FFFFFF',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'column',
        justifyContent: 'center',  
        color: 'black',
        lineHeight: 1.5,
        borderRadius: 10,
        position:'relative'
        }}>
      <div className="promo">
        <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} lg={6}>
          <div className="container-item" >
          <div className="promo-text">
            <h1>Check our promo today!</h1>
            <p>Let's see the deals and pick yours!</p>
          </div>
          </div>
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
      <div className="container-item" >
        <BootstrapButton className='seePromo' variant="contained" disableRipple>
        See Promo
      </BootstrapButton>
      </div>
        </Grid>
      </Grid>
      </div>
    </Box>
</div>
  )
}
