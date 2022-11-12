import React from 'react'
import Map from '../Img/Vector.png'

export default function Outstore() {
  return (
<>
  <div className="container-outstore">
    <div className="outstore">
      <h1>Visit Our Store in the Spot on the Map Below</h1>
      <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
      <div className="map">
        <img src={Map} alt="Img.vektor" className='img-map'/>
      </div>
    </div>
    
 </div>
</>
  )
}
