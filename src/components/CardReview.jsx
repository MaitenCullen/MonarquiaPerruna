import React from 'react'
import '../styles.css'
import perrito1 from '/img/perrito1.png'

export const CardReview = () => {
  return (
    <div className='divReview'>
      <img src={perrito1} className='imgDogReview'/>
        <div className='divCardReview'>
          <div className="divTextReview">
              <text>
              Me gustó, el chaleco es realmente lo que esperaba, algo moderno para mi perrito y que además sea fácil para ponérselo. Muy lindo diseño. Gracias.” 
              </text>
            <blockquote> Laura Rodriguez</blockquote>
            <q>Doki</q>
          </div>
      </div>
    </div>
    
  )
}
