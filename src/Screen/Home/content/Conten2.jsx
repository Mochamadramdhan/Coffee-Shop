import React from 'react'
import Netflix from './ImgConten/image 17.png'
import Amazon from './ImgConten/image 18.png'


export default function Conten2() {
  return (
    <>
    <div className="container-patner">
          <h2>Our Partner</h2>
          <img src={Netflix} alt="Img.netflix" className='Img-netflix'/>
          <img src={Amazon} alt="Img.netflix" className='Img-netflix'/>
    </div>
    <div className="container-consumer">
        <h2 >Loved by Thousands of Happy Customer</h2>
        <p>These are the stories of our customers who have visited us with great pleasure.</p>
        <div className="container-testimoniConsumer">
          <div className="testimoni">

          </div>
          <div className="testimoni">
            
          </div>
          <div className="testimoni">
            
          </div>
        </div>
    </div>
    
    
    </>
  )
}
