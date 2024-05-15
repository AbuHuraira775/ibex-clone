import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import homeSliderImg1 from '../assets/home-slider-img1.png'
import homeSliderImg2 from '../assets/home-slider-img2.png'
import homeSliderImg3 from '../assets/home-slider-img3.png'
import homeSliderImg4 from '../assets/home-slider-img4.png'
import homeSliderImg5 from '../assets/home-slider-img5.png'
import halfCircle from '../assets/halfCircle.svg'
import Video from './Video';


function Hero() {


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        useTransform: false,
        vertical: true,
        arrows: false
    };

    return (
        <div className='mt5 h-100 w-100 container hero'>
            <div className="heroRow1 flex">
                <div className="heroRow1Col1 heroTextSlider " >

                    <Slider  {...settings}>

                        <div>
                            <h3 className='title'>Learning <span className='dot'>.</span></h3>
                        </div>
                        <div>
                            <h3 className='title'>Connection  <span className='dot'>.</span></h3>
                        </div>
                        <div>
                            <h3 className='title'>Journey <span className='dot'>.</span></h3>
                        </div>
                        <div>
                            <h3 className='title'>Growth <span className='dot'>.</span></h3>
                        </div>
                        <div>
                            <h3 className='title'>Happiness <span className='dot'>.</span></h3>
                        </div>
                    </Slider>
                    <h2 className='title'>for everyone</h2>
                </div>
                <div className="heroRow1Col2 heroImageSlider ">


                    <div className="circle1 radius-50">
                        <div className="circle2 radius-50">
                            <div className="circle3 radius-50">
                                <Slider  {...settings}>

                                    <div >
                                        <img src={homeSliderImg1} className='radius-50'/>
                                    </div>
                                    <div>
                                        <img src={homeSliderImg2} className='radius-50'/>
                                    </div>
                                    <div>
                                        <img src={homeSliderImg3} className='radius-50'/>
                                    </div>
                                    <div>
                                        <img src={homeSliderImg4} className='radius-50'/>
                                    </div>
                                    <div>
                                        <img src={homeSliderImg5} className='radius-50'/>
                                    </div>

                                </Slider>

                                <div className="imageSliderComponent radius-50">
                                    <img src={halfCircle} className='halfCircle' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="heroRow2" data-aos="slide-right">
                <Video />
            </div>

        </div>
    )
}

export default Hero