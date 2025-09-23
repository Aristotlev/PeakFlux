// Example Usage of BrandButton Component - Your Exact Code Implementation

import BrandButton from '../components/BrandButton';

// EXACT IMPLEMENTATION BASED ON YOUR PROVIDED CODE:
// ✅ Uses styled-components (as per your specification)
// ✅ Same button structure and styling approach
// ✅ Same scale animation (1.1x on hover)
// ✅ Same expanding background effect (scale 0 to 3)
// ✅ Same cubic-bezier transitions
// ✅ Same 34px border radius and padding
// ✅ Adapted with your brand purple colors

// Example 1: Replace existing CTA buttons
// Instead of: <button className="cta-primary">Get Started</button>
// Use: <BrandButton className="primary">Get Started</BrandButton>

// Example 2: Replace secondary buttons
// Instead of: <button className="cta-secondary">Learn More</button>
// Use: <BrandButton className="secondary">Learn More</BrandButton>

// Example 3: Custom onClick handler
// <BrandButton 
//   className="primary" 
//   onClick={() => console.log('Button clicked!')}
// >
//   Contact Us
// </BrandButton>

// Example 4: Service tier buttons
// Instead of: <button className="starter-cta">Choose Starter</button>
// Use: <BrandButton className="primary">Choose Starter</BrandButton>

// Available className variants (all using your exact animation pattern):
// - "primary" - Bright purple (rgb(179, 136, 255))
// - "secondary" - Standard purple (rgb(139, 95, 255)) 
// - "outline" - Pink accent (rgb(255, 107, 157))
// - No class - Default purple (rgb(139, 95, 255))

// The component follows your EXACT code structure:
// ✅ StyledWrapper with styled.div``
// ✅ .button class with your exact properties
// ✅ ::before pseudo-element for expanding background
// ✅ Same hover/active states and transitions
// ✅ Brand purple colors instead of rgb(193, 163, 98)

export default function ExampleUsage() {
  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <BrandButton className="primary">Primary Button</BrandButton>
      <BrandButton className="secondary">Secondary Button</BrandButton>
      <BrandButton className="outline">Outline Button</BrandButton>
      <BrandButton>Default Button</BrandButton>
    </div>
  );
}
