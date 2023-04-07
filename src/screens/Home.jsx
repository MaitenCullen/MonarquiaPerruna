import React from 'react'
import { CardContact } from '../components/CardContact';
import '../styles.css';
import '../styles/CardStyles.css';
import '../styles/HomeStyles.css'
import { Testimonios } from './../section/Testimonios';
import { Contact } from './../section/Contact';
import MainCarousel from '../components/MainCarousel';
import Fortalezas from '../section/Fortalezas';
import BotonCentrado from '../components/BotonCentrado';
import ProductosIndex from '../section/ProductosIndex';


export const Home = () => {
  return (
    <div>
      <MainCarousel/>
      <Fortalezas/>
      <BotonCentrado/>
      <ProductosIndex/>
      <Testimonios/>
      <Contact/>
    </div>
  )
}
