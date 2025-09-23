'use client'


import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SplashCursor from '../components/SplashCursor'
import ShinyText from '../components/ShinyText'
import VaporizeTextCycle from '../components/VaporizeTextCycle'
import HoverTextCycle from '../components/HoverTextCycle'
import '../components/HoverTextCycle.css'
import Preloader from '../components/Preloader'
import '../components/Preloader.css'
import { SparklesCore } from "@/components/ui/sparkles"
import { ParticleTextEffect } from "../components/ParticleTextEffect"
import '../components/ParticleTextEffect.css'
import { GlowingShadow } from '../components/GlowingShadow'
import { TransparentGlowingShadow } from '../components/TransparentGlowingShadow'
import { ConditionalScrambledText } from '../components/ConditionalScrambledText'
import BrandButton from '../components/BrandButton'
import PricingButton from '../components/PricingButton'
import ContactForm from '../components/ContactForm'

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Set client flag first
    setIsClient(true)
    
    // Check if this is a first visit, page refresh, or internal navigation
    const timer = setTimeout(() => {
      const referrer = document.referrer;
      const currentOrigin = window.location.origin;
      const navigationEntries = performance.getEntriesByType('navigation');
      const isRefresh = navigationEntries.length > 0 && navigationEntries[0].type === 'reload';
      
      // Show preloader for first visits OR page refreshes
      // Skip preloader only for internal navigation (coming from same site)
      if (referrer && referrer.startsWith(currentOrigin) && !isRefresh) {
        setShowPreloader(false);
      } else {
        // Show preloader for first-time visitors AND page refreshes
        // Keep preloader true (default state)
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [])

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

  const handlePreloaderComplete = () => {
    setShowPreloader(false)
  }

  // Show preloader immediately if client is ready and showPreloader is true
  if (showPreloader) {
    return (
      <>
        {/* Website content (will be blurred behind preloader) */}
        <div className="main-container">
          {/* Splash Cursor Effect */}
          <SplashCursor />
          
          {/* Floating Logo */}
          <div className="floating-logo">
            <Image
              src="/PeakFlux Logo.png"
              alt="PeakFlux Marketing"
              width={150}
              height={150}
              className="floating-logo-image"
            />
          </div>
          
          {/* Main Hero Section */}
          <section id="home" className="section hero-section">
            <div className="hero-main-container h-[50rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
              {/* Hero Content */}
              <div className="section-content relative z-20">
                <div className="morph-container hero-container">
                  {/* Particle Text Effect */}
                  <div className="particle-hero-section">
                    <ParticleTextEffect words={["PeakFlux", "Marketing", "Excellence", "Innovation", "Results"]} />
                  </div>
                  
                  {/* Supporting Text */}
                  <div className="hero-text-content">
                    <HoverTextCycle 
                      baseText="PeakFlux Marketing Excellence"
                      hoverWords={["Innovation", "Excellence", "Success", "Growth"]}
                      speed={0.67}
                      className="medium"
                    />
                    <p className="hero-description">
                      Elevating brands through innovative digital strategies and creative solutions that drive real results.
                    </p>
                    <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link href="/offers" style={{ textDecoration: 'none' }}>
                        <BrandButton className="outline">Get Started</BrandButton>
                      </Link>
                      <Link href="/about" style={{ textDecoration: 'none' }}>
                        <BrandButton className="outline">Learn More</BrandButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Rest of content */}
          <div className="content-layer">
            {/* Services Section */}
            <section id="services" className="section services-section">
              <div className="section-content">
                <div className="morph-container services-container">
                  <HoverTextCycle 
                    baseText="Our Services"
                    hoverWords={["Marketing", "Innovation", "Excellence", "Results"]}
                    speed={0.67}
                    className="large"
                  />
                  <ConditionalScrambledText className="section-subtitle scrambled-subtitle">
                    Comprehensive marketing solutions tailored to your business needs
                  </ConditionalScrambledText>
                </div>
              </div>
            </section>
          </div>
        </div>
        
        {/* Preloader overlay */}
        <Preloader onComplete={handlePreloaderComplete} />
      </>
    )
  }

  return (
    <div className="main-container">
      {/* Splash Cursor Effect */}
      <SplashCursor />
      
      {/* Floating Logo */}
      <div className="floating-logo">
        <Image
          src="/PeakFlux Logo.png"
          alt="PeakFlux Marketing"
          width={150}
          height={150}
          className="floating-logo-image"
        />
      </div>
      
      {/* Main Hero Section */}
      <section id="home" className="section hero-section">
        <div className="hero-main-container h-[50rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          {/* Hero Content */}
          <div className="section-content relative z-20">
            <div className="morph-container hero-container">
              {/* Particle Text Effect */}
              <div className="particle-hero-section">
                <ParticleTextEffect words={["PeakFlux", "Marketing", "Excellence", "Innovation", "Results"]} />
              </div>
              
              {/* Supporting Text */}
              <div className="hero-text-content">
                <HoverTextCycle 
                  baseText="PeakFlux Marketing Excellence"
                  hoverWords={["Innovation", "Excellence", "Success", "Growth"]}
                  speed={0.67}
                  className="medium"
                />
                <p className="hero-description">
                  Elevating brands through innovative digital strategies and creative solutions that drive real results.
                </p>
                <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/offers" style={{ textDecoration: 'none' }}>
                    <BrandButton className="outline">Get Started</BrandButton>
                  </Link>
                  <Link href="/about" style={{ textDecoration: 'none' }}>
                    <BrandButton className="outline">Learn More</BrandButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Layer */}
      <div className="content-layer">
        {/* Services Section */}
        <section id="services" className="section services-section">
          <div className="section-content">
            <div className="morph-container services-container">
              <HoverTextCycle 
                baseText="Our Services"
                hoverWords={["Marketing", "Innovation", "Excellence", "Results"]}
                speed={0.67}
                className="large"
              />
              <ConditionalScrambledText className="section-subtitle scrambled-subtitle">
                Comprehensive marketing solutions tailored to your business needs
              </ConditionalScrambledText>
              <div className="services-grid">
                <div className="service-item">
                  <div className="service-icon">📱</div>
                  <HoverTextCycle 
                    baseText="Social Media Marketing"
                    hoverWords={["Engagement", "Growth", "Reach", "Impact"]}
                    speed={0.67}
                    className="medium"
                  />
                  <ConditionalScrambledText className="scrambled-subtitle">
                    Build your brand presence across all major platforms
                  </ConditionalScrambledText>
                </div>
                <div className="service-item">
                  <div className="service-icon">🎨</div>
                  <HoverTextCycle 
                    baseText="Content Creation"
                    hoverWords={["Creative", "Compelling", "Converting", "Quality"]}
                    speed={0.67}
                    className="medium"
                  />
                  <ConditionalScrambledText className="scrambled-subtitle">
                    Engaging content that resonates with your audience
                  </ConditionalScrambledText>
                </div>
                <div className="service-item">
                  <div className="service-icon">🎯</div>
                  <HoverTextCycle 
                    baseText="Digital Advertising"
                    hoverWords={["Targeted", "Effective", "Profitable", "Strategic"]}
                    speed={0.67}
                    className="medium"
                  />
                  <ConditionalScrambledText className="scrambled-subtitle">
                    Targeted campaigns that maximize your ROI
                  </ConditionalScrambledText>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section team-section">
          <div className="section-content">
            <div className="morph-container team-container">
              <HoverTextCycle 
                baseText="Meet Our Team"
                hoverWords={["Experts", "Professionals", "Innovators", "Leaders"]}
                speed={0.67}
                className="large"
              />
              <ConditionalScrambledText className="section-subtitle scrambled-subtitle">
                Passionate professionals dedicated to your success
              </ConditionalScrambledText>
              <div className="team-grid">
                <div className="team-member">
                  <div className="member-photo">
                    <Image 
                      src="/zach-handa-profile-purple.jpg" 
                      alt="Zach Handa - Mojo" 
                      width={300}
                      height={300}
                      unoptimized
                      style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                  <HoverTextCycle 
                    baseText="Zach Handa"
                    hoverWords={["SEO Expert", "AT&T Pro", "Growth Specialist", "Strategic Leader"]}
                    speed={0.67}
                    className="medium"
                  />
                  <a href="https://www.linkedin.com/in/zach-handa-75893027/" target="_blank" rel="noopener noreferrer" className="linkedin-profile-link">
                    <svg className="linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    View LinkedIn Profile
                  </a>
                  <p className="member-role">SEO Strategy Director</p>
                  <div className="member-companies">
                    <span className="company-badge">AT&T</span>
                    <span className="company-badge">SEO Expert</span>
                  </div>
                  <p className="member-description">
                    Former SEO Specialist at AT&T with expertise in enterprise-level search optimization. Specialized in technical SEO, content strategy, and driving organic growth for Fortune 100 telecommunications.
                  </p>
                </div>
                <div className="team-member">
                  <div className="member-photo">
                    <Image 
                      src="/j-dumitru-new.jpg" 
                      alt="J. Dumitru - Jon Wix" 
                      width={300}
                      height={300}
                      unoptimized
                      style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                  <HoverTextCycle 
                    baseText="J. Dumitru"
                    hoverWords={["Digital Strategist", "LinkedIn Expert", "Growth Advisor", "Campaign Manager"]}
                    speed={0.67}
                    className="medium"
                  />
                  <a href="https://www.linkedin.com/in/jdumitru/" target="_blank" rel="noopener noreferrer" className="linkedin-profile-link">
                    <svg className="linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    View LinkedIn Profile
                  </a>
                  <p className="member-role">Digital Marketing Strategist</p>
                  <div className="member-companies">
                    <span className="company-badge">LinkedIn</span>
                    <span className="company-badge">Strategy</span>
                  </div>
                  <p className="member-description">
                    Digital marketing professional with expertise in strategic planning, campaign optimization, and data-driven growth strategies. Focused on delivering measurable results for clients.
                  </p>
                </div>
                <div className="team-member">
                  <div className="member-photo">
                    <Image 
                      src="/andre-green-new.png" 
                      alt="Andre Green - Dre" 
                      width={300}
                      height={300}
                      unoptimized
                      style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                  <HoverTextCycle 
                    baseText="Andre Green"
                    hoverWords={["Brand Expert", "Experience Manager", "Digital Architect", "Strategy Lead"]}
                    speed={0.67}
                    className="medium"
                  />
                  <a href="https://www.linkedin.com/in/andre-green-a4567b140/" target="_blank" rel="noopener noreferrer" className="linkedin-profile-link">
                    <svg className="linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    View LinkedIn Profile
                  </a>
                  <p className="member-role">Brand Experience Manager</p>
                                    <div className="member-companies">
                    <span className="company-badge">Digital Strategy</span>
                    <span className="company-badge">Brand Expert</span>
                  </div>
                  <p className="member-description">
                    Strategic brand architect specializing in digital transformation and customer experience optimization. Expert in creating cohesive brand narratives that drive engagement and conversion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - WITH INTEGRATED SOCIAL MEDIA */}
        <section id="contact" className="section contact-section">
          <div className="section-content">
            <div className="morph-container">
              <HoverTextCycle 
                baseText="Get In Touch"
                hoverWords={["Connect", "Contact", "Collaborate", "Communicate"]}
                speed={0.67}
                className="large"
              />
              <div className="contact-content vertical-layout">
                {/* Top section with contact info and form */}
                <div className="contact-top-section">
                  <div className="contact-info">
                    <HoverTextCycle 
                      baseText="Contact Information"
                      hoverWords={["Reach Out", "Get In Touch", "Connect", "Contact"]}
                      speed={0.67}
                      className="small"
                    />
                    <a href="mailto:hello@peakflux.marketing" className="email-contact">
                      <span className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </span>
                      <span className="contact-text">hello@peakflux.marketing</span>
                    </a>
                    <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="whatsapp-contact">
                      <span className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                        </svg>
                      </span>
                      <span className="contact-text">WhatsApp</span>
                    </a>
                    <a href="https://peakflux.substack.com/?utm_campaign=pub&utm_medium=web" target="_blank" rel="noopener noreferrer" className="newsletter-contact">
                      <span className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.539 12.007c.48-.877.461-1.968-.119-2.832L17.578 1.64a3.007 3.007 0 0 0-2.6-1.507H9.022a3.007 3.007 0 0 0-2.6 1.507L1.581 9.175c-.58.864-.599 1.955-.119 2.832l4.842 8.535a3.009 3.009 0 0 0 2.6 1.507h5.956c1.1 0 2.113-.605 2.6-1.507l4.842-8.535z"/>
                          <path d="M7.5 10.5h9v1.5h-9v-1.5z"/>
                          <path d="M7.5 13.5h9v1.5h-9v-1.5z"/>
                          <path d="M7.5 7.5h9v1.5h-9v-1.5z"/>
                        </svg>
                      </span>
                      <span className="contact-text">Subscribe to Newsletter</span>
                    </a>
                  </div>
                  
                  <div className="contact-form">
                    <HoverTextCycle 
                      baseText="Send us a Message"
                      hoverWords={["Drop a Line", "Write to Us", "Send Message", "Get in Touch"]}
                      speed={0.67}
                      className="small"
                    />
                    <ContactForm />
                  </div>
                </div>
                
                {/* Bottom section with social media icons horizontally */}
                <div className="social-media-bottom">
                  <HoverTextCycle 
                    baseText="Follow Us"
                    hoverWords={["Connect", "Join Us", "Stay Updated", "Follow"]}
                    speed={0.67}
                    className="small"
                  />
                  <div className="social-icons horizontal-icons">
                    <a href="https://x.com/PeakFlux_" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                      <span className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </span>
                      <span className="social-name">X (Twitter)</span>
                    </a>
                    <a href="https://www.instagram.com/high_roi_agency/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                      <span className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </span>
                      <span className="social-name">Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100085158445659" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                      <span className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </span>
                      <span className="social-name">Facebook</span>
                    </a>
                    <a href="https://www.tiktok.com/@highroiagency" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
                      <span className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </span>
                      <span className="social-name">TikTok</span>
                    </a>
                    <a href="https://www.youtube.com/@PeakfluxAgency" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                      <span className="icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </span>
                      <span className="social-name">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
