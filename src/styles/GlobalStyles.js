import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.7;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    background-image: 
      radial-gradient(at 0% 0%, ${props => props.theme.colors.primary}08 0px, transparent 50%),
      radial-gradient(at 50% 0%, ${props => props.theme.colors.secondary}05 0px, transparent 50%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.4s ease, color 0.4s ease;
    overflow-x: hidden;
  }

  ::selection {
    background: ${props => props.theme.colors.primary}33;
    color: ${props => props.theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  .glass-card {
    background: ${props => props.theme.colors.navBackground};
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid ${props => props.theme.colors.border};
  }

  .hero-section {
    background: ${props => props.theme.colors.headerGradient};
    color: white;
    padding: 8rem 0 6rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: background 0.5s ease;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.2;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .hero-content h1 {
    font-size: clamp(2rem, 8vw, 4.5rem);
    margin-bottom: 1.5rem;
    text-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .hero-content p {
    font-size: clamp(1rem, 3vw, 1.4rem);
    max-width: 700px;
    margin: 0 auto 3rem;
    opacity: 0.95;
    font-weight: 400;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
    flex-wrap: wrap;
  }

  .stat-card {
    background: rgba(255,255,255,0.15);
    padding: 2.5rem;
    border-radius: 24px;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.25);
    min-width: 220px;
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    display: block;
  }

  .stat-label {
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .main-content {
    max-width: 1240px;
    margin: 0 auto;
    padding: 6rem 2rem;
  }

  .section-intro {
    text-align: center;
    margin-bottom: 5rem;
  }

  .section-intro h2 {
    font-size: 2.8rem;
    color: ${props => props.theme.colors.accent};
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
  }

  .section-intro h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${props => props.theme.colors.primary};
    border-radius: 2px;
  }

  .section-intro p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
    max-width: 800px;
    margin: 0 auto;
  }

  .swipeable-content-section {
    background: ${props => props.theme.colors.cardBackground};
    padding: 4rem 2rem;
    border-radius: 24px;
    box-shadow: ${props => props.theme.colors.shadow};
    margin-bottom: 6rem;
    border: 1px solid ${props => props.theme.colors.border};
  }

  .slide-content h3 {
    font-size: 1.8rem;
    color: ${props => props.theme.colors.accent};
    margin-bottom: 1.5rem;
  }

  .age-groups-section {
    padding: 6rem 0;
  }

  .age-card {
    min-width: 300px;
    background: ${props => props.theme.colors.cardBackground};
    padding: 3rem 2.5rem;
    border-radius: 24px;
    text-align: center;
    box-shadow: ${props => props.theme.colors.shadow};
    border: 1px solid ${props => props.theme.colors.border};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .age-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    border-color: ${props => props.theme.colors.primary};
  }

  .age-card::before {
    display: none;
  }

  .cta-section {
    background: ${props => props.theme.colors.headerGradient};
    padding: 6rem 2rem;
    text-align: center;
    border-radius: 32px;
    margin: 4rem 0;
    color: white;
  }

  .cta-section h2 {
    color: white;
    font-size: 3rem;
  }

  .cta-section p {
    color: white;
    opacity: 0.9;
  }

  .cta-btn {
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 1rem 2rem;
    border-radius: 100px;
    text-decoration: none;
    font-weight: 800;
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  .cta-btn:hover {
    background: ${props => props.theme.colors.secondary};
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    color: white;
  }

  .cta-btn.secondary {
    background: transparent;
    color: ${props => props.theme.mode === 'dark' ? 'white' : props.theme.colors.primary};
    border: 2px solid ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.4)' : props.theme.colors.primary};
    box-shadow: none;
  }

  .cta-btn.secondary:hover {
    background: ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-5px);
  }

  .text-gradient {
    background: ${props => props.theme.colors.headerGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary}44;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary}88;
  }

  @media (max-width: 768px) {
    .main-content {
      padding: 4rem 1.5rem;
    }
    
    .section-intro h2 {
      font-size: 2rem;
    }

    .section-intro p {
      font-size: 1.05rem;
    }
    
    .stat-card {
      padding: 1.5rem;
      min-width: 130px;
    }

    .hero-stats {
      gap: 1rem;
    }

    .cta-section {
      padding: 4rem 1.5rem;
      margin: 2rem 0;
      border-radius: 20px;
    }

    .cta-section h2 {
      font-size: 2rem;
    }

    .age-groups-section {
      padding: 3rem 0;
    }
  }

  @media (max-width: 480px) {
    .main-content {
      padding: 3rem 1rem;
    }

    .section-intro h2 {
      font-size: 1.75rem;
    }

    .stat-number {
      font-size: 2.2rem;
    }

    .stat-card {
      padding: 1.25rem;
      min-width: 110px;
    }

    .cta-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default GlobalStyles;
