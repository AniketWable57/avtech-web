import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Company Info */}
          <div className="footer-section company-info">
            <div className="footer-logo">
              <span className="footer-logo-text">AV</span>
              <div className="footer-logo-details">
                <h3 className="footer-logo-main">Tech Institute</h3>
                <p className="footer-tagline">Future Ready Education</p>
              </div>
            </div>
            <p className="footer-description">
              Empowering students with industry-relevant skills through 
              cutting-edge technical courses, live projects, and internship 
              opportunities.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/courses" className="footer-link">All Courses</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/placement" className="footer-link">Placements</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Course Categories */}
          <div className="footer-section course-categories">
            <h3 className="footer-title">Courses</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Full Stack Python</a></li>
              <li><a href="#" className="footer-link">Java Development</a></li>
              <li><a href="#" className="footer-link">C / C++ Programming</a></li>
              <li><a href="#" className="footer-link">Mech CAD</a></li>
              <li><a href="#" className="footer-link">SAP Modules</a></li>
              <li><a href="#" className="footer-link">Civil Arch CAD</a></li>
              <li><a href="#" className="footer-link">Data Science</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <div>
                  <p className="contact-text">123 Tech Street, Innovation City</p>
                  <p className="contact-text">Silicon Valley, SV 94000</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone contact-icon"></i>
                <p className="contact-text">+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope contact-icon"></i>
                <p className="contact-text">info@avtechinstitute.com</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock contact-icon"></i>
                <div>
                  <p className="contact-text">Mon - Fri: 9:00 AM - 7:00 PM</p>
                  <p className="contact-text">Sat: 9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} AV Tech Institute. All Rights Reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#" className="bottom-link">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#" className="bottom-link">Sitemap</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;