import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Grid from '@mui/material/Grid';
import Teamwork from '../Img/img-teamwork.png'

export default function Teamwowrk() {
  return (
    <>
<div className="contanier-teamwork">
<Grid container spacing={2}>
      <Grid item  xs={12} md={8} lg={6}>
        <div className="teamwork">
              <img src={Teamwork} alt="Img.teamwork" className='Img-team-work'/>
        </div>
      </Grid>
        <Grid item  xs={12} md={7} lg={6}>
          <div className="container-text-teamwork">
              <h1 className='h1-teamwork'>We Provide Good Coffee and Healthy Meals</h1>
              <p>
              You can explore the menu that we provide with fun and have their own taste and make your day better.
              </p>
              <List className='list-teamwork' sx={{ width: '100%', bgcolor: 'background.paper', margin:'0px', }}>
                <ListItem >
                  <ListItemAvatar>
                    <CheckCircleIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="High quality beans"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                  <CheckCircleIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Healthy meals, you can request the ingredients"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                  <CheckCircleIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Chat with our staff to get better experience for ordering"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                  <CheckCircleIcon sx={{ color: green[500] }}/>
                  </ListItemAvatar>
                  <ListItemText primary="Free member card with a minimum purchase of IDR 200.000."/>
                </ListItem>
            </List>   
          </div>
      </Grid>
</Grid>
</div>
</>
  )
}
