import React, { useState } from 'react';
import img1 from "/img/Home-BannerProductos1.png";
import img2 from "/img/Home-BannerDogId2.png";
import img3 from "/img/Home-BannerRopa3.png";
import carouselDotGrey from "/img/greyCircle.png";
import carouselDotWhite from "/img/whiteCircle.png";



const MainCarousel = () => {
    const [ active , setActive ] = useState()
    
    const SetView = ( active ) => {
            setActive( active );
    };
    const View1 = () => {
        return(
            <>
            <a onClick={() => SetView(1)} href="#item1"><img className="index__btnMainCarousel__img" src={ carouselDotWhite } alt="Botón de carousel para ver los diferentes productos de Monarquia Perruna"/></a> 
            <a onClick={() => SetView(2)} href="#item2"><img className="index__btnMainCarousel__img" src={ carouselDotGrey } alt="Botón de carousel para ver los diferentes productos de Monarquia Perruna"/></a> 
            <a onClick={() => SetView(3)} href="#item3"><img className="index__btnMainCarousel__img" src={ carouselDotGrey } alt="Botón de carousel para ver los diferentes productos de Monarquia Perruna"/></a> 
            </>
        )
    }
    
    const View2 = () => {
        return(
            <>
            <a onClick={() => SetView(1)} href="#item1"><img className="index__btnMainCarousel__img" src={ carouselDotGrey } alt="Botón de carousel para ver los diferentes productos de Monarquia Perruna"/></a> 
            <a onClick={() => SetView(2)} href="#item2"><img className="index__btnMainCarousel__img" src={ carouselDotWhite } alt="Botón de carousel para ver los diferentes productos de Monarquia Perruna"/></a> 
            <a  onClick={() => SetView(3)}href="#item3"><img className="index__btnMainCarousel__img" src={ carouselDotGrey } alt="Botón de carousel para ver los diferentes productos de Monarquia Perruna"/></a> 
            </>
        )
    }
    
    const View3 = () => {
        return(
            <>
            <a onClick={() => SetView(1)} href="#item1"><img className="index__btnMainCarousel__img" src={ carouselDotGrey } alt="Botón de carousel para ver los diferentes productos de Monarquia Perruna"/></a> 
            <a onClick={() => SetView(2)} href="#item2"><img className="index__btnMainCarousel__img" src={ carouselDotGrey } alt="Botón de carousel para ver los diferentes productos de Monarquia Perruna"/></a> 
            <a onClick={() => SetView(3)} href="#item3"><img className="index__btnMainCarousel__img" src={ carouselDotWhite } alt="Botón de carousel para ver los diferentes productos de Monarquia Perruna"/></a> 
            </>
        )
    }

    const ActiveView = () => {
        switch ( active ) {
            case 1:
                return <View1/>;
            case 2:
                return <View2/>;
            case 3:
                return <View3/>
            default:
                return <View1/>;
        }
    };

    return (
    <>
    <div className='index__mainCarousel__container'>
        <div className="carousel index__mainCarousel__carousel w-full">
            <div id="item1" className="carousel-item w-full">
                <h2 className="index__carouselImg1__titulo">¡Tenemos los productos que necesita tu consentid@!</h2>
                <h3 className="index__carouselImg1__subtitulo">Para que se sientan felices y seguros en donde se encuentren</h3>
            </div> 
            <div id="item2" className="carousel-item w-full">
                <h2 className="index__carouselImg2__titulo">Utiliza <strong>DOG ID</strong> para su seguridad y tu tranquilidad</h2>
                <button id="index__carouselImg2__btn" className="btn">Ver más</button>
            </div> 
            <div id="item3" className="carousel-item w-full">
                <h2 className="index__carouselImg3__titulo">¡Completa su armario!</h2>
                <h3 className="index__carouselImg3__subtitulo">Tenemos las prendas más lindas para que tu consentid@ brille y sorprenda</h3>
                <button id="index__carouselImg3__btn" className="btn">Ver más</button>
            </div> 
        </div> 
        <div  id="index__btnsCarousel__container" className="flex justify-center w-full py-2 gap-2">
            {ActiveView()}
        </div>
    </div>
    
</>
)
}

export default MainCarousel