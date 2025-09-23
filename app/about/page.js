'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import PricingButton from '../../components/PricingButton';
import SplashCursor from '../../components/SplashCursor';
import '../globals.css';

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add breathing animation to blocks after they rise
    const timer = setTimeout(() => {
      const blocks = document.querySelectorAll('.block');
      blocks.forEach(block => {
        block.classList.add('block-rise-complete');
      });
    }, 2000); // Wait for all blocks to rise (4 blocks * 0.2s delay + 0.8s animation)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`about-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Splash Cursor Effect */}
      <SplashCursor />
      
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Floating Logo */}
      <a href="/" className="floating-logo">
        <Image
          src="/PeakFlux Logo.png"
          alt="PeakFlux Marketing"
          width={150}
          height={150}
          className="floating-logo-image"
        />
      </a>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-visual">
            <div className="spark-animation">
              <div className="spark-core"></div>
              <div className="spark-rays">
                <div className="ray ray-1"></div>
                <div className="ray ray-2"></div>
                <div className="ray ray-3"></div>
                <div className="ray ray-4"></div>
              </div>
            </div>
          </div>
          <h1 className="hero-title">
            <span className="spark-text">Every great idea starts with a spark</span>
          </h1>
          <p className="hero-subtitle">
            Our journey from scattered creatives to a unified marketing powerhouse
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          {/* Spark Section */}
          <div className="story-block fade-in-up">
            <div className="story-visual">
              <div className="connection-map">
                <div className="continent continent-1">
                  <div className="pulse-dot"></div>
                </div>
                <div className="continent continent-2">
                  <div className="pulse-dot"></div>
                </div>
                <div className="continent continent-3">
                  <div className="pulse-dot"></div>
                </div>
                <div className="connection-line line-1"></div>
                <div className="connection-line line-2"></div>
                <div className="connection-line line-3"></div>
              </div>
            </div>
            <div className="story-content">
              <h2>The Spark Across Continents</h2>
              <p>
                Every great idea starts with a spark — and ours began with a shared vision across continents. 
                What started as a group of passionate creatives, strategists, and tech enthusiasts from different 
                corners of the world soon became a powerhouse marketing agency.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="story-block fade-in-up reverse">
            <div className="story-content">
              <h2>United by Vision</h2>
              <p>
                United by a common goal — to help businesses thrive in the digital age — we brought together 
                our diverse skills in branding, content creation, paid advertising, design, and growth strategy. 
                With backgrounds ranging from startups to global brands, each member brings unique expertise to the table.
              </p>
            </div>
            <div className="story-visual">
              <div className="skills-constellation">
                <div className="skill-node branding">
                  <span>Branding</span>
                </div>
                <div className="skill-node content">
                  <span>Content</span>
                </div>
                <div className="skill-node advertising">
                  <span>Paid Ads</span>
                </div>
                <div className="skill-node design">
                  <span>Design</span>
                </div>
                <div className="skill-node strategy">
                  <span>Strategy</span>
                </div>
                <div className="constellation-center"></div>
              </div>
            </div>
          </div>

          {/* Building Section */}
          <div className="story-block fade-in-up">
            <div className="story-visual">
              <div className="building-visual">
                <div className="foundation"></div>
                <div className="building-blocks">
                  <div className="block block-1">Data</div>
                  <div className="block block-2">Design</div>
                  <div className="block block-3">Innovation</div>
                  <div className="block block-4">Results</div>
                </div>
                <div className="building-glow"></div>
              </div>
            </div>
            <div className="story-content">
              <h2>Building Something Bigger</h2>
              <p>
                We didn't just meet online; we built something bigger than ourselves. Today, we craft 
                data-driven campaigns, design unforgettable digital experiences, and launch innovative 
                projects that drive measurable results for our clients.
              </p>
            </div>
          </div>

          {/* Future Section */}
          <div className="story-block fade-in-up final">
            <div className="story-content centered">
              <h2>Just Getting Started</h2>
              <p>
                Our story isn't about where we came from — it's about what we're building together. 
                And we're just getting started.
              </p>
              <div className="cta-section">
                <PricingButton 
                  variant="cyan"
                  href="/"
                >
                  Ready to Start Your Story?
                </PricingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-icon icon-1">💡</div>
        <div className="floating-icon icon-2">🚀</div>
        <div className="floating-icon icon-3">⭐</div>
        <div className="floating-icon icon-4">🌍</div>
      </div>
    </div>
  );
}
