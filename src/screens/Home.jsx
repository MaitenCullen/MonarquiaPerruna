import React from 'react'
import { CardContact } from '../components/CardContact';
import '../styles.css'
import { Testimonios } from './../section/Testimonios';


export const Home = () => {
  return (
    <div>
      <Testimonios/>
   <CardContact/>
    </div>
  )
}
