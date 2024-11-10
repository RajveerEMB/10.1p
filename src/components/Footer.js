import React from 'react';
import facebookIcon from '../images/facebook.png';
import twitterIcon from '../images/twitter.png';
import instagramIcon from '../images/instagram.png';
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Questions</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Tutorials</a></li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3>Stay connected</h3>
          <div className="social-icons">
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>DEV@Deakin 2022</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Code of Conduct</a>
      </div>
    </footer>
  );
};

export default Footer;
