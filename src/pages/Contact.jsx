import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const sectionsRef = useRef([]);
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Initialize map animation
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.classList.add('loaded');
      }, 500);
    }

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Course options
  const courseOptions = [
    'Select a Course',
    'Full Stack Python',
    'Java Development',
    'C / C++ Programming',
    'Mech CAD',
    'SAP SD',
    'SAP FICO',
    'SAP MM',
    'Civil Arch CAD',
    'Data Analysis',
    'Data Science',
    'Other'
  ];

  // Contact information
  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      details: ['123 Tech Street', 'Innovation City, SV 94000'],
      color: '#00B4D8'
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: '#0077B6'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: ['info@avtechinstitute.com', 'admissions@avtechinstitute.com'],
      color: '#0096C7'
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat: 9:00 AM - 3:00 PM'],
      color: '#48CAE4'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9\-\+]{9,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid phone number.'
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your inquiry has been submitted successfully. We will contact you within 24 hours.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });

    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  // Quick response promise data
  const quickResponsePromises = [
    {
      icon: 'fas fa-bolt',
      text: 'Response within 2 hours',
      color: '#00B4D8'
    },
    {
      icon: 'fas fa-user-tie',
      text: 'Expert consultation',
      color: '#0077B6'
    },
    {
      icon: 'fas fa-calendar-check',
      text: 'Free demo session',
      color: '#0096C7'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section 
        className="contact-hero" 
        ref={el => sectionsRef.current[0] = el}
      >
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">
            Get in <span className="highlight">Touch</span>
          </h1>
          <p className="contact-hero-subtitle">
            Connect with us for course inquiries, project collaborations, 
            or to schedule a campus visit.
          </p>
          <div className="quick-response">
            {quickResponsePromises.map((promise, index) => (
              <div 
                className="response-badge" 
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div 
                  className="badge-icon"
                  style={{ backgroundColor: promise.color }}
                >
                  <i className={promise.icon}></i>
                </div>
                <span className="badge-text">{promise.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-hero-visual">
          <div className="contact-icons-animation">
            <i className="fab fa-whatsapp"></i>
            <i className="fas fa-comments"></i>
            <i className="fas fa-headset"></i>
            <i className="fas fa-paper-plane"></i>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section 
        className="contact-info-section" 
        ref={el => sectionsRef.current[1] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              Reach out to us through any of these channels
            </p>
          </div>
          
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div 
                className="contact-info-card" 
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="contact-icon-wrapper"
                  style={{ backgroundColor: info.color }}
                >
                  <i className={info.icon}></i>
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                <div className="contact-info-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="contact-detail">{detail}</p>
                  ))}
                </div>
                <button className="contact-action-btn">
                  {info.title.includes('Visit') ? 'Get Directions' : 
                   info.title.includes('Call') ? 'Call Now' : 
                   info.title.includes('Email') ? 'Send Email' : 'View Schedule'}
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>

          {/* Emergency Contact Banner */}
          <div className="emergency-banner" ref={el => sectionsRef.current[2] = el}>
            <div className="emergency-content">
              <div className="emergency-icon">
                <i className="fas fa-life-ring"></i>
              </div>
              <div className="emergency-text">
                <h3>Need Immediate Assistance?</h3>
                <p>Call our 24/7 helpline for urgent inquiries</p>
              </div>
              <div className="emergency-contact">
                <span className="emergency-number">+1 (555) 911-4567</span>
                <button className="emergency-btn">
                  <i className="fas fa-phone-alt"></i> Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        className="contact-form-section" 
        ref={el => sectionsRef.current[3] = el}
      >
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-subtitle">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            {formStatus.submitted && (
              <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                <i className={`fas ${formStatus.success ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                <p>{formStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <i className="fas fa-user"></i> Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                  <div className="input-line"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <i className="fas fa-envelope"></i> Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                  <div className="input-line"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <i className="fas fa-phone"></i> Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                    required
                  />
                  <div className="input-line"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="course" className="form-label">
                    <i className="fas fa-graduation-cap"></i> Course Interest
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {courseOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="select-arrow">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message" className="form-label">
                    <i className="fas fa-comment"></i> Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell us about your requirements or questions..."
                    rows="5"
                  ></textarea>
                  <div className="textarea-line"></div>
                </div>
              </div>

              <div className="form-footer">
                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                  <div className="btn-shine"></div>
                </button>
                <p className="form-note">
                  <i className="fas fa-info-circle"></i>
                  Fields marked with * are required
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section 
        className="map-section" 
        ref={el => sectionsRef.current[4] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Find Us on Google Maps</h2>
            <p className="section-subtitle">
              Visit our campus or get directions
            </p>
          </div>

          <div className="map-container">
            <div className="map-visual" ref={mapRef}>
              {/* Map Visualization */}
              <div className="map-background">
                <div className="map-grid">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="grid-line"></div>
                  ))}
                </div>
                
                {/* Map Marker */}
                <div className="map-marker">
                  <div className="marker-pin">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="marker-pulse"></div>
                </div>

                {/* Streets */}
                <div className="street horizontal" style={{ top: '30%' }}></div>
                <div className="street horizontal" style={{ top: '70%' }}></div>
                <div className="street vertical" style={{ left: '40%' }}></div>
                <div className="street vertical" style={{ left: '60%' }}></div>
              </div>

              {/* Location Card */}
              <div className="location-card">
                <h3 className="location-title">
                  <i className="fas fa-university"></i> AV Tech Institute
                </h3>
                <div className="location-details">
                  <p><i className="fas fa-map-pin"></i> 123 Tech Street, Innovation City</p>
                  <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                  <p><i className="fas fa-clock"></i> Mon-Fri: 9AM-7PM, Sat: 9AM-3PM</p>
                </div>
                <div className="location-actions">
                  <button className="direction-btn">
                    <i className="fas fa-directions"></i> Get Directions
                  </button>
                  <button className="save-btn">
                    <i className="fas fa-bookmark"></i> Save Location
                  </button>
                </div>
              </div>
            </div>

            {/* Transportation Info */}
            <div className="transport-info">
              <h3>How to Reach Us</h3>
              <div className="transport-options">
                <div className="transport-option">
                  <div className="transport-icon metro">
                    <i className="fas fa-subway"></i>
                  </div>
                  <div className="transport-details">
                    <h4>Metro</h4>
                    <p>Get off at Innovation City Station (Line 2)</p>
                  </div>
                </div>
                <div className="transport-option">
                  <div className="transport-icon bus">
                    <i className="fas fa-bus"></i>
                  </div>
                  <div className="transport-details">
                    <h4>Bus</h4>
                    <p>Routes 101, 205, 307 stop nearby</p>
                  </div>
                </div>
                <div className="transport-option">
                  <div className="transport-icon parking">
                    <i className="fas fa-parking"></i>
                  </div>
                  <div className="transport-details">
                    <h4>Parking</h4>
                    <p>Free parking available on campus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta" ref={el => sectionsRef.current[5] = el}>
        <div className="container">
          <div className="cta-content">
            <h2>Still Have Questions?</h2>
            <p>Schedule a one-on-one consultation with our course advisors</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <i className="fas fa-video"></i> Book Virtual Tour
              </button>
              <button className="cta-btn secondary">
                <i className="fas fa-calendar-alt"></i> Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;