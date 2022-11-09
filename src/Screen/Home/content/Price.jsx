import React from 'react'
import Map from '../Img/Vector.png'

export default function Price() {
  return (
    <>
    <div className="container-price">
        <h2>Here is People’s Favorite</h2>
        <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
        <div className="container-item">
            <div className="item">

            </div>
            <div className="item">
                
            </div>
            <div className="item">
                
            </div>
        </div>
        <h2>Visit Our Store in the Spot on the Map Below</h2>
        <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
        <div className="map">
        <img src={Map} alt="Img.vektor" className='img-map'/>
        </div>
    </div>
    </>
  )
}
