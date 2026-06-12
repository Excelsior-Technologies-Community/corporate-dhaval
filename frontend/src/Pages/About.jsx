import React from 'react'
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../Pages/About.css"
import Nav from '../Components/Nav';

const About = () => {
     const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      title: "Make the creative solutions for business.",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been industry's standard dummy text ever since the when an unknown adipiscing elit do eiusmod tempor incididunt ut labore printer took and scrambled it specimen book.",
    },
    {
      title: "Build innovative strategies for growth.",
      desc: "We create business-focused solutions that help companies scale efficiently and achieve long-term success in the modern market.",
    },
    {
      title: "Transform ideas into digital success.",
      desc: "Our experienced team delivers impactful digital experiences with a focus on performance and creativity.",
    },
  ];
  return (
    <>
    <Nav/>
  <div className="service-head">
                <div className="service-img">
                    <img
                        src="https://craftohtml.themezaa.com/images/demo-corporate-about-title-bg.jpg"
                        alt="Services"
                    />

                    <div className="service-overlay"></div>

                    <div className="service-txt">
                        <h1>Services</h1>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
              <section className="about-company">
      <div className="about-top">
        <div className="about-left">
          <span className="about-tag">ABOUT COMPANY</span>

          <h2>
            Powerful agency for
            <br />
            corporate business.
          </h2>
        </div>

        <div className="about-right">
          <p>
            We strive to develop real-world web solutions that are ideal for
            small to large projects with bespoke project requirements. we
            compelling web, which are the right-fit for your target.
          </p>
        </div>
      </div>

      <div className="about-features">
        <div className="feature-card">
          <img src='https://craftohtml.themezaa.com/images/demo-corporate-about-icon-01.png'></img>
          <h3>Trusted company</h3>
          <p>
            We deliver email marketing
            campaigns to audience.
          </p>
        </div>

        <div className="feature-card">
         <img src='https://craftohtml.themezaa.com/images/demo-corporate-about-icon-02.png'></img>
          <h3>Professional work</h3>
          <p>
            We also help our clients with
            social media strategy.
          </p>
        </div>

        <div className="feature-card">
         <img src='https://craftohtml.themezaa.com/images/demo-corporate-about-icon-03.png'></img>
          <h3>Award winning</h3>
          <p>
            We believe in challenges so
            we have made challenges.
          </p>
        </div>

        <div className="feature-card">
          <img src='https://craftohtml.themezaa.com/images/demo-corporate-about-icon-04.png'></img>
          <h3>Help any time</h3>
          <p>
            We never fail for support for
            your business anywhere.
          </p>
        </div>
      </div>
    </section>
    <div className='project'>
        <div className='project-inner'>
            <i className='fa-regular fa-comment me-2'></i><p>Let's make something great work together.<a href='/'> Got a project in mind? </a></p>
        </div>
    </div>
     <section className="company-value">
      <div className="company-left">
        <div className="experience-circle">
          <h2>28+</h2>
          <p>
            Years working
            <br />
            experience
          </p>
        </div>

        <img
          className="main-image"
          src="https://craftohtml.themezaa.com/images/demo-corporate-about-img-01.jpg"
          alt=""
        />

        <img
          className="small-image"
          src="https://craftohtml.themezaa.com/images/demo-corporate-about-img-02.jpg"
          alt=""
        />
      </div>

      <div className="company-right">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <span className="value-tag">COMPANY VALUE</span>

              <h2>{slide.title}</h2>

              <p>{slide.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-navigation">
          <button ref={prevRef}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <button ref={nextRef}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default About