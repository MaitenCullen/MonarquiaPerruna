import React, { useEffect, useState } from 'react'
import { getReviews } from '../data/reviews'
import '../styles/CardStyles.css'
import "pure-react-carousel/dist/react-carousel.es.css";
import { Slide } from 'pure-react-carousel';


export const CardReview = () => {

  const [ review, setReview] = useState([])

  useEffect (() => {
      getReviews()
      .then((resp) => {
          console.log(resp, "Las review")
          setReview(resp);
        })
  },[]);
  return (
    <>
      { review.map( review => (
        <Slide  key={review.id} index={review.id}>
          <div className='divSlideCard'>
            <div className='divReview'>
            <img src={review.img} className='imgDogReview'/>
              <div className='divCardReview '>
                <div className="divTextReview">
                    <p>
                  {review.descripcion}
                    </p>
                </div>
            </div>
            </div>
          </div>
        </Slide>
    ))}
    </>
  
  )
}
