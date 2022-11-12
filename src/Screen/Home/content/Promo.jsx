import React from 'react'
import Box from '@mui/material/Box';
import './style.css';

import { styled} from '@mui/material/styles';
import Button, {  } from '@mui/material/Button';

const BootstrapButton = styled(Button)({
  position:'absolute',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  borderRadius: 10,
  padding: '10px 50px',
  color : 'black',
  width:250,
  height:60,
  right:30,
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
  
    <Box sx={{ width: 1140 , height:233 , backgroundColor:'#EAEAEA',
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
      <div className="promo-text">
      <h1>Check our promo today!</h1>
      <p>Let's see the deals and pick yours!</p>
      </div>
      <BootstrapButton className='seePromo' variant="contained" disableRipple>
        See Promo
      </BootstrapButton>
      </div>
    </Box>
</div>
  )
}
