import React, { useState } from 'react'

const data = [
    {id:1,key:1,color:"rosa",img:"/img/dogIdRosa.png"},
    {id:2,key:2,color:"verde",img:"/img/DogColorVerde.png"},
    {id:3,key:3,color:"aqua",img:"/img/DogColorAqua.png"},
    {id:4,key:4,color:"rojo",img:"/img/DogColorRojo.png"},
]

const View1 = () => {
    return(
        <div>
            <img className="animate__animated animate__fadeIn" src="/img/dogIdRosa.png" alt="" />
        </div>
    )
}

const View2 = () => {
    return(
        <div>
            <img className="animate__animated animate__fadeIn" src="/img/DogColorVerde.png" alt="" />
        </div>
    )
}

const View3 = () => {
    return(
        <div>
            <img className="animate__animated animate__fadeIn" src="/img/DogColorAqua.png" alt="" />
        </div>
    )
}

const View4 = () => {
    return(
        <div>
            <img className="animate__animated animate__fadeIn" src="/img/DogColorRojo.png" alt="" />
        </div>
    )
}

const DogIdSelector = () => {
    const [ active , setActive ] = useState()
    
    const SetView = ( active ) => {
            setActive( active );
    };

    const ActiveView = () => {
        switch ( active ) {
            case 2:
                return <View2/>;
            case 3:
                return <View3/>;
            case 4:
                return <View4/>
            default:
                return <View1/>;
        }
    };
  return (
    <>
    <section className="dogId__selector__generalContainer">
        <div className="dogId__selector__container">
            <div className="dogId__selectors__container">
                <div className="dogId__imgSelector__container" >
                    <img className="dogId__selector__img" onClick={() => SetView(1)} src="/img/dogIdRosaProvisorio.jpeg" alt="" />
                </div>
                <div className="dogId__imgSelector__container" >
                    <img className="dogId__selector__img" onClick={() => SetView(2)} src="/img/dogIdVerdeProvisorio.jpeg" alt="" />
                </div>
                <div className="dogId__imgSelector__container" >
                    <img className="dogId__selector__img" onClick={() => SetView(3)} src="/img/dogIdCelesteProvisorio.jpeg" alt="" />
                </div>
                <div  className="dogId__imgSelector__container" >
                    <img className="dogId__selector__img" onClick={() => SetView(4)} src="/img/dogIdRosaProvisorio.jpeg" alt="" />
                </div>
            </div>
            <div>
                {ActiveView()}
            </div>
        </div>
    </section>
    </>


    
  )
}

export default DogIdSelector