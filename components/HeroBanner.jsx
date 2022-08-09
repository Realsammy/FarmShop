import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


const HeroBanner = ({ heroBanner: {midText,image,buttonText,largeText1,smallText, product} }) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beat-solo'>{smallText}</p>
            <h3>{midText}</h3>
            <h2>{largeText1}</h2>
            <img src= {urlFor(image)} alt= "headphone" 
          className='hero-banner-image' />

        </div>
        <Link href={'/product/${heroBanner.product}'}>
        <button type= 'button' > {buttonText}</button> 
        </Link>
        
    
        <div className='desc'>
            <h5>DESCRIPTION</h5>
            <p>{product}</p>

        </div>
    </div>
  )
}

export default HeroBanner 

