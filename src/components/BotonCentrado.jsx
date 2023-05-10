import React from 'react'
import { Link } from 'react-router-dom'

const BotonCentrado = () => {
  return (
    <div className="botonCentrado__container">
        <Link to="/PreguntasFrecuentes" className="btn">Conócenos</Link>
    </div>
  )
}

export default BotonCentrado