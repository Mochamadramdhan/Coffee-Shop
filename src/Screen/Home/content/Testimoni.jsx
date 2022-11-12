import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import Image1 from './ImgConten/image testimoni 1.png'
import Image2 from './ImgConten/image testimoni 2.png'
import Image3 from './ImgConten/image testimoni 3.png'


export default function Testimoni() {
  return (
<>
<div className="container-consumer">
  <div className="container-consumer-text">
            <h1 >Loved by Thousands of Happy Customer</h1>
            <p>These are the stories of our customers who have visited us with great pleasure.</p>
            </div>
    <div className="container-testimoniConsumer">
    <div className="testimoni">
    <div className="container-people">
      <img src={Image1} alt="Img.1" className='image-testimoni'/>
          <div className="name-city">
            <h3>Viezh Robert</h3>
            <p>Warsaw, Poland</p>
            </div>
      </div>
      <div className="testimoni-review">
        <p>4.5</p>
        <StarIcon sx={{ color: yellow[900] }}/>
      </div>
        <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
    </div>
    
    <div className="testimoni">
    <div className="container-people">
      <img src={Image2} alt="Img.2" className='image-testimoni'/>
          <div className="name-city">
            <h3>Yessica Christy</h3>
            <p>Shanxi, China</p>
          </div>
      </div>
      <div className="testimoni-review">
        <p>4.5</p>
        <StarIcon sx={{ color: yellow[900] }}/>
        </div>
        <p>“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</p>
    </div>

    <div className="testimoni">
      <div className="container-people">
        <img src={Image3} alt="Img.3" className='image-testimoni'/>
            <div className="name-city">
              <h3>Kim Young Jou</h3>
              <p>Seoul, South Korea</p>
            </div>
        </div>
        <div className="testimoni-review">
          <p>4.5</p>
          <StarIcon sx={{ color: yellow[900] }}/>
        </div>
          <p>“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</p>
    </div>
  </div>
</div>  
</>
  )
}
