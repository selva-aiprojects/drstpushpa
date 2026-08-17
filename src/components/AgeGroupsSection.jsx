import React from 'react';
import styled from 'styled-components';

const AgeGroupsSectionContainer = styled.div`
  background: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  margin-bottom: 3rem;
  border: 1px solid rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
    border-radius: 12px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${props => props.theme.colors.accent};
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${props => props.theme.colors.primary};
    border-radius: 2px;
  }
`;

const AgeCardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  padding: 1rem 0;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #00897b;
    border-radius: 10px;
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const AgeCard = styled.div`
  min-width: 280px;
  background: ${props => props.theme.colors.cardBackground};
  padding: 3rem 2rem;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.colors.headerGradient};
  }
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    border-color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: 768px) {
    min-width: 250px;
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    min-width: 220px;
    padding: 1rem;
  }
`;

const AgeCardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: #0f172a;
  margin-bottom: 1.5rem;
`;

const AgeCardDescription = styled.p`
  color: #1e293b;
  opacity: 0.85;
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const AgeCardQuote = styled.div`
  font-style: italic;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  background: ${props => props.theme.colors.primary}08;
  padding: 1.2rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  font-size: 0.95rem;
`;

const ageGroups = [
  {
    title: 'Newborns (0-2 months)',
    description: 'Specialized care for the earliest stages of life, focusing on feeding, sleep patterns, and early development milestones.',
    quote: 'The first few months are crucial for establishing healthy patterns.'
  },
  {
    title: 'Infants (2-12 months)',
    description: 'Comprehensive care during rapid growth and development, including vaccinations, nutrition, and milestone tracking.',
    quote: 'Every month brings new discoveries and developments.'
  },
  {
    title: 'Toddlers (1-3 years)',
    description: 'Supporting independence and learning while ensuring proper nutrition, safety, and developmental progress.',
    quote: 'Toddlers are learning to explore their world safely.'
  },
  {
    title: 'Preschoolers (3-5 years)',
    description: 'Preparing for school readiness with focus on social skills, learning abilities, and continued health monitoring.',
    quote: 'Building the foundation for lifelong learning and health.'
  },
  {
    title: 'School Age (5-12 years)',
    description: 'Supporting academic success and healthy habits while monitoring growth and addressing any health concerns.',
    quote: 'Balancing school life with healthy development.'
  },
  {
    title: 'Adolescents (12-18 years)',
    description: 'Guiding through puberty and teenage years with comprehensive health care and emotional support.',
    quote: 'Supporting the transition to adulthood with care and understanding.'
  }
];

const AgeGroupsSection = () => {
  return (
    <AgeGroupsSectionContainer>
      <SectionTitle>Age-Specific Care</SectionTitle>
      <AgeCardsContainer>
        {ageGroups.map((group, index) => (
          <AgeCard key={index}>
            <AgeCardTitle>{group.title}</AgeCardTitle>
            <AgeCardDescription>{group.description}</AgeCardDescription>
            <AgeCardQuote>"{group.quote}"</AgeCardQuote>
          </AgeCard>
        ))}
      </AgeCardsContainer>
    </AgeGroupsSectionContainer>
  );
};

export default AgeGroupsSection;
