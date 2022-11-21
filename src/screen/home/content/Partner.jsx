import React from 'react'
import Netflix from './ImgConten/netflix.png'
import Spotify from './ImgConten/spotify.png'
import Disikord from './ImgConten/diskord.png'
import  Amazon from './ImgConten/amazon.png'
import Reddit from './ImgConten/reddit.png'
import Grid from '@mui/material/Grid';


export default function Partner() {
  return (
<>
    <div className="container-patner">
          <h2>Our Partner</h2>
        <Grid container spacing={2}>
        <Grid item xs={12} md={2.4} lg={2.4}>
        <img  src={Netflix} alt="Img.partner" className='Img-partner-netflix'/>
        </Grid>
        <Grid item xs={12} md={2.4} lg={2.4}>
        <img  src={Reddit} alt="Img.partner" className='Img-partner'/>
        </Grid>
        <Grid item xs={12} md={2.4} lg={2.4}>
        <img  src={Amazon} alt="Img.partner" className='Img-partner'/>
        </Grid>
        <Grid item  xs={12} md={2.4} lg={2.4}>
        <img  src={Disikord} alt="Img.partner" className='Img-partner'/>
        </Grid>
        <Grid item  xs={12}  md={2.4} lg={2.4}>
        <img sx={ Spotify } src={Spotify} alt="Img.partner" className='Img-partner'/>
      </Grid>
      </Grid>  
    </div>
</>
  )
}
