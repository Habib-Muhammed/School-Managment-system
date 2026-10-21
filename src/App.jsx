import { useState, useEffect } from 'react';
import slide1 from './assets/images/slide1.jpg';
import slide2 from './assets/images/slide2.jpg';
import slide3 from './assets/images/slide3.jpg';

function App() {
  // Navigation State: 'home' | 'dashboard' | 'about' | 'contact' | 'signin'
  const [currentPage, setCurrentPage] = useState('home');

  // Form State
  const [username, setUsername] = useState('Habib');
  const [password, setPassword] = useState('');

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
        {/* Previous slide fading out */}
        {prevSlide !== null && (
          <div
            className="sms-bg-slide sms-bg-slide--out"
            style={{ backgroundImage: `url(${slides[prevSlide]})` }}
          />
        )}
        {/* Current slide fading in */}
        <div
          className={`sms-bg-slide ${fading ? 'sms-bg-slide--fade' : 'sms-bg-slide--visible'}`}
          style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        />
        {/* Dark overlay so text stays readable */}
        <div className="sms-bg-overlay" />
        {/* Glowing ambient orbs on top */}
        <div className="sms-bg-orb orb-1" />
        <div className="sms-bg-orb orb-2" />
      </div>

      {/* ── 2. NAVIGATION BAR ── */}
      <header className="sms-navbar">
        <div className="sms-nav-container">
          <div className="sms-brand" onClick={() => setCurrentPage('home')}>
            <span className="sms-logo">🎓</span>
            <span className="sms-brand-text">SchoolHub</span>
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
            <button
              className={`sms-btn-signin${currentPage === 'signin' ? ' active' : ''}`}
              onClick={() => setCurrentPage('signin')}
            >
              Sign In
            </button>
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

        {/* HOME */}
        {currentPage === 'home' && (
          <div className="sms-glass-card sms-hero-grid">
            <h1>School Management System</h1>
            <p>
              Welcome to your comprehensive school management portal. Track student records,
              academic progress, and campus activities with modern real-time performance.
            </p>
            <div className="sms-cta-group">
              <button
                className="sms-btn-submit sms-btn-cta"
                onClick={() => setCurrentPage('dashboard')}
              >
                View Student Profile
              </button>
              <button
                className="sms-menu-item sms-btn-outline"
                onClick={() => setCurrentPage('about')}
              >
                Learn More
              </button>
            </div>
          </div>
        )}

        {/* STUDENT INFO / DASHBOARD */}
        {currentPage === 'dashboard' && (
          <div className="sms-glass-card">
            <div className="sms-info-header">
              <h2>Student Record Profile</h2>
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
                  body: 'Built with React 19 and Vite for instant load times, seamless navigation, and top-tier security.',
                },
                {
                  title: 'Scalable Database',
                  body: 'Seamlessly integrates with ASP.NET Core Web API backends for robust CRUD operations.',
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
                <p>Email: support@schoolhub.edu<br />Phone: +1 (555) 019-2834</p>
              </div>
              <div className="sms-info-card">
                <h3>Campus Location</h3>
                <p>Academic Affairs Building, Suite 304<br />Office Hours: Mon – Fri, 8:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        )}

        {/* SIGN IN */}
        {currentPage === 'signin' && (
          <div className="sms-glass-card sms-form-box">
            <h2>Welcome Back</h2>
            <p>Sign in to manage your school profile</p>
            <form onSubmit={(e) => { e.preventDefault(); setCurrentPage('dashboard'); }}>
              <div className="sms-form-group">
                <label htmlFor="sms-username">Username / Email</label>
                <input
                  id="sms-username"
                  type="text"
                  className="sms-form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="sms-form-group">
                <label htmlFor="sms-password">Password</label>
                <input
                  id="sms-password"
                  type="password"
                  className="sms-form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              <button type="submit" className="sms-btn-submit">
                Sign In to Portal
              </button>
            </form>
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

export default App;
