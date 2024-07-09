import React from 'react';
import './footer.css';
import logo from '../Assets/footer_logo.png'

const Footer = () => {
    return (
        <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="image">
        <img src={logo} alt="Online Shop" className="footer-logo" />
      </div>
      <div className="sub">
        <h2 className="text">Subscribe now to receive weekly mail to enjoy best offers on our products.</h2>
        <div className="actions">
          <button className="subscribe">Subscribe</button>
          <input type="text" placeholder="Enter your mail here" className="subInput" />
        </div>
      </div>
    </div>

    <div className="tings">
      <ul className="footer-nav">
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Advertise</a></li>
        <li><a href="#">Privacy & Terms</a></li>
      </ul>
      <div className="copyright">
        <p>&copy; 2024 online shop</p>
      </div>
    </div>
  </div>
</footer>

    );
};

export default Footer;
