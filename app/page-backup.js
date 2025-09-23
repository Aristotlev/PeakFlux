'use client'

import { useEffect } from 'react'
import SplashCursor from '../components/SplashCursor'
import ShinyText from '../components/ShinyText'

export default function Home() {
  useEffect(() => {
    // Smooth scroll navigation
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
  return (
    <div className="main-container">
      {/* Splash Cursor Effect */}
      <SplashCursor />
          resistance={650}
          returnDuration={1.8}
        />
      </div>
      
      {/* Fixed Header */}
        <header className="fixed-header">
          <div className="header-content">
            <ShinyText text="Peakflux Marketing" speed={4} className="large" />
            <nav className="nav-menu">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>      {/* Content Layer */}
      <div className="content-layer">
        {/* Hero Section */}
        <section id="home" className="section hero-section">
          <div className="section-content">
            <div className="morph-container hero-container">
              <ShinyText text="Digital Marketing Excellence" speed={3} className="large" />
              <p>Elevating brands through innovative digital strategies and creative solutions that drive real results.</p>
              <div className="cta-buttons">
                <button className="cta-primary">Get Started</button>
                <button className="cta-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="section services-section">
          <div className="section-content">
            <div className="morph-container services-container">
              <ShinyText text="Our Services" speed={4} className="large" />
              <p className="section-subtitle">Comprehensive marketing solutions tailored to your business needs</p>
              <div className="services-grid">
                <div className="service-item">
                  <div className="service-icon">📱</div>
                  <ShinyText text="Social Media Marketing" speed={5} className="medium" />
                  <p>Build your brand presence across all major platforms</p>
                </div>
                <div className="service-item">
                  <div className="service-icon">🎨</div>
                  <ShinyText text="Content Creation" speed={6} className="medium" />
                  <p>Engaging content that resonates with your audience</p>
                </div>
                <div className="service-item">
                  <div className="service-icon">🎯</div>
                  <ShinyText text="Brand Strategy" speed={4} className="medium" />
                  <p>Strategic positioning to differentiate your brand</p>
                </div>
                <div className="service-item">
                  <div className="service-icon">📊</div>
                  <ShinyText text="Digital Advertising" speed={7} className="medium" />
                  <p>Data-driven campaigns that maximize ROI</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        {/* Team Section */}
        <section id="team" className="section team-section">
          <div className="section-content">
            <div className="morph-container team-container">
              <ShinyText text="Meet Our Team" speed={3} className="large" />
              <p className="section-subtitle">Expert professionals dedicated to your success</p>
              <div className="team-grid">
                <div className="team-member">
                  <div className="team-avatar">👨‍💼</div>
                  <ShinyText text="Alex Johnson" speed={5} className="small" />
                  <p>Creative Director & Founder</p>
                  <p>15+ years in digital marketing and brand development</p>
                </div>
                <div className="team-member">
                  <div className="team-avatar">👩‍�</div>
                  <ShinyText text="Sarah Chen" speed={6} className="small" />
                  <p>Social Media Strategist</p>
                  <p>Expert in viral content creation and community management</p>
                </div>
                <div className="team-member">
                  <div className="team-avatar">👨‍🎨</div>
                  <ShinyText text="Marcus Rivera" speed={4} className="small" />
                  <p>Digital Marketing Specialist</p>
                  <p>Data-driven campaigns and performance optimization</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="morph-container">
            <ShinyText text="Get In Touch" speed={3} className="large" />
            <div className="contact-content horizontal-layout">
                <a href="#" className="social-icon twitter">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </span>
                  <span className="social-name">Twitter</span>
                </a>
                <a href="#" className="social-icon linkedin">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </span>
                  <span className="social-name">LinkedIn</span>
                </a>
                <a href="#" className="social-icon instagram">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.90-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </span>
                  <span className="social-name">Instagram</span>
                </a>
                <a href="#" className="social-icon youtube">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                  </span>
                  <span className="social-name">YouTube</span>
                </a>
                <a href="#" className="social-icon facebook">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </span>
                  <span className="social-name">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </section>

                {/* Contact Section */}
        <section id="contact" className="section">
          <div className="morph-container">
            <ShinyText text="Get In Touch" speed={3} className="large" />
            <div className="contact-content horizontal-layout">
              <div className="contact-info">
                <ShinyText text="Contact Information" speed={4} className="small" />
                <p>📧 hello@peakflux.marketing</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 New York, NY</p>
              </div>
              
              <div className="contact-form">
                <ShinyText text="Send us a Message" speed={5} className="small" />
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="cta-primary">Send Message</button>
                </form>
              </div>
              
              {/* Social Media Icons */}
              <div className="social-media-column">
                <ShinyText text="Follow Us" speed={4} className="small" />
                <div className="social-icons vertical-icons">
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="YouTube">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
