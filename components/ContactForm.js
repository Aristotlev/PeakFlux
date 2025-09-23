'use client';

import { useState } from 'react';
import PricingButton from './PricingButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We\'ll get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {status.message && (
        <div className={`form-status ${status.type}`} style={{
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1rem',
          textAlign: 'center',
          backgroundColor: status.type === 'success' 
            ? 'rgba(0, 255, 0, 0.1)' 
            : 'rgba(255, 0, 0, 0.1)',
          border: `1px solid ${status.type === 'success' 
            ? 'rgba(0, 255, 0, 0.3)' 
            : 'rgba(255, 0, 0, 0.3)'}`,
          color: status.type === 'success' 
            ? '#00ff88' 
            : '#ff6b6b'
        }}>
          {status.message}
        </div>
      )}
      
      <div className="form-group">
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          required 
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      
      <div className="form-group">
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          required 
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      
      <div className="form-group">
        <input 
          type="text" 
          name="subject"
          placeholder="Subject" 
          required 
          value={formData.subject}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      
      <div className="form-group">
        <textarea 
          name="message"
          placeholder="Your Message" 
          rows="5" 
          required
          value={formData.message}
          onChange={handleChange}
          disabled={isLoading}
        ></textarea>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%' 
      }}>
        <PricingButton 
          type="submit" 
          variant="cyan"
          disabled={isLoading}
          style={{
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </PricingButton>
      </div>
    </form>
  );
};

export default ContactForm;
