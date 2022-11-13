import React from 'react'
import Netflix from './ImgConten/netflix.png'
import Spotify from './ImgConten/spotify.png'
import Disikord from './ImgConten/diskord.png'
import  Amazon from './ImgConten/amazon.png'
import Reddit from './ImgConten/reddit.png'


export default function Conten2() {
  return (
<>
    <div className="container-patner">
          <h2>Our Partner</h2>
          <img  src={Netflix} alt="Img.partner" className='Img-partner'/>
          <img  src={Reddit} alt="Img.partner" className='Img-partner'/>
          <img  src={Amazon} alt="Img.partner" className='Img-partner'/>
          <img  src={Disikord} alt="Img.partner" className='Img-partner'/>
          <img sx={ Spotify } src={Spotify} alt="Img.xpartner" className='Img-partner'/>
    </div>
</>
  )
}
