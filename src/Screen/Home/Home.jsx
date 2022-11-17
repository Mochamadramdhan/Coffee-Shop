import React from 'react'
import Headbar from '../../component/Headbar'
import Navbar from '../../component/Navbar';
import Content from './Content';
import Promo from './content/Promo';
import './content/style.css'


export default function Home() {
  return (
    <>
    <div className='container-home'>
 
      <Headbar/>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={3} lg={3}>
          <div className='bg-grid'>xs=8</div>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <div className='bg-grid'>xs=4</div>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <div className='bg-grid'>xs=4</div>
        </Grid>
        <Grid item  xs={12} md={3} lg={3}>
          <div className='bg-grid'>xs=8</div>
      </Grid>
      <Box 
      sx={{
        display: {
        xs: 'flex',
        md: 'flex',
        lg: 'flex'},
        color:
        {xs: 'red',
        md: 'red',
        lg: 'blue'
        }
        }}>
        <div className='bg-grid'>1</div>
        <div className='bg-grid'>2</div>
        <div className='bg-grid'>3</div>
        <div className='bg-grid'>4</div>
      </Box>
      </Grid> */}
      <Content/>
      <Promo/>
      <Navbar></Navbar>

  </div>
</>
  )
}
