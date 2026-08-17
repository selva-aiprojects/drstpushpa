import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SwipeableSectionContainer = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 4rem;
  border-radius: 32px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.04);
  margin-bottom: 4rem;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 80px rgba(0,0,0,0.08);
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.2rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 3rem;
  text-align: center;
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

const SwipeableContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`;

const SwipeableContent = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.05);
`;

const SwipeSlide = styled.div`
  min-width: 100%;
  transition: transform 0.5s ease;
  display: ${props => props.active ? 'block' : 'none'};
`;

const SlideContent = styled.div`
  padding: 2rem;
  text-align: center;
`;

const SlideImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
`;

const SlideTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  color: #0f172a;
  margin-bottom: 1.5rem;
`;

const SlideDescription = styled.p`
  color: #1e293b;
  opacity: 0.8;
  line-height: 1.8;
  max-width: 650px;
  margin: 0 auto;
  font-size: 1.1rem;
`;

const SwipeArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s;
  z-index: 10;
  
  &:hover {
    background: white;
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const SwipeArrowLeft = styled(SwipeArrow)`
  left: -25px;
  
  @media (max-width: 768px) {
    left: -20px;
  }
`;

const SwipeArrowRight = styled(SwipeArrow)`
  right: -25px;
  
  @media (max-width: 768px) {
    right: -20px;
  }
`;

const SwipeDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
`;

const SwipeDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? props.theme.colors.primary : '#e2e8f0'};
  cursor: pointer;
  transition: all 0.3s;
  transform: ${props => props.active ? 'scale(1.2)' : 'scale(1)'};
  border: none;
  padding: 0;
`;

const SwipeableSection = ({ title, slides, sectionId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < slides.length) {
      setCurrentSlide(newSlide);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        changeSlide(-1);
      } else if (e.key === 'ArrowRight') {
        changeSlide(1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <SwipeableSectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SwipeableContainer>
        <SwipeArrowLeft onClick={() => changeSlide(-1)} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </SwipeArrowLeft>

        <SwipeableContent>
          {slides.map((slide, index) => (
            <SwipeSlide key={index} active={index === currentSlide}>
              <SlideContent>
                <SlideImage src={slide.image} alt={slide.title} />
                <SlideTitle>{slide.title}</SlideTitle>
                <SlideDescription>{slide.description}</SlideDescription>
              </SlideContent>
            </SwipeSlide>
          ))}
        </SwipeableContent>

        <SwipeArrowRight onClick={() => changeSlide(1)} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </SwipeArrowRight>
      </SwipeableContainer>

      <SwipeDots>
        {slides.map((_, index) => (
          <SwipeDot
            key={index}
            active={index === currentSlide}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </SwipeDots>
    </SwipeableSectionContainer>
  );
};

export default SwipeableSection;
