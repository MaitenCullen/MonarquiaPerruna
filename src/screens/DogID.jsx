import React from 'react'
import { CardDogs } from '../components/CardDogs'
import { CaracteriticasDogId } from '../components/CaracteriticasDogId'

export const DogID = () => {
  return (
    <div className='w-screen'>
      <CaracteriticasDogId/>
      <CardDogs/>
    </div>
  )
}
