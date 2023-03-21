import React, { useEffect, useState } from 'react'
import { getReviews } from '../data/reviews'
import '../styles.css'


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
        <div className='divReview' key={review.id}>
          <img src={review.img} className='imgDogReview'/>
            <div className='divCardReview'>
              <div className="divTextReview">
                  <p>
                {review.descripcion}
                  </p>
                <blockquote>{review.nombre}</blockquote>
                <i>{review.icon}</i>
                <q>{review.perro}</q>
              </div>
          </div>
        </div>
    ))}
    </>
  
  )
}
