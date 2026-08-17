import React from 'react';
import styled from 'styled-components';
import CTASection from '../components/CTASection';

const BlogContainer = styled.div`
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

const ArticleGrid = styled.section`
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

const ArticleCard = styled.article`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 32px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-12px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 25px 50px rgba(0,0,0,0.06);
  }

  .image-box {
    height: 280px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }

  &:hover .image-box img {
    transform: scale(1.1);
  }

  .content-box {
    padding: 3rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .meta {
      color: ${props => props.theme.colors.primary};
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-size: 0.85rem;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      color: ${props => props.theme.colors.accent};
      line-height: 1.3;
    }

    p {
      opacity: 0.7;
      line-height: 1.7;
      margin-bottom: 2rem;
      font-size: 1.1rem;
      flex-grow: 1;
    }

    .read-more {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: gap 0.3s;

      &:hover {
        gap: 0.8rem;
      }
    }
  }
`;

const posts = [
  {
    title: 'Weather & Child Vulnerability',
    meta: 'Aug 2024 • Alert',
    excerpt: 'Doctors report spike in viral infections among children due to shifting humidity in Bengaluru.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'Antibiotic Overuse Warning',
    meta: 'Apr 2025 • Advice',
    excerpt: 'Experts urge parents to avoid self-medicating viral infections to prevent antimicrobial resistance.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop',
    url: '#'
  },
  {
    title: 'Autoimmune Trends in Kids',
    meta: 'Jan 2025 • Research',
    excerpt: 'Post-pandemic lifestyle shifts contributing to 20% increase in pediatric autoimmune cases.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    url: '#'
  },
];

const Blog = () => {
  return (
    <BlogContainer>
      <HeroSection>
        <HeroBackground />
        <HeroContent>
          <TextBlock>
            <h1>Pediatric <br /> <span className="accent">Insights</span></h1>
            <p>
              Expert medical updates, wellness strategies, and parent guides curated for a healthier tomorrow.
            </p>
          </TextBlock>
          <div className="floating" style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.3)', height: 'clamp(280px, 50vw, 500px)' }}>
            <img src="/blog_hero.png" alt="Dr. S.T. Pushpa - Pediatric Insights" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
        </HeroContent>
      </HeroSection>

      <ArticleGrid>
        {posts.map((post, index) => (
          <ArticleCard key={index}>
            <div className="image-box">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="content-box">
              <div className="meta">{post.meta}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={post.url} className="read-more">Read Insight →</a>
            </div>
          </ArticleCard>
        ))}
      </ArticleGrid>

      <CTASection />
    </BlogContainer>
  );
};

export default Blog;
