'use client'

import BrandButton from '../../components/BrandButton';
import Link from 'next/link';

export default function ButtonDemo() {
  const handleClick = (buttonType) => {
    alert(`${buttonType} button clicked!`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(24, 24, 24, 1), rgba(46, 16, 101, 0.1))',
      padding: '2rem',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link href="/" style={{ 
          color: 'rgba(139, 95, 255, 0.8)', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          marginBottom: '2rem',
          display: 'inline-block'
        }}>
          ← Back to Home
        </Link>
        
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, rgba(139, 95, 255, 1), rgba(179, 136, 255, 0.8))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          BrandButton Component Demo
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          
          {/* Primary Buttons */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              Outline Buttons (Primary Style)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <BrandButton 
                className="outline" 
                onClick={() => handleClick('Outline')}
              >
                Get Started
              </BrandButton>
              <BrandButton 
                className="outline" 
                onClick={() => handleClick('Outline CTA')}
              >
                Contact Us
              </BrandButton>
              <BrandButton className="outline">
                Choose Plan
              </BrandButton>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              Secondary Buttons
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <BrandButton 
                className="secondary" 
                onClick={() => handleClick('Secondary')}
              >
                Learn More
              </BrandButton>
              <BrandButton className="secondary">
                View Details
              </BrandButton>
              <BrandButton className="secondary">
                Download
              </BrandButton>
            </div>
          </div>

          {/* Outline Buttons */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              Outline Buttons
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <BrandButton 
                className="outline" 
                onClick={() => handleClick('Outline')}
              >
                Cancel
              </BrandButton>
              <BrandButton className="outline">
                Go Back
              </BrandButton>
              <BrandButton className="outline">
                Skip
              </BrandButton>
            </div>
          </div>

          {/* Default Buttons */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              Default Buttons
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <BrandButton onClick={() => handleClick('Default')}>
                Subscribe
              </BrandButton>
              <BrandButton>
                Follow Us
              </BrandButton>
              <BrandButton>
                Join Newsletter
              </BrandButton>
            </div>
          </div>
        </div>

          {/* Usage Examples */}
        <div style={{
          background: 'rgba(46, 16, 101, 0.1)',
          padding: '2rem',
          borderRadius: '15px',
          border: '1px solid rgba(139, 95, 255, 0.2)'
        }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            Usage Examples
          </h3>
          <pre style={{
            color: 'rgba(139, 95, 255, 0.9)',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            overflow: 'auto'
          }}>
{`// Import the component
import BrandButton from '../components/BrandButton';

// All buttons now use outline style for consistency
<BrandButton className="outline" onClick={handleSubmit}>
  Get Started
</BrandButton>

// Centered in containers
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <BrandButton className="outline">
    Learn More
  </BrandButton>
</div>

// Contact/action buttons
<BrandButton className="outline">
  Contact Us
</BrandButton>

// Submit buttons
<BrandButton className="outline" type="submit">
  Send Message
</BrandButton>`}
          </pre>
        </div>        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}>
            All buttons feature dark purple gradients with neon visual effects, matching your brand theme
          </p>
        </div>
      </div>
    </div>
  );
}
