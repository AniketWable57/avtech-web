import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  // References for scroll animations
  const sectionsRef = useRef([]);

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

  // Course data with actual image paths
  const courses = [
    {
      id: 1,
      title: 'Full Stack Python',
      image: '/Images/Courses/python.png',
      description: 'Master Django, Flask, and modern Python frameworks',
      technologies: ['Python', 'Django', 'React', 'PostgreSQL'],
      duration: '6 Months',
      projects: '10+'
    },
    {
      id: 2,
      title: 'Java Development',
      image: '/Images/Courses/java.png',
      description: 'Enterprise Java with Spring Boot & Microservices',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'Hibernate'],
      duration: '5 Months',
      projects: '8+'
    },
    {
      id: 3,
      title: 'C / C++ Programming',
      image: '/Images/Courses/c++.png',
      description: 'System programming and performance optimization',
      technologies: ['C', 'C++', 'Data Structures', 'Algorithms'],
      duration: '4 Months',
      projects: '12+'
    },
    {
      id: 4,
      title: 'Mech CAD',
      image: '/Images/Courses/mech-cad.png',
      description: 'AutoCAD, SolidWorks, and mechanical design',
      technologies: ['AutoCAD', 'SolidWorks', '3D Modeling', 'Simulation'],
      duration: '3 Months',
      projects: '15+'
    },
    {
      id: 5,
      title: 'SAP Modules',
      image: '/Images/Courses/sap.png',
      description: 'SD, FICO, MM with real-time project experience',
      technologies: ['SAP SD', 'SAP FICO', 'SAP MM', 'ERP'],
      duration: '4 Months',
      projects: '6+'
    },
    {
      id: 6,
      title: 'Civil Arch CAD',
      image: '/Images/Courses/civil-cad.png',
      description: 'AutoCAD Civil 3D & architectural design',
      technologies: ['AutoCAD', 'Revit', 'Civil 3D', 'BIM'],
      duration: '3 Months',
      projects: '10+'
    },
    {
      id: 7,
      title: 'Data Analysis',
      image: '/Images/Courses/data-analysis.png',
      description: 'Python, R, SQL, and advanced analytics',
      technologies: ['Python', 'SQL', 'Excel', 'Tableau'],
      duration: '5 Months',
      projects: '9+'
    },
    {
      id: 8,
      title: 'Data Science',
      image: '/Images/Courses/data-science.png',
      description: 'Machine Learning & AI with real-world projects',
      technologies: ['Python', 'ML', 'AI', 'Deep Learning'],
      duration: '6 Months',
      projects: '8+'
    }
  ];

  // Features data
  const features = [
    {
      number: '500+',
      title: 'Students Trained',
      description: 'Successfully placed in top companies'
    },
    {
      number: '50+',
      title: 'Live Projects',
      description: 'Real-world industry experience'
    },
    {
      number: '40+',
      title: 'Industry Experts',
      description: 'Years of professional experience'
    },
    {
      number: '95%',
      title: 'Placement Rate',
      description: 'Highest in the region'
    }
  ];

  // Gallery images
  const galleryImages = [
    { 
      id: 1, 
      alt: 'Classroom',
      image: '/Images/Gallery/1.jpg'
    },
    { 
      id: 2, 
      alt: 'Lab Session',
      image: '/Images/Gallery/2.jpg'
    },
    { 
      id: 3, 
      alt: 'Project Work',
      image: '/Images/Gallery/3.jpg'
    },
    { 
      id: 4, 
      alt: 'Industry Visit',
      image: '/Images/Gallery/4.jpg'
    },
    { 
      id: 5, 
      alt: 'Workshop',
      image: '/Images/Gallery/5.jpg'
    },
    { 
      id: 6, 
      alt: 'Campus',
      image: '/Images/Gallery/logo.jpg'
    }
  ];

  // Fallback colors if images don't load
  const fallbackColors = {
    'python.png': '#3776AB',
    'java.png': '#007396',
    'cpp.png': '#00599C',
    'mech-cad.png': '#0696D7',
    'sap.png': '#0095DA',
    'civil-cad.png': '#8B4513',
    'data-analysis.png': '#FF6B35',
    'data-science.png': '#7755CC'
  };

  // Handle image loading errors
  const handleImageError = (e, imageName) => {
    e.target.style.display = 'none';
    const container = e.target.parentElement;
    const color = fallbackColors[imageName] || '#00B4D8';
    container.style.background = `linear-gradient(135deg, ${color}, ${color}80)`;
    container.innerHTML = `
      <div class="course-fallback">
        <span>${imageName.split('.')[0].replace('-', ' ').toUpperCase()}</span>
      </div>
    `;
  };

  return (
    <div className="home">
      {/* Section 1: Hero */}
      <section 
        className="hero-section" 
        ref={el => sectionsRef.current[0] = el}
      >
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line">Master</span>
              <span className="title-line highlight">Future Technologies</span>
            </h1>
            <p className="hero-subtitle">
              Industry-Ready Courses with Live Projects & Internships
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                <i className="fas fa-book-open"></i> View Courses
              </button>
              <button className="btn-secondary">
                <i className="fas fa-calendar-check"></i> Book Consultation
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-icons">
              <i className="fab fa-python"></i>
              <i className="fab fa-java"></i>
              <i className="fas fa-database"></i>
              <i className="fas fa-robot"></i>
              <i className="fab fa-react"></i>
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Section 2: Courses We Provide */}
      <section 
        className="courses-section" 
        ref={el => sectionsRef.current[1] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Courses We Provide</h2>
            <p className="section-subtitle">
              Comprehensive technical courses designed for industry requirements
            </p>
          </div>
          <div className="courses-grid">
            {courses.map((course, index) => {
              const imageName = course.image.split('/').pop();
              return (
                <div 
                  className="course-card" 
                  key={course.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="course-image-container">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="course-image"
                      onError={(e) => handleImageError(e, imageName)}
                      loading="lazy"
                    />
                    <div className="course-badge">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="course-duration">
                      <i className="fas fa-clock"></i>
                      {course.duration}
                    </div>
                  </div>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-desc">{course.description}</p>
                  <div className="course-technologies">
                    {course.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="course-meta">
                    <div className="meta-item">
                      <i className="fas fa-project-diagram"></i>
                      <span>{course.projects} Projects</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-user-tie"></i>
                      <span>Internship</span>
                    </div>
                  </div>
                  <div className="course-footer">
                    <div className="course-tags">
                      <span className="tag">Live Projects</span>
                      <span className="tag">Certified</span>
                    </div>
                    <button className="course-btn">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="section-cta">
            <button className="btn-outline">
              <i className="fas fa-arrow-right"></i> View All Courses
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Why AV Tech? */}
      <section 
        className="why-section" 
        ref={el => sectionsRef.current[2] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose AV Tech?</h2>
            <p className="section-subtitle">
              The reasons that make us the preferred choice for technical education
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                className="feature-card" 
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="feature-number">
                  <span className="number">{feature.number}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="why-content">
            <div className="why-text">
              <h3>Transform Your Career</h3>
              <p>
                At AV Tech Institute, we bridge the gap between academic learning 
                and industry requirements. Our courses are constantly updated to 
                match the latest technological trends and industry demands.
              </p>
              <ul className="why-list">
                <li><i className="fas fa-check-circle"></i> Industry-certified curriculum</li>
                <li><i className="fas fa-check-circle"></i> Hands-on project experience</li>
                <li><i className="fas fa-check-circle"></i> One-on-one mentorship</li>
                <li><i className="fas fa-check-circle"></i> Placement assistance</li>
              </ul>
            </div>
           <div className="why-visual">
  <div className="visual-element">
    <div className="circle-ring"></div>
    <div className="inner-circle">
      <div className="logo-background">
        <img 
          src="/Images/Logo/logo.jpg" 
          alt="AV Tech Institute Logo" 
          className="centered-logo"
        />
       
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Vision and Motivation */}
      <section 
        className="vision-section" 
        ref={el => sectionsRef.current[3] = el}
      >
        <div className="container">
          <div className="vision-content">
            <div className="vision-text">
              <h2 className="section-title">Our Vision & Motivation</h2>
              <p className="vision-statement">
                To create a world where quality technical education is accessible 
                to everyone, empowering individuals to build successful careers 
                in technology and contribute to digital transformation.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">2018</div>
                  <div className="stat-label">Founded</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Industry Partners</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
              </div>
              <div className="progress-bars">
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Student Satisfaction</span>
                    <span>98%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Course Completion</span>
                    <span>92%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Project Success</span>
                    <span>96%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vision-visual">
              <div className="tech-visualization">
                <div className="node main-node">
                  <i className="fas fa-lightbulb"></i>
                  <span className="node-label">Innovation</span>
                </div>
                <div className="node">
                  <i className="fas fa-users"></i>
                  <span className="node-label">Community</span>
                </div>
                <div className="node">
                  <i className="fas fa-rocket"></i>
                  <span className="node-label">Growth</span>
                </div>
                <div className="node">
                  <i className="fas fa-award"></i>
                  <span className="node-label">Excellence</span>
                </div>
                <div className="connector"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Gallery */}
      <section 
        className="gallery-section" 
        ref={el => sectionsRef.current[4] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Gallery</h2>
            <p className="section-subtitle">
              Experience the AV Tech learning environment
            </p>
          </div>
          <div className="gallery-container">
            <div className="gallery-track">
              {galleryImages.map((image, index) => (
                <div 
                  className="gallery-item" 
                  key={image.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="gallery-image">
                    <img 
                      src={image.image}
                      alt={image.alt}
                      className="gallery-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="image-placeholder">
                            <i className="fas fa-image"></i>
                            <span>${image.alt}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="gallery-overlay">
                    <button className="view-btn">
                      <i className="fas fa-expand"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-nav">
            <button className="nav-btn prev-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-btn next-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;