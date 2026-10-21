import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import studentsImg from '../assets/images/students.jpg';
import teachersImg from '../assets/images/teachers.jpg';
import classroomImg from '../assets/images/classroom.jpg';
import projectImg from '../assets/images/project.jpg';
import schoolLogo from '../assets/logos/hero.jpg';
import { useAuth } from '../context/AuthContext';
import '../styles/main.css';
import '../App.css';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');

  // Slideshow State
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setFading(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFading(false);
        setPrevSlide(null);
      }, 1000); // cross-fade duration
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  return (
    <div className="sms-viewport">

      {/* ── 1. SLIDESHOW BACKGROUND ── */}
      <div className="sms-bg-container">
        {prevSlide !== null && (
          <div
            className="sms-bg-slide sms-bg-slide--out"
            style={{ backgroundImage: `url(${slides[prevSlide]})` }}
          />
        )}
        <div
          className={`sms-bg-slide ${fading ? 'sms-bg-slide--fade' : 'sms-bg-slide--visible'}`}
          style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        />
        <div className="sms-bg-overlay" />
        <div className="sms-bg-orb orb-1" />
        <div className="sms-bg-orb orb-2" />
      </div>

      {/* ── 2. NAVIGATION BAR ── */}
      <header className="sms-navbar">
        <div className="sms-nav-container">
          <div className="sms-brand" onClick={() => setCurrentPage('home')}>
            <img src={schoolLogo} alt="Bright Future School Logo" className="sms-logo-img" />
            <span className="sms-brand-text">Bright Future School & College</span>
          </div>

          <nav className="sms-menu-links">
            {[
              { key: 'home', label: 'Home' },
              { key: 'dashboard', label: 'Student Info' },
              { key: 'about', label: 'About' },
              { key: 'contact', label: 'Contact' },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`sms-menu-item${currentPage === key ? ' active' : ''}`}
                onClick={() => setCurrentPage(key)}
              >
                {label}
              </button>
            ))}
            <Link
              to={isAuthenticated ? "/dashboard" : "/signin"}
              className="sms-btn-signin"
            >
              {isAuthenticated ? "Go to Dashboard" : "Sign In"}
            </Link>
          </nav>
        </div>

        {/* Slide indicator dots */}
        <div className="sms-slide-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`sms-dot${i === currentSlide ? ' active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </header>

      {/* ── 3. PAGE CONTENT ── */}
      <main className="sms-content-wrapper">

        {/* HOME SECTION */}
        {currentPage === 'home' && (
          <div className="sms-home-layout">
            <div className="sms-glass-card sms-hero-split">
              {/* Left Column: Hero Text */}
              <div className="sms-hero-text">
                <span className="sms-hero-pill">🎓 Bright Future Portal</span>
                <h1>School Management System</h1>
                <p>
                  Welcome to Bright Future School & College. Track student records,
                  academic progress, and campus activities with modern real-time performance.
                </p>
                <div className="sms-cta-group">
                  <Link
                    to={isAuthenticated ? "/dashboard" : "/signin"}
                    className="sms-btn-submit sms-btn-cta text-center"
                  >
                    {isAuthenticated ? "Open Dashboard" : "Admin & Student Login"}
                  </Link>
                  <button
                    className="sms-menu-item sms-btn-outline"
                    onClick={() => setCurrentPage('about')}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Column: Foreground Interactive Slideshow */}
              <div className="sms-hero-showcase">
                <div className="sms-showcase-frame">
                  <img
                    src={slides[currentSlide]}
                    alt={`Campus Slide ${currentSlide + 1}`}
                    className="sms-showcase-img"
                  />
                  <div className="sms-showcase-caption-bar">
                    <span className="sms-showcase-badge">Campus Spotlight</span>
                    <p>
                      {currentSlide === 0 && 'Modern Academic Campus & Facilities'}
                      {currentSlide === 1 && 'Collaborative Learning & Study Centers'}
                      {currentSlide === 2 && 'Student Engagement & Discovery'}
                    </p>
                  </div>
                  <button
                    className="sms-showcase-arrow prev"
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>
                  <button
                    className="sms-showcase-arrow next"
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    aria-label="Next slide"
                  >
                    ›
                  </button>
                </div>

                <div className="sms-showcase-thumbs">
                  {slides.map((slide, i) => (
                    <button
                      key={i}
                      className={`sms-thumb-btn ${i === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Select slide ${i + 1}`}
                    >
                      <img src={slide} alt={`Thumbnail ${i + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Campus Facilities & Community Gallery in Foreground */}
            <div className="sms-gallery-block">
              <div className="sms-gallery-header">
                <h2>Campus Facilities & Community</h2>
                <p>Explore our academic environment, smart classrooms, and everyday student life</p>
              </div>

              <div className="sms-gallery-grid">
                <div className="sms-gallery-card">
                  <div className="sms-card-img-box">
                    <img src={studentsImg} alt="Students Community" />
                  </div>
                  <div className="sms-card-body">
                    <h3>Student Community</h3>
                    <p>Enabling students to collaborate, build lifelong friendships, and achieve academic excellence.</p>
                  </div>
                </div>

                <div className="sms-gallery-card">
                  <div className="sms-card-img-box">
                    <img src={teachersImg} alt="Dedicated Teachers" />
                  </div>
                  <div className="sms-card-body">
                    <h3>Dedicated Faculty</h3>
                    <p>Experienced educators and mentors guiding students every step toward future success.</p>
                  </div>
                </div>

                <div className="sms-gallery-card">
                  <div className="sms-card-img-box">
                    <img src={classroomImg} alt="Smart Classroom" />
                  </div>
                  <div className="sms-card-body">
                    <h3>Smart Classrooms</h3>
                    <p>High-tech, interactive learning environments equipped with modern digital tools.</p>
                  </div>
                </div>

                <div className="sms-gallery-card">
                  <div className="sms-card-img-box">
                    <img src={projectImg} alt="Innovation and Projects" />
                  </div>
                  <div className="sms-card-body">
                    <h3>Innovation & Projects</h3>
                    <p>Fostering practical hands-on experiments, scientific inquiry, and tech development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STUDENT INFO / DASHBOARD PREVIEW */}
        {currentPage === 'dashboard' && (
          <div className="sms-glass-card">
            <div className="sms-info-header">
              <h2>Student Record Profile</h2>
            </div>
            <div className="sms-profile-header-card">
              <img src={studentsImg} alt="Student Avatar" className="sms-profile-avatar" />
              <div>
                <h3 className="sms-profile-name">Habib Muhammed</h3>
                <span className="sms-profile-id">ID: BFSC-2026-089</span>
              </div>
            </div>
            <div className="sms-profile-sheet">
              {[
                { label: 'Student Name', value: 'Habib' },
                { label: 'Age', value: '22' },
                { label: 'Gender', value: 'Male' },
                { label: 'Status', value: '● Active Enrolled', highlight: true },
                { label: 'Department', value: 'Computer Science & Engineering' },
              ].map(({ label, value, highlight }) => (
                <div key={label} className="sms-sheet-row">
                  <span className="sms-sheet-label">{label}</span>
                  <span className="sms-sheet-val" style={highlight ? { color: '#10b981' } : {}}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/signin" className="sms-btn-submit inline-block max-w-xs">
                Log In to Full Admin Portal
              </Link>
            </div>
          </div>
        )}

        {/* ABOUT */}
        {currentPage === 'about' && (
          <div className="sms-glass-card">
            <div className="sms-info-header">
              <h2>About School Management System</h2>
            </div>
            <div className="sms-info-grid">
              {[
                {
                  title: 'Campus Efficiency',
                  body: 'Designed to reduce administrative workload by unifying student profiles, grades, and communication.',
                },
                {
                  title: 'Modern Architecture',
                  body: 'Built with React 19, Vite, and ASP.NET Core Web API for instant load times, seamless navigation, and security.',
                },
                {
                  title: 'Scalable Database',
                  body: 'Seamlessly integrates with SQL Server backends for robust student, faculty, and attendance management.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="sms-info-card">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT */}
        {currentPage === 'contact' && (
          <div className="sms-glass-card">
            <div className="sms-info-header">
              <h2>Contact Administration</h2>
            </div>
            <div className="sms-info-grid">
              <div className="sms-info-card">
                <h3>Support Desk</h3>
                <p>Email: admin@brightfuture.edu<br />Phone: +1 (555) 019-2834</p>
              </div>
              <div className="sms-info-card">
                <h3>Campus Location</h3>
                <p>Academic Affairs Building, Suite 304<br />Office Hours: Mon – Fri, 8:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ── 4. FOOTER ── */}
      <footer className="sms-footer">
        © 2026 School Management System &nbsp;•&nbsp; Habib Muhammed
      </footer>

    </div>
  );
}
