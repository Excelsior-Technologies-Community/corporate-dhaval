import React from 'react'
import "../Pages/Services.css"

const Services = () => {
    return (
        <>
            <div className="service-head">
                <div className="service-img">
                    <img
                        src="https://craftohtml.themezaa.com/images/demo-corporate-services-title-bg.jpg"
                        alt="Services"
                    />

                    <div className="service-overlay"></div>

                    <div className="service-txt">
                        <h1>Services</h1>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
            <div className='best container'>
                <div className="approach-section">

                    <div className="approach-left">

                        <div className="stat-card">
                            <div className="stat-number">99<span>%</span></div>
                            <div className="stat-text">
                                Track and analyze
                                <br />
                                business reports.
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-number">4.9</div>
                            <div className="stat-text">
                                <div className="stars">
                                    ★ ★ ★ ★ ★
                                </div>
                                Best rated agency
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-number">98<span>%</span></div>
                            <div className="stat-text">
                                Genuine repeated
                                <br />
                                happy customers.
                            </div>
                        </div>
                        <div className='back-img'>
                            <img src='https://craftohtml.themezaa.com/images/demo-corporate-services-bg-01.png'></img>
                        </div>

                    </div>

                    <div className="approach-right">

                        <span className="tag">CREATIVE APPROACH</span>

                        <h1>
                            Reach your business
                            <br />
                            goals in record time.
                        </h1>

                        <p>
                            Lorem ipsum simply dummy printing typesetting
                            industry lorem Ipsum been the industry's dummy text
                            ever since when an unknown printer took a galley.
                        </p>

                        <div className="award-box">
                            ⭐ Best corporate services agency in world.
                        </div>

                        <div className="review-box">

                            <h2>722+</h2>

                            <div className="review-stars">
                                ★★★★★
                            </div>

                            <p>
                                5 star reviews from
                                <br />
                                our satisfied customers.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            <div className='corporate'>
                <div className='corporate-head'>
                    <div className='creative'>
                        <h1>Corporate services</h1>
                    </div>
                    <div className='create'>
                        <p>CREATIVE APPROACH</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='corporate-card'>
                        <div className='corporate-img'>
                            <img src='https://craftohtml.themezaa.com/images/demo-corporate-services-01.jpg'></img>
                        <div className='tag'>
                            <p>CREATIVITY</p>
                        </div>
                        </div>
                        <div className='corporate-txt'>
                            <div className='icon'>
                                <i class="fa-solid fa-bullseye"></i>
                            </div>
                            <div className='inner-txt'>
                                <h5>Business planning</h5>
                                <p>Lorem ipsum, dolor sit amet <br/> consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className='corporate-btn'>
                            <button>EXPLORE SERVICES</button>
                        </div>
                    </div>
                         <div className='corporate-card'>
                        <div className='corporate-img'>
                            <img src='https://craftohtml.themezaa.com/images/demo-corporate-services-02.jpg'></img>
                         <div className='tag'>
                            <p>DISCOVER</p>
                        </div>
                        </div>
                        <div className='corporate-txt'>
                            <div className='icon'>
                               <i className="fa-solid fa-coins"></i>
                            </div>
                            <div className='inner-txt'>
                                <h5>Market reaserch</h5>
                                <p>Lorem ipsum, dolor sit amet <br/> consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className='corporate-btn'>
                            <button>EXPLORE SERVICES</button>
                        </div>
                    </div>
                         <div className='corporate-card'>
                        <div className='corporate-img'>
                            <img src='https://craftohtml.themezaa.com/images/demo-corporate-services-03.jpg'></img>
                         <div className='tag'>
                            <p>MODERN</p>
                        </div>
                        </div>
                        <div className='corporate-txt'>
                            <div className='icon'>
                              <i class="fa-solid fa-chart-column"></i>
                            </div>
                            <div className='inner-txt'>
                                <h5>Audience analysis</h5>
                                <p>Lorem ipsum, dolor sit amet <br/> consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div className='corporate-btn'>
                            <button>EXPLORE SERVICES</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='chat'>
                <p><i class="fa-solid fa-comment me-2"></i>Let's make something great work together.<a href='/'> Got a project in mind? </a> </p>
            </div>
            <div className='frequent'>
                <div className='fre-left'>
                    <div className='fre-img'>
                        <img src='https://craftohtml.themezaa.com/images/demo-corporate-services-05.png'></img>
                    <div className='cloud-img'>
                        <img src='https://craftohtml.themezaa.com/images/demo-corporate-05.png'></img>
                    </div>
                    <div className='cloud1-img'>
                        <img src='https://craftohtml.themezaa.com/images/demo-corporate-08.png'></img>
                    </div>
                    <div className='msg-img'>
                        <img src='https://craftohtml.themezaa.com/images/demo-corporate-services-04.png'></img>
                    </div>
                    </div>
                </div>
                <div className='fre-right'>
                    <div className='fre-head'>
                        <p>FREQUENTLY ASKED QUESTIONS</p>
                    </div>
                    <h1>What we can do <br/> for you and<br/> company.</h1>
                </div>
            </div>
        </>
    )
}

export default Services