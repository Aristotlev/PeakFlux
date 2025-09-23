import { useState, useEffect, useRef } from 'react';

// Helper function to determine if text should use scrambled effect
export const shouldUseScrambledText = (text) => {
  if (!text || typeof text !== 'string') return false;
  const wordCount = text.trim().split(/\s+/).length;
  return wordCount > 4;
};

// Simple scramble effect without character splitting
const SimpleScrambleText = ({ 
  children, 
  className = '', 
  scrambleChars = '.:',
  ...props 
}) => {
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const textRef = useRef(null);
  const originalText = children;

  const scrambleText = () => {
    if (isScrambling) return;
    
    setIsScrambling(true);
    const chars = scrambleChars.split('');
    const textLength = originalText.length;
    let iterations = 0;
    
    const interval = setInterval(() => {
      setDisplayText(originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iterations) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('')
      );
      
      iterations += 1/3;
      
      if (iterations >= textLength) {
        clearInterval(interval);
        setDisplayText(originalText);
        setIsScrambling(false);
      }
    }, 50);
  };

  return (
    <p 
      ref={textRef}
      className={`scramble-text ${className}`}
      onMouseEnter={scrambleText}
      style={{
        fontFamily: 'monospace',
        cursor: 'pointer',
        animation: 'none !important',
        transform: 'translate3d(0, 0, 0) !important',
        position: 'relative !important',
        display: 'block !important'
      }}
      {...props}
    >
      {displayText}
    </p>
  );
};

// Wrapper component that conditionally applies scrambled text
export const ConditionalScrambledText = ({ 
  children, 
  className = '', 
  scrambleChars = '.:',
  ...props 
}) => {
  const text = typeof children === 'string' ? children : '';
  
  if (shouldUseScrambledText(text)) {
    return (
      <SimpleScrambleText
        className={className}
        scrambleChars={scrambleChars}
        {...props}
      >
        {children}
      </SimpleScrambleText>
    );
  }
  
  return (
    <p 
      className={`simple-text ${className}`} 
      style={{
        animation: 'none !important',
        transform: 'translate3d(0, 0, 0) !important',
        position: 'relative !important',
        display: 'block !important'
      }}
      {...props}
    >
      {children}
    </p>
  );
};
