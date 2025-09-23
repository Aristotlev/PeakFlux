import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const PricingButton = ({ children, href, whatsappText, variant = 'default', className = '', ...props }) => {
  const buttonContent = (
    <StyledWrapper variant={variant}>
      <button className={`btn-brand ${className}`} {...props}>
        <div className="logo-container">
          <Image
            src="/PeakFlux Logo.png"
            alt="PeakFlux"
            width={28}
            height={28}
            className="brand-logo"
          />
        </div>
        <span>{children}</span>
      </button>
    </StyledWrapper>
  );

  // If href is provided, wrap in a link
  if (href && whatsappText) {
    return (
      <a href={`https://wa.me/${href}?text=${encodeURIComponent(whatsappText)}`} 
         target="_blank" 
         rel="noopener noreferrer" 
         style={{ textDecoration: 'none' }}>
        {buttonContent}
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} 
         target="_blank" 
         rel="noopener noreferrer" 
         style={{ textDecoration: 'none' }}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

const StyledWrapper = styled.div`
  .btn-brand {
    cursor: pointer;
    display: flex;
    gap: 0.75rem;
    border: none;
    align-items: center;
    position: relative;
    overflow: hidden;

    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 100px;
    font-weight: 800;
    place-content: center;

    padding: 1rem 1.5rem;
    font-size: 1rem;
    line-height: 1.2rem;

    ${props => props.variant === 'cyan' ? `
      background: linear-gradient(135deg, 
        rgba(75, 45, 180, 0.8), 
        rgba(110, 70, 200, 0.6),
        rgba(150, 100, 255, 0.3)
      );
      border: 2px solid rgba(150, 100, 255, 0.4);
      box-shadow:
        0 0 20px rgba(150, 100, 255, 0.3),
        0 0 40px rgba(110, 70, 200, 0.2),
        inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
        inset 0 0 0 1px rgba(150, 100, 255, 0.2);
      color: rgba(255, 255, 255, 0.9);
    ` : `
      background: linear-gradient(135deg, 
        rgba(46, 16, 101, 0.8), 
        rgba(139, 95, 255, 0.6)
      );
      border: 2px solid rgba(139, 95, 255, 0.4);
      box-shadow:
        0 0 20px rgba(139, 95, 255, 0.3),
        0 0 40px rgba(179, 136, 255, 0.2),
        inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
        inset 0 0 0 1px rgba(139, 95, 255, 0.2);
      color: rgba(255, 255, 255, 0.9);
    `}
  }

  .btn-brand::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${props => props.variant === 'cyan' ? `
      background: linear-gradient(135deg, 
        rgba(150, 100, 255, 0.3), 
        rgba(180, 120, 255, 0.4),
        rgba(110, 70, 200, 0.3)
      );
    ` : `
      background: linear-gradient(135deg, 
        rgba(139, 95, 255, 0.3), 
        rgba(179, 136, 255, 0.4),
        rgba(255, 107, 157, 0.3)
      );
    `}
    border-radius: inherit;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    transform: scale(0.8);
  }

  .btn-brand:hover {
    transform: translate(0, -0.25rem) scale(1.05);
    color: rgba(255, 255, 255, 1);
    ${props => props.variant === 'cyan' ? `
      border-color: rgba(180, 120, 255, 0.8);
      box-shadow:
        0 0 30px rgba(150, 100, 255, 0.6),
        0 0 60px rgba(110, 70, 200, 0.4),
        0 0 90px rgba(75, 45, 180, 0.3),
        inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
        inset 0 0 0 2px rgba(0, 255, 255, 0.4);
    ` : `
      border-color: rgba(179, 136, 255, 0.8);
      box-shadow:
        0 0 30px rgba(139, 95, 255, 0.6),
        0 0 60px rgba(179, 136, 255, 0.4),
        0 0 90px rgba(255, 107, 157, 0.3),
        inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
        inset 0 0 0 2px rgba(179, 136, 255, 0.4);
    `}
  }

  .btn-brand:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  .logo-container {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.variant === 'cyan' ? `
      background: linear-gradient(135deg, 
        rgba(150, 100, 255, 0.2), 
        rgba(180, 120, 255, 0.3)
      );
      border: 1px solid rgba(150, 100, 255, 0.3);
    ` : `
      background: linear-gradient(135deg, 
        rgba(139, 95, 255, 0.2), 
        rgba(179, 136, 255, 0.3)
      );
      border: 1px solid rgba(139, 95, 255, 0.3);
    `}
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .btn-brand:hover .logo-container {
    ${props => props.variant === 'cyan' ? `
      background: linear-gradient(135deg, 
        rgba(150, 100, 255, 0.4), 
        rgba(180, 120, 255, 0.5),
        rgba(110, 70, 200, 0.3)
      );
      border-color: rgba(180, 120, 255, 0.6);
      box-shadow: 
        0 0 15px rgba(150, 100, 255, 0.4),
        inset 0 0 10px rgba(180, 120, 255, 0.2);
    ` : `
      background: linear-gradient(135deg, 
        rgba(139, 95, 255, 0.4), 
        rgba(179, 136, 255, 0.5),
        rgba(255, 107, 157, 0.3)
      );
      border-color: rgba(179, 136, 255, 0.6);
      box-shadow: 
        0 0 15px rgba(139, 95, 255, 0.4),
        inset 0 0 10px rgba(255, 107, 157, 0.2);
    `}
    transform: rotate(360deg);
  }

  .brand-logo {
    width: 26px !important;
    height: 26px !important;
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    filter: brightness(1.1) contrast(1.1);
  }

  .btn-brand:hover .brand-logo {
    filter: brightness(1.3) contrast(1.2) saturate(1.2);
    transform: scale(1.1);
  }

  .btn-brand span {
    white-space: nowrap;
    position: relative;
    z-index: 2;
    font-weight: 700;
    letter-spacing: 0.5px;
    ${props => props.variant === 'cyan' ? `
      text-shadow: 0 0 10px rgba(150, 100, 255, 0.3);
    ` : `
      text-shadow: 0 0 10px rgba(139, 95, 255, 0.3);
    `}
  }

  .btn-brand:hover span {
    ${props => props.variant === 'cyan' ? `
      text-shadow: 
        0 0 15px rgba(150, 100, 255, 0.6),
        0 0 25px rgba(180, 120, 255, 0.4);
    ` : `
      text-shadow: 
        0 0 15px rgba(139, 95, 255, 0.6),
        0 0 25px rgba(179, 136, 255, 0.4);
    `}
  }

  .btn-brand:active {
    transform: translate(0, -0.1rem) scale(0.98);
  }
`;

export default PricingButton;
