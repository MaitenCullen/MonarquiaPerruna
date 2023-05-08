import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import MonarcasCards from '../components/MonarcasCards';


const IndexReyesYReinas = () => {
    return (
    <>
    <div className="index__reyesYreinas__container">
        <div>
                <p>Ell@s nunca dejan de brillas</p>
                <p><strong>Nuestros reyes y reinas</strong></p>
        </div>
    </div>
    <div className="w-100 mb-20">
                <CarouselProvider className="relative hidden sm:block " naturalSlideWidth={50} isIntrinsicHeight={true} naturalSlideHeight={100} totalSlides={6} visibleSlides={3} step={1} infinite={true} currentSlide={2} dragStep={1} interval={5000} isPlaying={true}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 flex justify-center items-center absolute z-30 left-0 ml-8 cursor-pointer" id="prev">
                        </ButtonBack>
                        <Slider className=" ">
                            <MonarcasCards/>
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 flex justify-center items-center absolute z-30 right-0 mr-8 cursor-pointer" id="next">
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
    
    </>
    )
}

export default IndexReyesYReinas