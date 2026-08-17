import React from 'react';
import styled from 'styled-components';

const AppointmentContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;

const AppointmentButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #25D366;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  transition: all 0.3s;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    background: #128C7E;
  }
  
  img {
    width: 20px;
    height: 20px;
  }
  
  .phone-number {
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    
    .phone-number {
      display: none;
    }
  }
`;

const WhatsAppButton = () => {
  return (
    <AppointmentContainer>
      <AppointmentButton
        href="https://wa.me/919566293322"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
        />
        For Appointment <span className="phone-number">9566293322</span>
      </AppointmentButton>
    </AppointmentContainer>
  );
};

export default WhatsAppButton;
