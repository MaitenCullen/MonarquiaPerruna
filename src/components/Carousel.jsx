import React from 'react'
import { CardReview } from './CardReview';

export const Carousel = () => {

  return (
    <div className='divCarousel'>
     <div className="carousel carousel-center rounded-box items-center">
        <div id="slide1" className="carousel-item">
       
           <CardReview/>
 
        </div> 
    </div>
    </div>

  )
}
