import React, { useEffect , useState } from 'react';
import { getClients } from '../data/clientesCaninos';
import '../styles/CardStyles.css';
import "pure-react-carousel/dist/react-carousel.es.css";
import { Slide } from 'pure-react-carousel';

const MonarcasCards = () => {

    const [ dogClient, setDogClients ] = useState( [] );

    useEffect (() => {
        getClients()
        .then((resp) => {
            console.log( resp, "Los Dog Clients" );
            setDogClients(resp);
        })
    }, [] );
    return (
    <>
    { dogClient.map( dog => (
        <Slide key={dog.id} index={ dog.id }>
            <div className="index__MonarcasSlide__container">
                <div className="index__ImgyCaption__container">
                    <img className="index__imgMonarcas" src={ dog.img }/>
                        <div className="index__captionMonarcas__container">
                            <div>
                                <h4>{ dog.nombre }</h4>
                            </div>
                            <div className="index__captionMonarcas__producto">
                                <h4>{ dog.producto }</h4>
                                <h5>{ dog.modelo }</h5>
                            </div>
                        </div>
                </div>
            </div>
        </Slide>
    ))}
    </>
)
}

export default MonarcasCards