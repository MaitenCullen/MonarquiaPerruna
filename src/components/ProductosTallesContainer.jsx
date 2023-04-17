import React from 'react'
import modeloDeTalles from "/img/imagenTalles.png"
import tablaDeTalles from "/img/tablaDeTalles.png"

const ProductosTallesContainer = () => {
  return (
    <>
    <section className="talles__section__container">
        <div>
            <div>
                <div className="index__sobreNosotros__container">
                    <div>
                        <p>¿Cómo medir a tu mascota?</p>
                        <p><strong>Nuestros talles</strong></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="talles__imagen__container">
            <img src={ modeloDeTalles } alt="Perro modelo de Monarquia Perruna desfilando un chaleco. En la imagen se muestran indicaciones sobre los talles." />
        </div>
        <div className="talles__tabla__generalContainer">
            <div className="talles__tabla__container">
                <div className="talles__tablaImg__container">
                    <img src={ tablaDeTalles } alt="Tabla de talles de Monarquia Perruna" />
                </div>
                <p className="talles__indicaciones__texto">*Estas medidas son aproximadas y puede haber un mínimo de variación. Te aconsejamos que calcules con un par de centímetros de margen de error.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductosTallesContainer