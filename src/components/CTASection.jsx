import React from 'react';
import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';

const CTASectionContainer = styled.div`
  background: ${props => props.theme.colors.headerGradient};
  padding: 6rem 4rem;
  text-align: center;
  border-radius: 40px;
  margin: 6rem 2rem;
  color: white;
  box-shadow: 0 30px 60px rgba(0, 129, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    margin: 4rem 1rem;
    border-radius: 24px;
  }
`;

const CTATitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.3rem;
  color: white;
  opacity: 0.9;
  margin-bottom: 3.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled.a`
  background: ${props => props.secondary ? 'transparent' : 'white'};
  color: ${props => props.secondary ? 'white' : props.theme.colors.primary};
  padding: 1.25rem 2.5rem;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: ${props => props.secondary ? '2px solid rgba(255,255,255,0.4)' : 'none'};
  box-shadow: ${props => props.secondary ? 'none' : '0 10px 25px rgba(0,0,0,0.1)'};
  
  &:hover {
    background: ${props => props.secondary ? 'rgba(255,255,255,0.1)' : '#f8fafc'};
    color: ${props => props.secondary ? 'white' : props.theme.colors.primary};
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    border-color: white;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1.25rem 1.5rem;
  }
`;

const CTASection = () => {
  return (
    <CTASectionContainer>
      <CTATitle>Ready to Schedule Your Child's Visit?</CTATitle>
      <CTADescription>
        Book an appointment with Dr. S.T. Pushpa for expert pediatric care and guidance. We're here to support your child's health journey every step of the way.
      </CTADescription>
      <CTAButtons>
        <CTAButton
          href="https://wa.me/919940636769"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width="20"
            height="20"
          />
          Book Appointment on WhatsApp
        </CTAButton>
        <CTAButton
          href="/contact"
          secondary
        >
          <FaPhone /> Contact Information
        </CTAButton>
      </CTAButtons>
    </CTASectionContainer>
  );
};

export default CTASection;
