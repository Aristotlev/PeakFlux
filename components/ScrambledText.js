import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

import './ScrambledText.css';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.04,
  scrambleChars = '.:',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    if (!rootRef.current) return;

    const split = SplitText.create(rootRef.current.querySelector('p'), {
      type: 'chars',
      charsClass: 'char'
    });
    charsRef.current = split.chars;

    // CRITICAL: Force consistent character widths and positioning
    charsRef.current.forEach((c, index) => {
      // Store original character for scramble reset
      const originalChar = c.innerHTML;
      
      gsap.set(c, {
        display: 'inline-block',
        attr: { 'data-content': originalChar },
        // FORCE consistent width to prevent collapse
        width: 'auto',
        minWidth: '0.6ch',
        maxWidth: '2ch',
        textAlign: 'center',
        position: 'relative',
        // Lock baseline to prevent vertical shifting
        verticalAlign: 'baseline',
        // Disable any transforms that could cause issues
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        transformOrigin: 'center center',
        // Prevent font weight/style changes during scramble
        fontWeight: 'inherit',
        fontStyle: 'inherit'
      });
    });

    const handleMove = e => {
      charsRef.current.forEach(c => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || '',
              chars: scrambleChars,
              speed
            },
            ease: 'none',
            // CRITICAL: Lock position during scramble
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            // Maintain consistent dimensions
            width: 'auto',
            minWidth: '0.6ch'
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
