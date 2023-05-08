import React, { useState } from 'react'

const View = ({ respuesta }) => {
    return(
        <>
        <div >
            <p className="mb-5 animate__animated animate__fadeIn">{ respuesta }</p>
        </div>
        
        </>
    )
}

const PreguntaDesplegable = ({ pregunta , respuesta }) => {

    const [ active, setActive ] = useState();

    const SetView = ( active ) => {
            setActive( active );
    };

    const ActivateView = ({ respuesta }) => {
        switch ( active ) {
            case 0:
                return "";
            case 1:
                return <View respuesta={ respuesta }/>;
            default:
                return"";
        }
    };

    const ActivateSign = () => {
        switch ( active ) {
            case 0:
                return "+";
            case 1:
                return "-";
            default:
                return"+";
        }
    };
    return (
    <>
    <div className="preguntasFrecuentes__preguntaYrespuesta__container">
        <div className="preguntasFrecuentes__pregunta__container" >
            <p>{ pregunta }</p>
            <button onClick={active ? () => SetView( 0 ) : () => SetView( 1 ) }>{ ActivateSign()}</button>
        </div>
            { ActivateView({ respuesta }) }
    </div>
    
    </>
    )
}

export default PreguntaDesplegable