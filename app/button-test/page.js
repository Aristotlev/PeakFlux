'use client'

import BrandButton from '../../components/BrandButton';

export default function ButtonTest() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! Animation should have worked.');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(24, 24, 24, 1), rgba(46, 16, 101, 0.1))',
      padding: '2rem',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem'
    }}>
      
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        fontSize: '2rem',
        background: 'linear-gradient(135deg, rgba(139, 95, 255, 1), rgba(179, 136, 255, 0.8))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Button Animation Test
      </h1>

      <div style={{
        background: 'rgba(46, 16, 101, 0.1)',
        padding: '2rem',
        borderRadius: '15px',
        border: '1px solid rgba(139, 95, 255, 0.2)',
        maxWidth: '500px',
        width: '100%'
      }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            Test Form - Submit Button Animation
          </h3>
          
          <input 
            type="text" 
            placeholder="Your Name" 
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid rgba(139, 95, 255, 0.3)',
              background: 'rgba(46, 16, 101, 0.2)',
              color: 'white',
              fontSize: '16px'
            }}
          />
          
          <textarea 
            placeholder="Your Message" 
            rows="4"
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid rgba(139, 95, 255, 0.3)',
              background: 'rgba(46, 16, 101, 0.2)',
              color: 'white',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '1rem' }}>
            <BrandButton type="submit" className="outline">Send Message</BrandButton>
          </div>
        </form>
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <BrandButton className="outline" onClick={() => alert('Get Started clicked!')}>
          Get Started
        </BrandButton>
        <BrandButton className="outline" onClick={() => alert('Learn More clicked!')}>
          Learn More
        </BrandButton>
        <BrandButton className="outline" onClick={() => alert('Contact Us clicked!')}>
          Contact Us
        </BrandButton>
      </div>

      <div style={{
        textAlign: 'center',
        padding: '1rem',
        background: 'rgba(46, 16, 101, 0.05)',
        borderRadius: '10px',
        border: '1px solid rgba(139, 95, 255, 0.1)',
        maxWidth: '600px'
      }}>
        <h4 style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '0.5rem' }}>
          Expected Animation Behavior:
        </h4>
        <ul style={{ 
          color: 'rgba(179, 136, 255, 0.8)', 
          textAlign: 'left', 
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <li>Hover: Button should scale to 1.1x size</li>
          <li>Background: Expanding gradient fill from center</li>
          <li>Text: Changes from purple to dark on hover</li>
          <li>Border: Brightens from purple to cyan</li>
          <li>Glow: Intensifies with multi-layer neon effect</li>
          <li>Smooth: All transitions use cubic-bezier easing</li>
        </ul>
      </div>

      <p style={{ 
        color: 'rgba(255, 255, 255, 0.7)', 
        fontSize: '0.9rem',
        textAlign: 'center',
        marginTop: '1rem'
      }}>
        Test all buttons above - they should have consistent hover animations
      </p>
    </div>
  );
}
