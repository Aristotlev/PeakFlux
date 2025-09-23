'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SplashCursor from '../../components/SplashCursor'
import HoverTextCycle from '../../components/HoverTextCycle'
import '../../components/HoverTextCycle.css'
import { ConditionalScrambledText } from '../../components/ConditionalScrambledText'
import BrandButton from '../../components/BrandButton'
import PricingButton from '../../components/PricingButton'
import { gsap } from 'gsap'

export default function Offers() {
  const [showPreloader, setShowPreloader] = useState(false) // Always false to skip preloader
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Preloader disabled for offers page
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false)
  }

  // Skip preloader entirely
  if (showPreloader) {
    return (
      <>
        <div className="main-container" style={{ filter: 'blur(5px)' }}>
          {/* Content will be blurred behind preloader */}
        </div>
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
        <Link href="/">
          <Image
            src="/PeakFlux Logo.png"
            alt="PeakFlux Marketing"
            width={150}
            height={150}
            className="floating-logo-image"
          />
        </Link>
      </div>

      {/* Offers Hero Section */}
      <section className="section offers-hero">
        <div className="section-content">
          <div className="offers-hero-content">
            <HoverTextCycle 
              baseText="Our Service Packages"
              hoverWords={["Premium Services", "Expert Solutions", "Professional Results", "Strategic Packages"]}
              speed={2}
              className="large"
            />
            <ConditionalScrambledText className="offers-subtitle scrambled-offers">
              Choose the perfect plan to elevate your digital presence
            </ConditionalScrambledText>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section offers-section">
        <div className="section-content">
          <div className="offers-grid">
            
            {/* Website Audit & Update */}
            <div className="offer-card starter">
              <div className="offer-header">
                <HoverTextCycle 
                  baseText="Website Audit & Update"
                  hoverWords={["Quick Fix", "Smart Update", "Fast Delivery", "Professional Audit"]}
                  speed={2}
                  className="medium"
                />
                <div className="offer-price">
                  <span className="price">$500</span>
                  <span className="price-note">One-time</span>
                </div>
              </div>
              <div className="offer-features">
                <ul>
                  <li>Complete website audit</li>
                  <li>Performance optimization</li>
                  <li>SEO improvements</li>
                  <li>Modern design updates</li>
                  <li>Mobile responsiveness</li>
                  <li>Up to 4 pages</li>
                  <li>24hrs delivery</li>
                </ul>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '1rem 0' }}>
                <PricingButton 
                  href="15551234567"
                  whatsappText="Hi! I'm interested in the Website Audit & Update package ($500)">
                  Get Started
                </PricingButton>
              </div>
            </div>

            {/* Website Creation with 3D */}
            <div className="offer-card premium">
              <div className="offer-header">
                <HoverTextCycle 
                  baseText="Premium Website Creation"
                  hoverWords={["3D Website", "Premium Design", "Interactive Site", "Modern Creation"]}
                  speed={2}
                  className="medium"
                />
                <div className="offer-price">
                  <span className="price">$1,500</span>
                  <span className="price-note">One-time</span>
                </div>
              </div>
              <div className="offer-features">
                <ul>
                  <li>Custom website design</li>
                  <li>3D elements & animations</li>
                  <li>Interactive environments</li>
                  <li>Modern UI/UX design</li>
                  <li>SEO optimization</li>
                  <li>Up to 4 pages</li>
                  <li>Mobile & tablet responsive</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '1rem 0' }}>
                <PricingButton 
                  href="15551234567"
                  whatsappText="Hi! I'm interested in the Premium Website Creation package ($1,500)">
                  Get Started
                </PricingButton>
              </div>
            </div>

            {/* Marketing Strategy Package */}
            <div className="offer-card marketing">
              <div className="offer-header">
                <HoverTextCycle 
                  baseText="Complete Marketing Strategy"
                  hoverWords={["Full Marketing", "Strategic Growth", "Complete Solution", "Marketing Excellence"]}
                  speed={2}
                  className="medium"
                />
                <div className="offer-price">
                  <span className="price">$2,500</span>
                  <span className="price-note">Per month</span>
                </div>
              </div>
              <div className="offer-features">
                <ul>
                  <li>Marketing strategy development</li>
                  <li>Ideal Customer Profile (ICP)</li>
                  <li>Social media management</li>
                  <li>Content editing & posting</li>
                  <li>SEO optimization</li>
                  <li>Pay-per-click advertising</li>
                  <li>Monthly performance reports</li>
                  <li>Strategy adjustments</li>
                </ul>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '1rem 0' }}>
                <PricingButton 
                  href="15551234567"
                  whatsappText="Hi! I'm interested in the Complete Marketing Strategy package ($2,500/month)">
                  Get Started
                </PricingButton>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="offer-card enterprise">
              <div className="offer-header">
                <HoverTextCycle 
                  baseText="Enterprise Solution"
                  hoverWords={["Custom Enterprise", "Premium Service", "Tailored Solution", "Executive Package"]}
                  speed={2}
                  className="medium"
                />
                <div className="offer-price">
                  <span className="price">Custom</span>
                  <span className="price-note">Tailored pricing</span>
                </div>
              </div>
              <div className="offer-features">
                <ul>
                  <li>Everything from all other plans</li>
                  <li>Dedicated business consulting</li>
                  <li>Business plan tailored to your niche</li>
                  <li>Strategic growth planning</li>
                  <li>Custom integrations & automation</li>
                  <li>Priority support & communication</li>
                  <li>Unlimited revisions</li>
                  <li>Quarterly business reviews</li>
                </ul>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '1rem 0' }}>
                <PricingButton 
                  href="15551234567"
                  whatsappText="Hi! I'm interested in the Enterprise Solution. Let's discuss my custom requirements and niche-specific business plan.">
                  Contact Us
                </PricingButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="section-content">
          <div className="why-choose-content">
            <HoverTextCycle 
              baseText="Why Choose PeakFlux?"
              hoverWords={["Why Us?", "Our Advantage", "PeakFlux Benefits", "Choose Excellence"]}
              speed={2}
              className="large"
            />
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🚀</div>
                <h3>Performance Driven</h3>
                <ConditionalScrambledText className="scrambled-offers">
                  We focus on results that matter to your business growth
                </ConditionalScrambledText>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎨</div>
                <h3>Creative Excellence</h3>
                <ConditionalScrambledText className="scrambled-offers">
                  Stunning designs that captivate and convert your audience
                </ConditionalScrambledText>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <h3>Fast Delivery</h3>
                <ConditionalScrambledText className="scrambled-offers">
                  Quick turnaround times without compromising quality
                </ConditionalScrambledText>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💬</div>
                <h3>24/7 Support</h3>
                <ConditionalScrambledText className="scrambled-offers">
                  Always here to help you succeed and grow your business
                </ConditionalScrambledText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
