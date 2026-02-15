import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Leadership team data
  const leadershipTeam = [
    {
      id: 1,
      name: 'Prof. Akshay Wable',
      position: 'Founder & CEO',
      experience: '6+ Years in Tech Education',
      imageColor: '#00B4D8',
      description: 'C-DAC',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Prof. Aniket Wable',
      position: 'Academic Director',
      experience: '5+ Years Experience',
      imageColor: '#0077B6',
      description: 'BCA-MCA, Expert in MERN-STACK',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Mr. Vikram Singh',
      position: 'Placement Head',
      experience: '15+ Years in HR',
      imageColor: '#0096C7',
      description: 'Ex-HR Manager at Tech Giants, 5000+ Placements',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Ms. Priya Patel',
      position: 'Technical Director',
      experience: '18+ Years Experience',
      imageColor: '#48CAE4',
      description: 'Full Stack Expert, Corporate Trainer for 50+ Companies',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

// Milestones data - Company launched Nov 2025
const milestones = [
  { year: 'Nov 2025', title: 'Company Founded', description: 'Started operations with a vision to revolutionize tech education' },
  { year: 'Dec 2025', title: 'First Cohort Begins', description: 'Launched with 2 flagship courses and 25 passionate students' },
  { year: 'Jan 2026', title: 'Early Success', description: 'First student project wins local hackathon' },
  { year: 'Feb 2026', title: 'Industry Connect', description: 'Partnered with 5 tech companies for mentorship programs' },
  { year: 'Mar 2026', title: 'Curriculum Expansion', description: 'Added 3 new specialized courses based on market demand' },
  { year: 'Apr 2026', title: 'Community Growth', description: 'Crossed 100 active learners milestone' },
  { year: 'May 2026', title: 'First Placements', description: 'First batch completes training, 80% placement rate achieved' }
];
  // Core values
  const coreValues = [
    { icon: 'fas fa-lightbulb', title: 'Innovation', description: 'Constantly updating curriculum with latest technologies' },
    { icon: 'fas fa-handshake', title: 'Integrity', description: 'Transparent practices and honest communication' },
    { icon: 'fas fa-users', title: 'Community', description: 'Building strong alumni network and industry connections' },
    { icon: 'fas fa-trophy', title: 'Excellence', description: 'Striving for highest standards in education' }
  ];

  return (
    <div className="about">
      {/* Hero Banner */}
      <section 
        className="about-hero" 
        ref={el => sectionsRef.current[0] = el}
      >
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="title-line">About</span>
                <span className="title-line highlight">AV Tech Institute</span>
              </h1>
              <p className="hero-subtitle">
                Empowering Future Technologists Since 2018
              </p>
              <div className="hero-stats">
                {/* <div className="stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Students</span>
                </div> */}
                <div className="stat">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Companies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: About AV Tech */}
      <section 
        className="about-intro" 
        ref={el => sectionsRef.current[1] = el}
      >
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <div className="section-header">
                <h2 className="section-title">About AV Tech</h2>
                <p className="section-subtitle">
                  Where Technology Meets Excellence
                </p>
              </div>
              <div className="intro-text">
                <p>
                  AV Tech Institute is a premier technical education hub founded in 2018 
                  with a vision to bridge the gap between academia and industry. 
                  We specialize in providing cutting-edge technical courses with 
                  hands-on project experience.
                </p>
                <p>
                  Our institute is recognized for its industry-aligned curriculum, 
                  expert faculty, and state-of-the-art infrastructure that prepares 
                  students for successful careers in technology.
                </p>
              </div>
              <div className="mission-vision">
                <div className="mission">
                  <h3><i className="fas fa-bullseye"></i> Our Mission</h3>
                  <p>To empower individuals with industry-relevant technical skills through innovative teaching methodologies and real-world project experience.</p>
                </div>
                <div className="vision">
                  <h3><i className="fas fa-eye"></i> Our Vision</h3>
                  <p>To become the most trusted technical education institute globally, producing technology leaders who drive innovation and digital transformation.</p>
                </div>
              </div>
            </div>
            <div className="intro-visual">
              <div className="logo-display">
                <div className="about-logo-animation">
  <div className="about-logo-circle">
    <img 
      src="/Images/Logo/logo.jpg" 
      alt="Company Logo"
      className="about-logo-image"
    />
  </div>
  <div className="about-ring about-ring-1"></div>
  <div className="about-ring about-ring-2"></div>
  <div className="about-ring about-ring-3"></div>
</div>
                <div className="logo-details">
                  <h3>AV Tech Institute</h3>
                  <p>Future Ready Education Since 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Values */}
      <section 
        className="values-section" 
        ref={el => sectionsRef.current[2] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              Principles that guide everything we do
            </p>
          </div>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div 
                className="value-card" 
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Story */}
      <section 
        className="story-section" 
        ref={el => sectionsRef.current[3] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              From humble beginnings to industry leader
            </p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                key={milestone.year}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-card">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                  <div className="timeline-dot">
                    <div className="dot-inner"></div>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Section 4: Our Leadership */}
      <section 
        className="leadership-section" 
        ref={el => sectionsRef.current[4] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Leadership</h2>
            <p className="section-subtitle">
              Experienced professionals guiding your success
            </p>
          </div>
          <div className="leadership-grid">
            {leadershipTeam.map((member, index) => (
              <div 
                className="leader-card" 
                key={member.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="leader-image" style={{ backgroundColor: member.imageColor }}>
                  <div className="image-placeholder">
                    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="image-overlay">
                    <div className="social-links">
                      <a href={member.social.linkedin} className="social-link">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href={member.social.twitter} className="social-link">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">{member.name}</h3>
                  <p className="leader-position">{member.position}</p>
                  <div className="leader-experience">
                    <i className="fas fa-briefcase"></i>
                    <span>{member.experience}</span>
                  </div>
                  <p className="leader-desc">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Institute Facilities */}
      <section 
        className="facilities-section" 
        ref={el => sectionsRef.current[5] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Facilities</h2>
            <p className="section-subtitle">
              State-of-the-art infrastructure for optimal learning
            </p>
          </div>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">
                <i className="fas fa-desktop"></i>
              </div>
              <h3>Modern Labs</h3>
              <p>Fully equipped computer labs with latest software and hardware</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Digital Library</h3>
              <p>Access to 10,000+ e-books, journals, and research papers</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">
                <i className="fas fa-wifi"></i>
              </div>
              <h3>High-Speed Internet</h3>
              <p>1 Gbps dedicated internet for uninterrupted learning</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>Project Labs</h3>
              <p>Dedicated spaces for team projects and collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="about-cta" 
        ref={el => sectionsRef.current[6] = el}
      >
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Tech Journey?</h2>
            <p>Join 5000+ successful students who transformed their careers with AV Tech</p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <i className="fas fa-calendar-alt"></i> Book Campus Tour
              </button>
              <button className="btn-secondary">
                <i className="fas fa-download"></i> Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;