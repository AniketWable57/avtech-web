import React, { useEffect, useRef, useState } from 'react';
import './Placement.css';

const Placement = () => {
  const sectionsRef = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

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

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Recruiters data
  const recruiters = [
    { id: 1, name: 'TCS', logo: 'T', color: '#004080' },
    { id: 2, name: 'Infosys', logo: 'I', color: '#0073e6' },
    { id: 3, name: 'Wipro', logo: 'W', color: '#1170d9' },
    { id: 4, name: 'Accenture', logo: 'A', color: '#A100FF' },
    { id: 5, name: 'IBM', logo: 'IBM', color: '#054ADA' },
    { id: 6, name: 'Amazon', logo: 'amz', color: '#FF9900' },
    { id: 7, name: 'Microsoft', logo: 'MS', color: '#737373' },
    { id: 8, name: 'Google', logo: 'G', color: '#4285F4' },
    { id: 9, name: 'Cognizant', logo: 'CTS', color: '#0066B3' },
    { id: 10, name: 'Tech Mahindra', logo: 'TM', color: '#89CFF0' },
    { id: 11, name: 'HCL', logo: 'HCL', color: '#0066B3' },
    { id: 12, name: 'Capgemini', logo: 'C', color: '#0070AD' },
  ];

  // Placement process steps
  const placementSteps = [
    {
      id: 1,
      title: 'Profile Assessment',
      description: 'Comprehensive evaluation of skills and career goals',
      icon: 'fas fa-user-check',
      details: [
        'Resume building workshop',
        'Skill gap analysis',
        'Career counseling session',
        'Personal SWOT analysis'
      ]
    },
    {
      id: 2,
      title: 'Skill Enhancement',
      description: 'Targeted training to bridge skill gaps',
      icon: 'fas fa-graduation-cap',
      details: [
        'Technical workshops',
        'Soft skills training',
        'Certification guidance',
        'Project portfolio development'
      ]
    },
    {
      id: 3,
      title: 'Mock Interviews',
      description: 'Realistic interview simulations',
      icon: 'fas fa-comments',
      details: [
        'Technical interviews',
        'HR round simulations',
        'Aptitude test practice',
        'Group discussion sessions'
      ]
    },
    {
      id: 4,
      title: 'Company Placement',
      description: 'Direct placement drives with partners',
      icon: 'fas fa-handshake',
      details: [
        'Campus placement drives',
        'Off-campus opportunities',
        'Internship placements',
        'Job fair participation'
      ]
    },
    {
      id: 5,
      title: 'Post-Placement Support',
      description: 'Continued guidance after placement',
      icon: 'fas fa-headset',
      details: [
        'Onboarding assistance',
        'Performance feedback',
        'Career growth guidance',
        'Alumni networking'
      ]
    }
  ];

  // Placement practices
  const practices = [
    {
      id: 1,
      title: 'Mock Interview Process',
      icon: 'fas fa-video',
      description: 'Comprehensive interview preparation with industry experts',
      features: [
        'One-on-one technical interviews',
        'Panel interview simulations',
        'Video recorded sessions with feedback',
        'Real-time coding assessments'
      ]
    },
    {
      id: 2,
      title: 'Resume Building',
      icon: 'fas fa-file-alt',
      description: 'Professional resume crafting for different job profiles',
      features: [
        'ATS-friendly resume templates',
        'Industry-specific keywords',
        'Achievement-based content',
        'Portfolio website guidance'
      ]
    },
    {
      id: 3,
      title: 'Aptitude Training',
      icon: 'fas fa-brain',
      description: 'Systematic approach to aptitude and reasoning tests',
      features: [
        'Daily practice tests',
        'Time management strategies',
        'Quantitative aptitude focus',
        'Logical reasoning mastery'
      ]
    },
    {
      id: 4,
      title: 'Soft Skills Development',
      icon: 'fas fa-users',
      description: 'Enhancing communication and interpersonal skills',
      features: [
        'Group discussion practice',
        'Presentation skills training',
        'Email etiquette workshops',
        'Professional networking guidance'
      ]
    }
  ];

  // Success stories
  const successStories = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      course: 'Full Stack Python',
      placedAt: 'Amazon',
      package: '₹12 LPA',
      image: 'R',
      quote: 'The mock interviews and project guidance were instrumental in my selection.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      course: 'Data Science',
      placedAt: 'Microsoft',
      package: '₹15 LPA',
      image: 'P',
      quote: 'AV Tech transformed my career with hands-on projects and expert mentorship.'
    },
    {
      id: 3,
      name: 'Amit Patel',
      course: 'Java Development',
      placedAt: 'Google',
      package: '₹18 LPA',
      image: 'A',
      quote: 'The placement cell provided personalized guidance throughout the process.'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      course: 'SAP FICO',
      placedAt: 'Accenture',
      package: '₹10 LPA',
      image: 'S',
      quote: 'Industry-relevant training helped me secure a job even before course completion.'
    }
  ];

  // Stats data
  const placementStats = [
    { label: 'Highest Package', value: '₹28 LPA', icon: 'fas fa-trophy' },
    { label: 'Average Package', value: '₹8.5 LPA', icon: 'fas fa-chart-line' },
    { label: 'Placement Rate', value: '95.2%', icon: 'fas fa-percentage' },
    { label: 'Companies Visited', value: '120+', icon: 'fas fa-building' },
  ];

  return (
    <div className="placement">
      {/* Hero Section */}
      <section 
        className="placement-hero" 
        ref={el => sectionsRef.current[0] = el}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Launch Your</span>
            <span className="title-line highlight">Dream Career</span>
          </h1>
          <p className="hero-subtitle">
            95% Placement Success with Top Tech Companies
          </p>
          <div className="stats-floating">
            {placementStats.map((stat, index) => (
              <div 
                className="stat-card" 
                key={stat.label}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <i className={stat.icon}></i>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="placement-visual">
            <div className="orbit-ring">
              {recruiters.slice(0, 6).map((company, index) => (
                <div 
                  className="orbit-company" 
                  key={company.id}
                  style={{ 
                    transform: `rotate(${index * 60}deg) translateX(150px) rotate(-${index * 60}deg)`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="company-logo" style={{ backgroundColor: company.color }}>
                    {company.logo}
                  </div>
                </div>
              ))}
            </div>
            <div className="center-circle">
              <i className="fas fa-briefcase"></i>
              <span>Placements</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Our Recruiters */}
      <section 
        className="recruiters-section" 
        ref={el => sectionsRef.current[1] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Esteemed Recruiters</h2>
            <p className="section-subtitle">
              Top companies that trust our talent and regularly recruit from AV Tech
            </p>
          </div>
          <div className="recruiters-grid">
            {recruiters.map((company, index) => (
              <div 
                className="company-card" 
                key={company.id}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div 
                  className="company-logo-large" 
                  style={{ backgroundColor: company.color }}
                >
                  <span className="logo-text">{company.logo}</span>
                  <div className="logo-glow"></div>
                </div>
                <h3 className="company-name">{company.name}</h3>
              </div>
            ))}
          </div>
          <div className="stats-banner">
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number" data-target="500">0</div>
                <div className="stat-desc">Students Placed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="120">0</div>
                <div className="stat-desc">Hiring Partners</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="95">0</div>
                <div className="stat-desc">Placement Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="85">0</div>
                <div className="stat-desc">Average Package (LPA)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Placement Process */}
      <section 
        className="process-section" 
        ref={el => sectionsRef.current[2] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Placement Process</h2>
            <p className="section-subtitle">
              A systematic 5-step approach that ensures your successful placement
            </p>
          </div>
          <div className="process-timeline">
            {placementSteps.map((step, index) => (
              <div 
                className={`process-step ${index === activeStep ? 'active' : ''}`} 
                key={step.id}
                onClick={() => setActiveStep(index)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="step-number">{step.id}</div>
                <div className="step-content">
                  <div className="step-icon">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                  <div className="step-details">
                    <ul>
                      {step.details.map((detail, i) => (
                        <li key={i}>
                          <i className="fas fa-check-circle"></i> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="process-visual">
            <div className="process-line">
              {placementSteps.map((step, index) => (
                <div 
                  className={`line-dot ${index <= activeStep ? 'active' : ''}`} 
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                >
                  <span className="dot-tooltip">{step.title}</span>
                </div>
              ))}
            </div>
            <div className="process-progress">
              <div 
                className="progress-fill" 
                style={{ width: `${(activeStep + 1) * 20}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Placement Practices */}
      <section 
        className="practices-section" 
        ref={el => sectionsRef.current[3] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Placement Best Practices</h2>
            <p className="section-subtitle">
              Comprehensive training methodologies that guarantee placement success
            </p>
          </div>
          <div className="practices-grid">
            {practices.map((practice, index) => (
              <div 
                className="practice-card" 
                key={practice.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="practice-header">
                  <div className="practice-icon">
                    <i className={practice.icon}></i>
                  </div>
                  <h3 className="practice-title">{practice.title}</h3>
                </div>
                <p className="practice-desc">{practice.description}</p>
                <ul className="practice-features">
                  {practice.features.map((feature, i) => (
                    <li key={i}>
                      <i className="fas fa-check"></i> {feature}
                    </li>
                  ))}
                </ul>
                <div className="practice-stats">
                  <div className="stat">
                    <i className="fas fa-users"></i>
                    <span>100% Participation</span>
                  </div>
                  <div className="stat">
                    <i className="fas fa-thumbs-up"></i>
                    <span>98% Success Rate</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section 
        className="stories-section" 
        ref={el => sectionsRef.current[4] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Hear from our alumni who transformed their careers with AV Tech
            </p>
          </div>
          <div className="stories-grid">
            {successStories.map((story, index) => (
              <div 
                className="story-card" 
                key={story.id}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="story-header">
                  <div className="student-image">
                    <span>{story.image}</span>
                  </div>
                  <div className="student-info">
                    <h3 className="student-name">{story.name}</h3>
                    <p className="student-course">{story.course}</p>
                  </div>
                  <div className="placement-badge">
                    <i className="fas fa-briefcase"></i>
                  </div>
                </div>
                <div className="story-content">
                  <div className="placement-info">
                    <div className="company">
                      <i className="fas fa-building"></i>
                      <span>{story.placedAt}</span>
                    </div>
                    <div className="package">
                      <i className="fas fa-rupee-sign"></i>
                      <span>{story.package}</span>
                    </div>
                  </div>
                  <p className="student-quote">"{story.quote}"</p>
                </div>
                <div className="story-footer">
                  <div className="achievement-tag">
                    <i className="fas fa-award"></i>
                    <span>Placed in 3 Months</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-carousel">
            <div className="carousel-track">
              {successStories.map((story) => (
                <div className="carousel-item" key={story.id}>
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="testimonial-text">{story.quote}</p>
                  <div className="testimonial-author">
                    <strong>{story.name}</strong> - {story.placedAt} ({story.package})
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="placement-cta" 
        ref={el => sectionsRef.current[5] = el}
      >
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Launch Your Career?</h2>
            <p className="cta-subtitle">
              Join 500+ successful students who transformed their careers with AV Tech
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <i className="fas fa-calendar-check"></i> Schedule Placement Counseling
              </button>
              <button className="btn-outline">
                <i className="fas fa-download"></i> Download Placement Brochure
              </button>
            </div>
            <div className="cta-features">
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Guanteed Interview Calls</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>1-on-1 Mentorship</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Post-Placement Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placement;