import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCourse, setExpandedCourse] = useState(null);
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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Course categories
  const categories = [
    { id: 'all', name: 'All Courses', icon: 'fas fa-graduation-cap' },
    { id: 'programming', name: 'Programming', icon: 'fas fa-code' },
    { id: 'design', name: 'Design', icon: 'fas fa-pencil-ruler' },
    { id: 'sap', name: 'SAP Modules', icon: 'fas fa-chart-line' },
    { id: 'data', name: 'Data Science', icon: 'fas fa-database' }
  ];

  // Detailed courses data
  const coursesData = [
    {
      id: 1,
      title: 'Full Stack Python',
      category: 'programming',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      projects: 5,
      internship: '3 Months',
      description: 'Master web development with Django and Flask frameworks',
      detailedDescription: `Learn Python from basics to advanced level including Django REST framework, Flask microservices, frontend integration, database management, and deployment. This course includes real-world projects and internship opportunities.`,
      features: [
        'Python Fundamentals & OOP',
        'Django Framework & REST APIs',
        'Flask Microservices',
        'Database Design (PostgreSQL)',
        'Frontend Integration (React)',
        'Deployment & DevOps',
        'Live Project Development'
      ],
      syllabus: ['Module 1: Python Basics', 'Module 2: Web Development', 'Module 3: Databases', 'Module 4: APIs', 'Module 5: Deployment'],
      icon: 'fab fa-python',
      color: '#3776AB'
    },
    {
      id: 2,
      title: 'Java Development',
      category: 'programming',
      duration: '5 Months',
      level: 'Intermediate',
      projects: 4,
      internship: '2 Months',
      description: 'Enterprise Java development with Spring Boot',
      detailedDescription: `Master Java programming with a focus on enterprise applications using Spring Boot, Hibernate, Microservices architecture, and cloud deployment.`,
      features: [
        'Core Java & Advanced Concepts',
        'Spring Boot Framework',
        'Hibernate ORM',
        'Microservices Architecture',
        'RESTful Web Services',
        'Cloud Deployment (AWS)',
        'Agile Methodology'
      ],
      syllabus: ['Module 1: Java Core', 'Module 2: Spring Framework', 'Module 3: Database', 'Module 4: Microservices'],
      icon: 'fab fa-java',
      color: '#007396'
    },
    {
      id: 3,
      title: 'C / C++ Programming',
      category: 'programming',
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      projects: 6,
      internship: '1 Month',
      description: 'System programming and performance optimization',
      detailedDescription: `Learn C and C++ programming for system-level development, game development, and high-performance applications with hands-on projects.`,
      features: [
        'C Programming Fundamentals',
        'C++ OOP Concepts',
        'Data Structures & Algorithms',
        'Memory Management',
        'System Programming',
        'Game Development Basics',
        'Performance Optimization'
      ],
      syllabus: ['Module 1: C Programming', 'Module 2: C++ OOP', 'Module 3: DSA', 'Module 4: Projects'],
      icon: 'fas fa-cogs',
      color: '#00599C'
    },
    {
      id: 4,
      title: 'Mech CAD',
      category: 'design',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      projects: 8,
      internship: '2 Months',
      description: 'AutoCAD, SolidWorks, and mechanical design',
      detailedDescription: `Comprehensive mechanical CAD training covering 2D drafting, 3D modeling, simulation, and manufacturing drawings using industry-standard software.`,
      features: [
        'AutoCAD 2D & 3D',
        'SolidWorks Modeling',
        'CATIA Basics',
        'Engineering Drawings',
        'Assembly Design',
        'Simulation & Analysis',
        'Manufacturing Drawings'
      ],
      syllabus: ['Module 1: AutoCAD', 'Module 2: SolidWorks', 'Module 3: 3D Modeling', 'Module 4: Projects'],
      icon: 'fas fa-cube',
      color: '#D35400'
    },
    {
      id: 5,
      title: 'SAP SD (Sales & Distribution)',
      category: 'sap',
      duration: '2.5 Months',
      level: 'Intermediate',
      projects: 3,
      internship: '2 Months',
      description: 'Sales processes, billing, and shipping configuration',
      detailedDescription: `Master SAP Sales & Distribution module with focus on sales processes, shipping, billing, credit management, and integration with other modules.`,
      features: [
        'Sales Order Processing',
        'Shipping & Transportation',
        'Billing & Invoicing',
        'Credit Management',
        'Pricing Procedures',
        'Output Determination',
        'Integration with MM/FICO'
      ],
      syllabus: ['Module 1: SD Basics', 'Module 2: Sales Processes', 'Module 3: Shipping & Billing'],
      icon: 'fas fa-shopping-cart',
      color: '#0F828C'
    },
    {
      id: 6,
      title: 'SAP FICO (Finance & Controlling)',
      category: 'sap',
      duration: '3 Months',
      level: 'Intermediate',
      projects: 4,
      internship: '2 Months',
      description: 'Financial accounting and management reporting',
      detailedDescription: `Comprehensive SAP FICO training covering General Ledger, Accounts Payable/Receivable, Asset Accounting, Cost Center Accounting, and Profit Center Accounting.`,
      features: [
        'General Ledger Accounting',
        'Accounts Payable/Receivable',
        'Asset Accounting',
        'Cost Center Accounting',
        'Profit Center Accounting',
        'Internal Orders',
        'Financial Reporting'
      ],
      syllabus: ['Module 1: FI Basics', 'Module 2: CO Modules', 'Module 3: Integration'],
      icon: 'fas fa-chart-pie',
      color: '#0F828C'
    },
    {
      id: 7,
      title: 'SAP MM (Materials Management)',
      category: 'sap',
      duration: '2.5 Months',
      level: 'Intermediate',
      projects: 3,
      internship: '2 Months',
      description: 'Procurement and inventory management',
      detailedDescription: `Learn SAP Materials Management module including procurement processes, inventory management, invoice verification, and material valuation.`,
      features: [
        'Procurement Processes',
        'Purchase Requisition to PO',
        'Inventory Management',
        'Invoice Verification',
        'Material Valuation',
        'MRP (Material Requirements Planning)',
        'Integration with SD/PP'
      ],
      syllabus: ['Module 1: MM Basics', 'Module 2: Procurement', 'Module 3: Inventory'],
      icon: 'fas fa-boxes',
      color: '#0F828C'
    },
    {
      id: 8,
      title: 'Civil Arch CAD',
      category: 'design',
      duration: '4 Months',
      level: 'Beginner to Advanced',
      projects: 6,
      internship: '3 Months',
      description: 'AutoCAD Civil 3D and architectural design',
      detailedDescription: `Specialized training in civil engineering and architectural design using AutoCAD Civil 3D, Revit, and other industry-standard tools.`,
      features: [
        'AutoCAD Civil 3D',
        'Revit Architecture',
        'Building Information Modeling',
        'Structural Design',
        'Site Planning',
        '3D Visualization',
        'Construction Documentation'
      ],
      syllabus: ['Module 1: Civil 3D', 'Module 2: Revit', 'Module 3: BIM', 'Module 4: Projects'],
      icon: 'fas fa-building',
      color: '#27AE60'
    },
    {
      id: 9,
      title: 'Data Analysis',
      category: 'data',
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      projects: 5,
      internship: '2 Months',
      description: 'Python, R, SQL, and advanced analytics',
      detailedDescription: `Comprehensive data analysis training covering statistical analysis, data visualization, database management, and business intelligence tools.`,
      features: [
        'Statistical Analysis',
        'Data Visualization',
        'SQL Database Management',
        'Python/R Programming',
        'Excel Advanced Analytics',
        'Tableau/Power BI',
        'Business Intelligence'
      ],
      syllabus: ['Module 1: Statistics', 'Module 2: Visualization', 'Module 3: Tools', 'Module 4: Projects'],
      icon: 'fas fa-chart-bar',
      color: '#FF6B6B'
    },
    {
      id: 10,
      title: 'Data Science',
      category: 'data',
      duration: '6 Months',
      level: 'Intermediate to Advanced',
      projects: 6,
      internship: '3 Months',
      description: 'Machine Learning & AI with real-world projects',
      detailedDescription: `Advanced data science course covering machine learning algorithms, deep learning, natural language processing, and big data technologies.`,
      features: [
        'Machine Learning Algorithms',
        'Deep Learning (TensorFlow/PyTorch)',
        'Natural Language Processing',
        'Big Data Technologies',
        'Data Engineering',
        'Model Deployment',
        'Cloud Platforms (AWS/GCP)'
      ],
      syllabus: ['Module 1: ML Basics', 'Module 2: Deep Learning', 'Module 3: NLP', 'Module 4: Big Data'],
      icon: 'fas fa-brain',
      color: '#9B59B6'
    }
  ];

  // Filter courses by category
  const filteredCourses = activeCategory === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeCategory);

  // Toggle course details
  const toggleCourseDetails = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  // Live project examples
  const liveProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      tech: 'Python, Django, React',
      description: 'Full-featured online shopping platform'
    },
    {
      id: 2,
      title: 'Inventory Management',
      tech: 'Java, Spring Boot, MySQL',
      description: 'Enterprise inventory tracking system'
    },
    {
      id: 3,
      title: 'CAD Design Project',
      tech: 'AutoCAD, SolidWorks',
      description: 'Mechanical component design'
    },
    {
      id: 4,
      title: 'Sales Dashboard',
      tech: 'SAP SD, ABAP',
      description: 'Real-time sales analytics'
    }
  ];

  return (
    <div className="courses-page">
      {/* Hero Banner */}
      <section 
        className="courses-hero" 
        ref={el => sectionsRef.current[0] = el}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-line">Technical</span>
              <span className="hero-line highlight">Courses</span>
            </h1>
            <p className="hero-subtitle">
              Industry-relevant courses with live projects, internships, and placement assistance
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Courses</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Live Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Practical</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Course Categories */}
      <section 
        className="categories-section" 
        ref={el => sectionsRef.current[1] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Course Categories</h2>
            <p className="section-subtitle">
              Browse courses by category to find your perfect learning path
            </p>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <button
                key={category.id}
                className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3 className="category-name">{category.name}</h3>
                <div className="category-count">
                  {category.id === 'all' 
                    ? coursesData.length 
                    : coursesData.filter(c => c.category === category.id).length} Courses
                </div>
                <div className="category-indicator"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section 
        className="courses-listing" 
        ref={el => sectionsRef.current[2] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {activeCategory === 'all' 
                ? 'All Courses' 
                : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="section-subtitle">
              {filteredCourses.length} courses available · Click on any course for detailed information
            </p>
          </div>

          <div className="courses-list">
            {filteredCourses.map((course, index) => (
              <div 
                key={course.id}
                className={`course-item ${expandedCourse === course.id ? 'expanded' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="course-summary"
                  onClick={() => toggleCourseDetails(course.id)}
                >
                  <div className="course-header">
                    <div className="course-icon" style={{ backgroundColor: course.color }}>
                      <i className={course.icon}></i>
                    </div>
                    <div className="course-title-section">
                      <h3 className="course-name">{course.title}</h3>
                      <div className="course-tags">
                        <span className="tag">{course.category.toUpperCase()}</span>
                        <span className="tag">{course.level}</span>
                      </div>
                    </div>
                    <div className="course-meta">
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{course.duration}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-project-diagram"></i>
                        <span>{course.projects} Projects</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-briefcase"></i>
                        <span>{course.internship} Internship</span>
                      </div>
                    </div>
                  </div>
                  <div className="course-description">
                    <p>{course.description}</p>
                    <button className="expand-btn">
                      <i className={`fas fa-chevron-${expandedCourse === course.id ? 'up' : 'down'}`}></i>
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedCourse === course.id && (
                  <div className="course-details">
                    <div className="details-grid">
                      <div className="details-section">
                        <h4><i className="fas fa-info-circle"></i> Course Overview</h4>
                        <p>{course.detailedDescription}</p>
                      </div>
                      
                      <div className="details-section">
                        <h4><i className="fas fa-star"></i> Key Features</h4>
                        <ul className="features-list">
                          {course.features.map((feature, idx) => (
                            <li key={idx}><i className="fas fa-check"></i> {feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-section">
                        <h4><i className="fas fa-book"></i> Syllabus</h4>
                        <div className="syllabus-timeline">
                          {course.syllabus.map((module, idx) => (
                            <div key={idx} className="timeline-item">
                              <div className="timeline-marker"></div>
                              <div className="timeline-content">
                                <h5>Week {idx + 1}</h5>
                                <p>{module}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="details-section">
                        <h4><i className="fas fa-chart-line"></i> Career Path</h4>
                        <div className="career-roles">
                          <span className="role-tag">Software Developer</span>
                          <span className="role-tag">Technical Lead</span>
                          <span className="role-tag">Project Manager</span>
                          <span className="role-tag">Consultant</span>
                        </div>
                        <div className="enrollment-section">
                          <button className="enroll-btn">
                            <i className="fas fa-user-plus"></i> Enroll Now
                          </button>
                          <button className="brochure-btn">
                            <i className="fas fa-download"></i> Download Brochure
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Projects Section */}
      <section 
        className="projects-section" 
        ref={el => sectionsRef.current[3] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Live Project Examples</h2>
            <p className="section-subtitle">
              Real-world projects you'll work on during the course
            </p>
          </div>
          <div className="projects-grid">
            {liveProjects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="project-number">0{project.id}</div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  <i className="fas fa-code"></i>
                  <span>{project.tech}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-features">
                  <span><i className="fas fa-check"></i> Real Client</span>
                  <span><i className="fas fa-check"></i> Industry Standards</span>
                  <span><i className="fas fa-check"></i> Deployment Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Timeline */}
      <section 
        className="internship-section" 
        ref={el => sectionsRef.current[4] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Internship & Placement Timeline</h2>
            <p className="section-subtitle">
              Our structured approach to ensure your career success
            </p>
          </div>
          <div className="timeline">
            {[
              { month: 'Month 1-2', title: 'Core Learning', desc: 'Fundamental concepts and hands-on practice' },
              { month: 'Month 3-4', title: 'Project Work', desc: 'Real-world project development' },
              { month: 'Month 5', title: 'Internship', desc: 'Industry internship with partner companies' },
              { month: 'Month 6', title: 'Placement', desc: 'Interview preparation and job placement' }
            ].map((step, index) => (
              <div 
                key={index}
                className="timeline-step"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="step-circle">
                  <span className="step-number">{index + 1}</span>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <div className="step-month">{step.month}</div>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section 
        className="comparison-section" 
        ref={el => sectionsRef.current[5] = el}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Course Comparison</h2>
            <p className="section-subtitle">
              Compare our most popular courses to choose the right one for you
            </p>
          </div>
          <div className="comparison-table">
            <div className="table-header">
              <div className="table-cell feature">Feature</div>
              <div className="table-cell">Full Stack Python</div>
              <div className="table-cell">Java Development</div>
              <div className="table-cell">Data Science</div>
            </div>
            <div className="table-row">
              <div className="table-cell feature">Duration</div>
              <div className="table-cell">6 Months</div>
              <div className="table-cell">5 Months</div>
              <div className="table-cell">6 Months</div>
            </div>
            <div className="table-row">
              <div className="table-cell feature">Projects</div>
              <div className="table-cell">5</div>
              <div className="table-cell">4</div>
              <div className="table-cell">6</div>
            </div>
            <div className="table-row">
              <div className="table-cell feature">Internship</div>
              <div className="table-cell">3 Months</div>
              <div className="table-cell">2 Months</div>
              <div className="table-cell">3 Months</div>
            </div>
            <div className="table-row">
              <div className="table-cell feature">Placement Assistance</div>
              <div className="table-cell"><i className="fas fa-check"></i></div>
              <div className="table-cell"><i className="fas fa-check"></i></div>
              <div className="table-cell"><i className="fas fa-check"></i></div>
            </div>
          </div>
          <div className="cta-section">
            <Link to="/contact" className="cta-button">
              <i className="fas fa-comments"></i> Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;