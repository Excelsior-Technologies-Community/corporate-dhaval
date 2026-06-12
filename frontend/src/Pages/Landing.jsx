import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../Pages/Landing.css"
import Nav from '../Components/Nav';

const Landing = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
        <Nav/>
            <div className="hero-slider">
                <div className="custom-prev" ref={prevRef}>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>

                <div className="custom-next" ref={nextRef}>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;

                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                >
                    <SwiperSlide>
                        <div
                            className="slide"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600')",
                            }}
                        >
                            <div className="overlay-circle"></div>
                            <div className="overlay-circle1"></div>

                            <div className="slide-content">
                                <h5>
                                    <i className="fa-regular fa-gem"></i>
                                    ON DEMAND LIVE SUPPORT
                                </h5>

                                <h1>
                                    Awesome solutions
                                    <br />
                                    for your business
                                </h1>

                                <p>
                                    We're a fully dedicated corporate service agency
                                    collaborating with brands all over the world.
                                </p>

                                <button className="hero-btn">
                                    Get started now
                                    <span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            className="slide"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600')",
                            }}
                        >
                            <div className="overlay-circle"></div>

                            <div className="slide-content">
                                <h5>
                                    <i className="fa-regular fa-gem"></i>
                                    PROFESSIONAL SERVICES
                                </h5>

                                <h1>
                                    Creative ideas
                                    <br />
                                    for your company
                                </h1>

                                <p>
                                    Helping businesses grow faster with innovative digital
                                    solutions.
                                </p>

                                <button className="hero-btn">
                                    Get started now
                                    <span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='swiper-txt'>

                    <div className='swipertxt1'>
                        <h1>99%</h1>
                        <span>Track and analyze
                            business reports.</span>
                    </div>
                    <div className='swipertxt2'>
                        <div className=''>
                            <h1>4.98</h1>
                        </div>
                        <div className='swiper-rate'>
                            <div className='stars'>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </div>
                            <p>Best rated agency</p>
                        </div>
                    </div>
                    <div className='swipertxt1'>
                        <h1>98%</h1>
                        <span>Genuine repeated
                            happy customers.</span>
                    </div>
                </div>
            </div>
            <div className='powerful'>
                <div className='power-left'>
                    <div className='power-img'>
                        <img src='	https://craftohtml.themezaa.com/images/demo-corporate-03.png'></img>
                        <div className='creative-img'>
                            <img src='https://craftohtml.themezaa.com/images/demo-corporate-02.png'></img>
                        </div>
                        <div className='creative-img1'>
                            <img src='https://craftohtml.themezaa.com/images/demo-corporate-01.png'></img>
                        </div>
                        <div className='left-txt'>
                            <h1>28</h1>
                            <div className='plus'>
                                +
                            </div>
                            <p>Years working <br></br>experience</p>
                        </div>
                    </div>
                </div>
                <div className='power-right'>
                    <div className='approach'>
                        <h6>CREATIVE APPROACH</h6>
                    </div>
                    <div className='right-txt'>
                        <h1>
                            Powerful agency for corporate business.</h1>
                        <p>We strive to develop real-world web solutions that are ideal for small to large projects with bespoke project requirements. We create compelling web designs, which are the right-fit for your target groups and also deliver optimized.</p>
                    <div className='number-container'>
                        <div className='number-btn'>
                           <a href='/' className='btn'><i className='fa-solid fa-arrow-right air1'></i>Read about us <i className='fa-solid fa-arrow-right air2'></i></a>
                        </div>
                        <div className='number'>
                           <i class="fa-solid fa-phone"></i>1800 222 000
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='cases container'>
              
                    <div className='case-number'>
                        <h1>4586</h1>
                        <p>TELEPHONIC TALK</p>
                          <div className='case-1'>
                             </div>
                    </div>
                    <div className='case-number'>
                        <h1>583</h1>
                        <p>CASES SOLVED</p>
                          <div className='case-2'>
                             </div>
                    </div>
                    <div className='case-number'>
                        <h1>6548</h1>
                        <p>COFFEE CUPS</p>
                          <div className='case-1'>
                             </div>
                    </div>
                    <div className='case-number'>
                        <h1>836</h1>
                        <p>HAPPY CLIENTS</p>
                          <div className='case-2'>
                             </div>
                    </div>
               
            </div>
            <div className='corporate'>
                <div className='corporate-top'>
                    <div className='create-container'>
                    <div className='create'>
                        <p>CREATIVE APPROACH</p>
                    </div>
                    <div className='service'>
                        <h1>Corporate services</h1>
                    </div>
                    </div>
                    <div className='top-txt'>
                        <p>We strive to develop real-world web solutions that are ideal for small to large projects with bespoke your custom project requirements.</p>
                    </div>
                </div>
                <div className='top-img'>
                    <img src='https://craftohtml.themezaa.com/images/demo-corporate-bg-01.png'></img>
                </div>
            </div>
            <div className='business-card'>
                <div className='card-img'>
                    <img src='https://craftohtml.themezaa.com/images/demo-corporate-slider-img-01.jpg'></img>
                <div className='blue-overlay'></div>
                </div>
                
            </div>
            
        </>
    )
}

export default Landing