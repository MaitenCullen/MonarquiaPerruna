import React from 'react'
import { CardContact } from '../components/CardContact';
import '../styles.css'
import { Testimonios } from './../section/Testimonios';
import { Contact } from './../section/Contact';


export const Home = () => {
  return (
    <div>
      <Testimonios/>
      <Contact/>
    </div>
  )
}
