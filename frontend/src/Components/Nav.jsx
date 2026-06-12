import React from 'react'
import "../Components/Nav.css"

const Nav = () => {
  return (
    <>
      <div className='nav-container'>
        <div className='nav-logo'>
          <img src='https://craftohtml.themezaa.com/images/demo-corporate-logo-black.png'></img>
        </div>
        <div className='nav-menu'>
          <p>Home</p>
          <p>About</p>
          <div className='dropdown'>
            <div className='drop-title'>
              <p>Services</p>
            </div>
            <div className='inner-menu'>
               <div className="service-box">
      <div className="service-item">
        <i className="fa-solid fa-award"></i>
        <h4>Business planning</h4>
      </div>

      <div className="service-item">
        <i className="fa-solid fa-bullseye"></i>
        <h4>Market research</h4>
      </div>

      <div className="service-item">
        <i className="fa-solid fa-hand-holding-dollar"></i>
        <h4>Business consulting</h4>
      </div>

      <div className="service-item">
        <i className="fa-solid fa-chart-pie"></i>
        <h4>Audience analysis</h4>
      </div>
    </div>
            </div>
          </div>
          
          <p>Testimonials</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className='nav-find'>
          <div className='magnify'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
          <div className='free'>
            <p>Free consultation</p>
            <div className='msg'>
         <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav