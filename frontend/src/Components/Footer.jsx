import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col footer-brand">
         <img src="https://craftohtml.themezaa.com/images/demo-corporate-logo-black.png"></img>
          <p>
            Gearing your company through
            <br />
            an innovative strategy.
          </p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-solid fa-basketball"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div className="footer-col">
          <h3>Company</h3>

          <a href="/">Who we are</a>

          <div className="service-link">
            <a href="/">Our services</a>
            <span>HOT</span>
          </div>
          <a href="/">Our clients</a>
          <a href="/">Contact us</a>
        </div>


        <div className="footer-col">
          <h3>Services</h3>

          <a href="/">Planning</a>
          <a href="/">Research</a>
          <a href="/">Consulting</a>
          <a href="/">Analysis</a>
        </div>

        <div className="footer-col">
          <h3>Customer</h3>

          <a href="/">Client support</a>
          <a href="/">Help center</a>
          <a href="/">System status</a>
          <a href="/">Feedback</a>
        </div>

        <div className="footer-col newsletter">
          <h3>Subscribe newsletter</h3>

          <p>
            Subscribe our newsletter to get
            <br />
            the latest news and updates!
          </p>

          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <i className="fa-regular fa-envelope"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Crafto is Proudly Powered by <strong>ThemeZaa</strong>
        </p>

        <div className="footer-links">
          <a href="/">Privacy policy</a>
          <a href="/">Terms and conditions</a>
          <a href="/">Copyright</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;