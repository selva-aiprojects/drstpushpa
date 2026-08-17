import React from 'react';
import styled from 'styled-components';
import CTASection from '../components/CTASection';

const ServicesContainer = styled.div`
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
    padding: 10rem 0 6rem;
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
    margin-bottom: 3rem;
    line-height: 1.6;

    @media (max-width: 1024px) {
      margin: 0 auto 2.5rem;
    }
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
  height: auto;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 500px;
  }

  @media (max-width: 1024px) {
    max-width: 700px;
    margin: 0 auto;

    img {
      max-height: 400px;
    }
  }

  @media (max-width: 480px) {
    border-radius: 24px;

    img {
      max-height: 280px;
    }
  }
`;

const ServicesGrid = styled.section`
  max-width: 1400px;
  margin: 5rem auto;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
    gap: 2rem;
    margin: 3rem auto;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    gap: 1.5rem;
    margin: 2rem auto;
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 32px;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-12px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 25px 50px rgba(0,0,0,0.06);
  }

  .service-image {
    height: 240px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: ${props => props.theme.colors.background};
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 1s ease-in-out;
    }

    .slider-dots {
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 10;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255,255,255,0.5);
      border: 1px solid rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }

    .dot.active {
      background: white;
      transform: scale(1.3);
      box-shadow: 0 0 10px rgba(0,81,255,0.5);
    }
  }

  &:hover .service-image img {
    transform: scale(1.1);
  }

  .service-content {
    padding: 3rem;
    flex-grow: 1;
  }

  .icon-box {
    width: 60px;
    height: 60px;
    background: ${props => props.theme.colors.primary}11;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.primary};
    transition: all 0.3s ease;
  }

  &:hover .icon-box {
    background: ${props => props.theme.colors.primary};
    color: white;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.accent};
  }

  p {
    opacity: 0.7;
    line-height: 1.7;
    margin-bottom: 2.5rem;
    font-size: 1.05rem;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 0.75rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 600;
      color: ${props => props.theme.colors.text};
      border-bottom: 1px solid #f1f5f9;
      
      &::before {
        content: '✓';
        color: ${props => props.theme.colors.secondary};
        font-weight: bold;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

const BenefitSection = styled.section`
  padding: 6rem 4rem;
  background: ${props => props.theme.mode === 'light' ? '#f1f5f9' : props.theme.colors.cardBackground};

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const BenefitGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 3rem;
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: block;
  }
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.accent};
  }
  
  p {
    opacity: 0.7;
    line-height: 1.6;
  }
`;

const ServiceImageSlider = ({ images, title }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="service-image">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} - slide ${idx + 1}`}
          style={{
            position: idx === 0 ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            opacity: idx === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: idx === current ? 1 : 0
          }}
        />
      ))}
      <div className="slider-dots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

const servicesData = [
  {
    icon: '🍼',
    title: 'Neonatology & Infant Care',
    images: [
      '/service_1.jpg',
      '/service_2.jpg'
    ],
    description: 'Sophisticated neonatal health screening and comprehensive lactation support for your newborn.',
    features: ['Electronic Health Monitoring', 'Lactation Consulting', 'Safety Screenings', 'Nutritional Roadmap']
  },
  {
    icon: '🛡️',
    title: 'Advanced Immunization',
    images: [
      '/service_4.png',
      '/service_5.jpg'
    ],
    description: 'Precision vaccination protocols following global IAP standards for robust immunity.',
    features: ['Painless Delivery Systems', 'Automated Reminder Logs', 'Global Vaccine Standards', 'Catch-up Programs']
  },
  {
    icon: '📈',
    title: 'Growth & Development',
    images: [
      '/service_7.jpg',
      '/service_8.jpg'
    ],
    description: 'Deep physical and cognitive assessments to ensure every milestone is reached.',
    features: ['Developmental Profiling', 'Social Skill Monitoring', 'Early Intervention', 'Puberty Management']
  },
  {
    icon: '🥗',
    title: 'Clinical Nutrition',
    images: [
      '/service_10.webp',
      '/service_11.jpg'
    ],
    description: 'Evidence-based dietary roadmaps for metabolic health and robust growth.',
    features: ['Obesity & BMI Tracking', 'Vitamin Deficiency Care', 'Food Allergy Planning', 'Metabolic Screening']
  },
  {
    icon: '💨',
    title: 'Asthma & Allergy',
    images: [
      '/service_14.jpg',
      '/service_14.webp'
    ],
    description: 'Advanced pulmonary diagnostics and environmental allergy management.',
    features: ['Pulmonary Function Test', 'Allergen Identification', 'Asthma Action Plans', 'Immunotherapy']
  },
  {
    icon: '🌙',
    title: 'Pediatric Sleep',
    images: [
      '/service_2.jpg',
      '/service_3.png'
    ],
    description: 'Specialized interventions to resolve sleep disruptions and support restorative rest.',
    features: ['Sleep Apnea Screening', 'Restorative Sleep Hygiene', 'Circadian Adjustments', 'Insomnia Solutions']
  },
];

const Services = () => {
  return (
    <ServicesContainer>
      <HeroSection>
        <HeroBackground />
        <HeroContent>
          <TextBlock>
            <h1>Pediatric <br /> <span className="accent">Excellence</span></h1>
            <p>
              World-class clinical precision blended with compassionate care. Scaling from infancy to adolescence with specialized medical attention.
            </p>
          </TextBlock>
          <HeroImageWrapper className="floating">
            <img src="/service_12.png" alt="Pediatric Clinical Excellence" />
          </HeroImageWrapper>
        </HeroContent>
      </HeroSection>

      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard key={index}>
            {service.images && service.images.length > 0 && (
              <ServiceImageSlider images={service.images} title={service.title} />
            )}
            <div className="service-content">
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <BenefitSection>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>The Service Difference</h2>
        </div>
        <BenefitGrid>
          <BenefitCard>
            <span className="icon">🏆</span>
            <h4>Expertise</h4>
            <p>15+ years of specialized clinical experience with global certifications.</p>
          </BenefitCard>
          <BenefitCard>
            <span className="icon">🎯</span>
            <h4>Holistic</h4>
            <p>Treating the whole child, integrating nutrition, sleep, and emotional health.</p>
          </BenefitCard>
          <BenefitCard>
            <span className="icon">🚀</span>
            <h4>Modern</h4>
            <p>Evidence-based medicine and state-of-the-art diagnostic tools.</p>
          </BenefitCard>
        </BenefitGrid>
      </BenefitSection>

      <CTASection />
    </ServicesContainer>
  );
};

export default Services;
