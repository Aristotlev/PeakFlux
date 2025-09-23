import React from 'react';
import styled from 'styled-components';

const BrandButton = ({ children = "Subscribe", onClick, className = "", type = "button", ...props }) => {
  return (
    <StyledWrapper>
      <button className={`button ${className}`} onClick={onClick} type={type} {...props}>
        {children}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    position: relative;
    padding: 12px 28px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.95);
    border: 2px solid rgb(139, 95, 255);
    border-radius: 34px;
    background: linear-gradient(135deg,
      rgba(46, 16, 101, 0.8),
      rgba(75, 0, 130, 0.7),
      rgba(58, 21, 126, 0.8)
    );
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
    text-shadow: 0 0 8px rgba(139, 95, 255, 0.8);
    box-shadow: 
      0 0 0 1px rgba(139, 95, 255, 0.4),
      0 0 20px rgba(139, 95, 255, 0.3),
      0 8px 25px rgba(46, 16, 101, 0.5);
  }

  .button::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background: linear-gradient(135deg,
      rgba(139, 95, 255, 0.6),
      rgba(179, 136, 255, 0.5),
      rgba(255, 107, 157, 0.3)
    );
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .button:hover::before {
    scale: 3;
  }

  .button:hover {
    color: rgba(24, 24, 24, 0.95);
    scale: 1.1;
    box-shadow: 
      0 0 0 2px rgba(139, 95, 255, 1),
      0 0 30px rgba(139, 95, 255, 0.8),
      0 0 60px rgba(179, 136, 255, 0.6),
      0 20px 40px rgba(46, 16, 101, 0.7);
    border-color: rgba(179, 136, 255, 1);
    text-shadow: none;
  }

  .button:active {
    scale: 1;
  }

  /* Variant styles for different button types */
  .button.primary {
    background: linear-gradient(135deg,
      rgba(46, 16, 101, 0.95),
      rgba(75, 0, 130, 0.9),
      rgba(58, 21, 126, 0.95)
    );
    color: rgba(255, 255, 255, 0.98);
    border-color: rgba(179, 136, 255, 0.8);
    box-shadow: 
      0 0 0 1px rgba(179, 136, 255, 0.6),
      0 0 25px rgba(139, 95, 255, 0.4),
      0 10px 30px rgba(46, 16, 101, 0.6);
  }

  .button.primary::before {
    background: linear-gradient(135deg,
      rgba(179, 136, 255, 0.7),
      rgba(255, 107, 157, 0.5),
      rgba(139, 95, 255, 0.6)
    );
  }

  .button.primary:hover {
    box-shadow: 
      0 0 0 2px rgba(179, 136, 255, 1),
      0 0 40px rgba(179, 136, 255, 0.9),
      0 0 80px rgba(255, 107, 157, 0.6),
      0 25px 50px rgba(46, 16, 101, 0.8);
    border-color: rgba(255, 107, 157, 0.8);
  }

  .button.secondary {
    background: linear-gradient(135deg,
      rgba(46, 16, 101, 0.4),
      rgba(75, 0, 130, 0.35),
      rgba(58, 21, 126, 0.4)
    );
    color: rgba(179, 136, 255, 0.95);
    border-color: rgba(139, 95, 255, 0.7);
    box-shadow: 
      0 0 0 1px rgba(139, 95, 255, 0.3),
      0 0 20px rgba(139, 95, 255, 0.2),
      0 8px 25px rgba(46, 16, 101, 0.3);
  }

  .button.secondary::before {
    background: linear-gradient(135deg,
      rgba(139, 95, 255, 0.5),
      rgba(179, 136, 255, 0.4),
      rgba(255, 107, 157, 0.2)
    );
  }

  .button.secondary:hover {
    box-shadow: 
      0 0 0 2px rgba(139, 95, 255, 1),
      0 0 35px rgba(139, 95, 255, 0.7),
      0 0 70px rgba(179, 136, 255, 0.5),
      0 20px 40px rgba(46, 16, 101, 0.6);
    border-color: rgba(179, 136, 255, 0.9);
  }

  .button.outline {
    background: transparent;
    color: rgba(139, 95, 255, 0.9);
    border-color: rgba(139, 95, 255, 0.8);
    box-shadow: 
      0 0 0 1px rgba(139, 95, 255, 0.2),
      0 0 15px rgba(139, 95, 255, 0.1);
  }

  .button.outline::before {
    background: linear-gradient(135deg,
      rgba(139, 95, 255, 0.4),
      rgba(179, 136, 255, 0.35),
      rgba(255, 107, 157, 0.25)
    );
  }

  .button.outline:hover {
    color: rgba(24, 24, 24, 0.9);
    scale: 1.1;
    box-shadow: 
      0 0 0 2px rgba(139, 95, 255, 1),
      0 0 30px rgba(139, 95, 255, 0.6),
      0 0 60px rgba(179, 136, 255, 0.4),
      0 15px 35px rgba(46, 16, 101, 0.4);
    border-color: rgba(179, 136, 255, 1);
  }
`;

export default BrandButton;
