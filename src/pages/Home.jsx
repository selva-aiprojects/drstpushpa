import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SwipeableSection from '../components/SwipeableSection';
import AgeGroupsSection from '../components/AgeGroupsSection';
import CTASection from '../components/CTASection';
import { useTheme } from '../context/ThemeContext';
import { FaStar, FaUsers, FaHeartbeat } from 'react-icons/fa';

const HomeContainer = styled.div`
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  background: ${props => props.theme.colors.background};
  padding: 10rem 0 16rem;
  margin-bottom: 6rem;
  
  @media (max-width: 1024px) {
    min-height: auto;
    padding: 10rem 0 4rem;
    margin-bottom: 0;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 8rem 0 3rem;
  }

  @media (max-width: 480px) {
    padding: 7rem 0 2rem;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: ${props => props.theme.colors.headerGradient};
  z-index: 1;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.3;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 60%;
    top: auto;
    bottom: 0;
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

const TextBlock = styled.div`
  color: ${props => props.theme.mode === 'light' ? props.theme.colors.text : 'white'};
  padding-right: 2rem;
  
  h1 {
    font-size: clamp(2.2rem, 6vw, 5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 2rem;
    letter-spacing: -2px;
    
    .accent {
      color: ${props => props.theme.colors.secondary};
    }
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    color: ${props => props.theme.mode === 'light' ? props.theme.colors.text : '#ffffff'};
    opacity: ${props => props.theme.mode === 'light' ? '0.8' : '0.95'};
    max-width: 600px;
    margin-bottom: 4rem;
    line-height: 1.6;

    @media (max-width: 1024px) {
      margin: 0 auto 2.5rem;
    }
  }

  @media (max-width: 1024px) {
    padding-right: 0;
  }

  @media (max-width: 768px) {
    h1 {
      letter-spacing: -1px;
      margin-bottom: 1.5rem;
    }
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  border-radius: 40px;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100%;
  
  img {
    width: 100%;
    height: auto;
    max-height: 700px;
    object-fit: contain;
    display: block;
    border-radius: 40px;
    box-shadow: 0 40px 100px rgba(0,0,0,0.3);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.2);
    border-radius: 40px;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    height: auto;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const FloatingStats = styled.div`
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1100px;
  background: ${props => props.theme.colors.cardBackground}ee;
  padding: 3.5rem 2rem;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  box-shadow: 0 25px 60px rgba(0,0,0,0.08);
  border: 1px solid rgba(255,255,255,0.2);
  z-index: 10;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  @media (max-width: 1024px) {
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;
    width: calc(100% - 4rem);
    margin: 2rem 2rem 4rem;
    padding: 2.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2.5rem);
    margin: 1.5rem 1.25rem 3rem;
    padding: 2rem 1.25rem;
    gap: 1.5rem;
    border-radius: 20px;
  }

   @media (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: calc(100% - 2rem);
    margin: 1rem 1rem 2rem;
    padding: 1.5rem 0.5rem;
    gap: 1.5rem 0.5rem;
    border-radius: 20px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1rem;
  flex: 1;
  min-width: 120px;
  
  @media (max-width: 480px) {
    min-width: 140px;
    padding: 0 0.5rem;
  }
  
  .icon-wrap {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}22, ${props => props.theme.colors.secondary}22);
    color: ${props => props.theme.colors.primary};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;
  }

  &:hover .icon-wrap {
    transform: scale(1.1) rotate(5deg);
  }

  .number {
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 800;
    line-height: 1;
    background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  .label {
    font-size: clamp(0.8rem, 2vw, 1.1rem);
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    gap: 1rem;
    min-width: 100%;
    padding: 0.5rem 0;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    justify-content: center;

    &:last-child {
      border-bottom: none;
    }

    .icon-wrap {
      width: 44px;
      height: 44px;
      font-size: 1.2rem;
      margin-bottom: 0;
    }
  }
`;
const IntroSection = styled.section`
  padding: 8rem 4rem 6rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const WelcomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const WelcomeText = styled.div`
  h2 {
    font-size: clamp(2rem, 5vw, 4rem);
    color: ${props => props.theme.colors.accent};
    margin-bottom: 2rem;
    line-height: 1.15;
  }
  
  p {
    font-size: clamp(1rem, 2.5vw, 1.35rem);
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
    line-height: 1.8;
    margin-bottom: 3rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  }

  .icon-circle {
    width: 50px;
    height: 50px;
    background: ${props => props.theme.colors.primary}11;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.accent};
  }

  p {
    font-size: 1.05rem;
    line-height: 1.5;
    margin-bottom: 0;
  }
`;

const Home = () => {
  const { theme } = useTheme();
  const vaccinationSlides = [
    {
      image: '/service_4.png',
      title: 'IAP Protocol Vaccination',
      description: 'Following the latest Indian Academy of Pediatrics (IAP) guidelines for comprehensive childhood immunization.'
    },
    {
      image: '/service_5.jpg',
      title: 'Safety First Monitoring',
      description: 'Sterile, safe environment with dedicated post-vaccination monitoring for your peace of mind.'
    }
  ];

  const growthSlides = [
    {
      image: '/service_7.jpg',
      title: 'Developmental Screening',
      description: 'Regular assessment of motor, social, and cognitive milestones to ensure on-track development.'
    }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroBackground />
        <HeroContent>
          <TextBlock>

            <h1>Nurturing <br /> <span className="accent">Health</span> & Magic</h1>
            <p>
              Premium pediatric care designed for the most precious people in your life. Experience world-class medical excellence.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/contact" className="cta-btn">Book Consultation</a>
              <a href="/about" className="cta-btn secondary">Our Story</a>
            </div>
          </TextBlock>
          <HeroImageWrapper className="floating">
            <img src="/Pediatric Care.jpeg" alt="Kidz Clinic" />
          </HeroImageWrapper>
        </HeroContent>
        <FloatingStats>
          <StatItem>
            <div className="icon-wrap"><FaStar /></div>
            <div className="number">20+</div>
            <div className="label">Years of Care</div>
          </StatItem>
          <StatItem>
            <div className="icon-wrap"><FaUsers /></div>
            <div className="number">10K+</div>
            <div className="label">Happy Parents</div>
          </StatItem>
          <StatItem>
            <div className="icon-wrap"><FaHeartbeat /></div>
            <div className="number">24/7</div>
            <div className="label">Expert Support</div>
          </StatItem>
        </FloatingStats>
      </HeroSection>

      <IntroSection>
        <WelcomeGrid>
          <WelcomeText>
            <h2 className="text-gradient">Complete Child Care Under One Roof</h2>
            <p>
              Our facility isn't just a clinic; it's a sanctuary for healing. We combine cutting-edge pediatric science with a compassionate, child-centric approach that makes every visit a positive experience.
            </p>
            <FeatureGrid>
              <FeatureCard>
                <div className="icon-circle">⚕️</div>
                <h4>Holistic Medicine</h4>
                <p>Treating the whole child, not just the symptoms.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-circle">✨</div>
                <h4>Child-Friendly</h4>
                <p>Designed to put kids at ease and reduce anxiety.</p>
              </FeatureCard>
            </FeatureGrid>
          </WelcomeText>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/assets/hero-pediatric-care.png"
              alt="Pediatric Care Medical Consultation"
              style={{ width: '100%', maxWidth: '600px', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', display: 'block' }}
            />
          </div>
        </WelcomeGrid>
      </IntroSection>

      <div style={{ background: theme.mode === 'light' ? '#f8fafc' : theme.colors.cardBackground, padding: '4rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <SwipeableSection title="Essential Vaccination" slides={vaccinationSlides} sectionId="vaccination" />
          <SwipeableSection title="Growth Monitoring" slides={growthSlides} sectionId="growth" />
        </div>
      </div>

      <div style={{ padding: '4rem 0' }}>
        <AgeGroupsSection />
      </div>

      <CTASection />
    </HomeContainer >
  );
};

export default Home;
