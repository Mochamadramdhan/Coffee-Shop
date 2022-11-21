import React from 'react'
import late from './ImgConten/image 22.png'
import pingkypromise from './ImgConten/image 27.png'
import chiken from './ImgConten/image 30.png'
import Button from '@mui/material/Button';
import { styled} from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import { green } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Grid from '@mui/material/Grid';


const Buttonselec = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  borderRadius: 30,
  padding: '10px 50px',
  color : 'black',
  lineHeight: 1.5,
  borderColor: '#FFBA33',
    '&:hover': {
      backgroundColor: '#FFBA33',
      borderColor: '#FFBA33',
      boxShadow: 'none',
    },
});

export default function Price() {
  return (
    <>
    <div className="container-price">
    <div className="container-price-text">
        <h2>Here is People’s Favorite</h2>
        <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
    </div>
    <div className="container-item" >
    <Grid container spacing={1} direction="row"
  alignItems="center"
  justify="center">
        <Grid item xs md={5} lg={4} >
        <div className="container-item" >
          <div className="item">
              <img src={late} alt="Img.late" className='image-price'/>
              <h3>Hazelnut Latte</h3>
              <List className='list' sx={{ width: '90%', maxWidth: 360, bgcolor: 'background.paper', 
            lineHeight:0.5}}>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="HazelnutSyrup"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Wanilla Whipped Cream"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Ice / Hot"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Sliced Banana on Top"/>
                </ListItem>
            </List>
              <div className="container-price-button">
              <h2>IDR 25.000</h2>
              <Buttonselec variant="outlined">Select</Buttonselec>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={12} md={7} lg={4}>
        <div className="container-item" >
          <div className="item">
              <img src={pingkypromise} alt="Img.pingkypromise" className='image-price'/>
              <h3>Pinky Promise</h3>
              <List className='list' sx={{ width: '90%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="1 Shot of Coffee"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Vanilla Whipped Cream"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Chocolate Biscuits"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Strawberry Syrup"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Sliced strawberry on Top"/>
                </ListItem>
            </List>
              <div className="container-price-button">
              <h2>IDR 30.000</h2>
              <Buttonselec variant="outlined" >Select</Buttonselec>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs>
        <div className="container-item" >
        <div className="item">
            <img src={chiken} alt="Img.chiken" className='image-price'/>
              <h3>Chicken Wings</h3>
              <List className='list' sx={{ width: '90%', maxWidth: 360, bgcolor: 'background.paper', lineHeight:0.1}}>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Wings"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Drum Sticks"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Mayonaise and Lemon"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Hot Fried"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Secret Recipe"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <CheckIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Buy 1 Get 1 only for Dine in"/>
                </ListItem>
            </List>
            <div className="container-price-button">
             
              <h2>IDR 40.000</h2>
              <Buttonselec variant="outlined" >Select</Buttonselec>
            </div>
            </div>
            </div>
        </Grid>
      </Grid>
        
            
            
          
        </div>
        
    </div>
    </>
  )
}
