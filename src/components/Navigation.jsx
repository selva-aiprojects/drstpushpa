import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars, FaTimes, FaWhatsapp, FaHome, FaUserMd, FaStethoscope, FaPen, FaPhoneAlt } from 'react-icons/fa';

const NavContainer = styled.nav`
  background: ${props => props.$scrolled ? props.theme.colors.navBackground : (props.theme.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(15, 23, 42, 0.4)')};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${props => props.$scrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${props => props.$scrolled ? '0.75rem 0' : '1.2rem 0'};
  border-bottom: 1px solid ${props => props.$scrolled ? props.theme.colors.border : 'rgba(255, 255, 255, 0.1)'};
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

const Brand = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  
  .branding {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  
  .name {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 800;
    color: ${props => props.$scrolled ? props.theme.colors.primary : (props.theme.mode === 'light' ? props.theme.colors.text : 'white')};
    line-height: 1;
    letter-spacing: -1px;
    transition: color 0.3s ease;
  }
  
  .tagline {
    font-size: 0.65rem;
    color: ${props => props.$scrolled ? props.theme.colors.secondary : (props.theme.mode === 'light' ? props.theme.colors.secondary : '#4dd0e1')};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.9;
    white-space: nowrap;
    line-height: 1.2;
  }
  
  .title-tag {
    font-size: 0.55rem;
    color: ${props => props.$scrolled ? props.theme.colors.secondary : (props.theme.mode === 'light' ? props.theme.colors.secondary : '#4dd0e1')};
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    opacity: 0.8;
    white-space: nowrap;
    line-height: 1;
    margin-top: 1px;
  }
  
  .divider {
    width: 2px;
    height: 35px;
    background: ${props => props.$scrolled ? props.theme.colors.primary : (props.theme.mode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)')};
    border-radius: 4px;
    transition: background 0.3s ease;
  }
  
  .subtitle {
    font-size: 1.15rem;
    color: ${props => props.theme.colors.highlight}; 
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    .divider { display: block; height: 25px; margin: 0 0.5rem; }
    .subtitle { display: block; font-size: 0.85rem; }
    .tagline { font-size: 0.55rem; }
    .title-tag { font-size: 0.45rem; letter-spacing: 0.4px; }
    .name { font-size: 1rem; }
  }

  @media (max-width: 480px) {
    .name { font-size: 0.95rem; }
    .subtitle { font-size: 0.75rem; }
    .divider { height: 20px; margin: 0 0.4rem; }
    gap: 0.5rem;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const AppointmentCTA = styled.a`
  background: ${props => props.$scrolled ? props.theme.colors.primary : 'white'};
  color: ${props => props.$scrolled ? 'white' : props.theme.colors.primary};
  padding: 0.9rem 1.8rem;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0, 129, 255, 0.2);
    filter: brightness(1.1);
  }

  svg { font-size: 1.2rem; }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mode === 'light' ? props.theme.colors.text : 'white'};
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s;
  position: relative;
  opacity: 0.8;
  
  &:hover, &.active {
    opacity: 1;
    color: ${props => props.theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 3px;
    background: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  color: ${props => props.$scrolled
    ? props.theme.colors.text
    : (props.theme.mode === 'light' ? props.theme.colors.text : 'white')};
  cursor: pointer;
  padding: 0.25rem;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.$isOpen ? '0' : '-110%'};
  width: min(85%, 400px);
  height: 100vh;
  background: ${props => props.theme.mode === 'light'
    ? 'rgba(255, 255, 255, 0.9)'
    : 'rgba(15, 23, 42, 0.9)'};
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
  box-shadow: ${props => props.$isOpen ? '-20px 0 80px rgba(0,0,0,0.3)' : 'none'};
  overflow-y: auto;

  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    
    .mobile-branding {
      display: flex;
      flex-direction: column;
      gap: 2px;
      
      .dr-name {
        font-weight: 800;
        font-size: 1.1rem;
        color: ${props => props.theme.colors.primary};
        letter-spacing: -0.5px;
      }
      .dr-tag {
        font-size: 0.6rem;
        font-weight: 700;
        color: ${props => props.theme.colors.secondary};
        text-transform: uppercase;
      }
    }
  }

  .nav-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .nav-item {
    opacity: ${props => props.$isOpen ? '1' : '0'};
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(30px)'};
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    ${props => [...Array(12)].map((_, i) => `
      &:nth-child(${i + 1}) { transition-delay: ${0.1 + i * 0.05}s; }
    `)}
    
    a {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1rem 1.25rem;
      border-radius: 16px;
      text-decoration: none;
      color: ${props => props.theme.colors.text};
      font-weight: 700;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      background: transparent;

      &.active {
        background: ${props => props.theme.colors.primary}12;
        color: ${props => props.theme.colors.primary};
      }

      .icon-circle {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        background: ${props => props.theme.colors.primary}15;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

const CloseButton = styled.button`
  background: ${props => props.theme.mode === 'light' ? '#f1f5f9' : '#1e293b'};
  border: none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: rotate(90deg);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(8px);
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.4s ease;
  z-index: 1000;
`;

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaUserMd /> },
    { path: '/services', label: 'Services', icon: <FaStethoscope /> },
    { path: '/blog', label: 'Blog', icon: <FaPen /> },
    { path: '/contact', label: 'Contact', icon: <FaPhoneAlt /> }
  ];

  return (
    <>
      <NavContainer $scrolled={scrolled}>
        <NavContent>
          <Brand to="/" $scrolled={scrolled}>
            <div className="branding">
              <span className="name">Dr. S.T. Pushpa</span>
              <span className="title-tag">Pediatrician &amp; Child Specialist</span>
            </div>
            <div className="divider"></div>
            <span className="subtitle">Kidz Clinic</span>
          </Brand>

          <DesktopMenu>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                $scrolled={scrolled}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
            <ThemeSwitcher />
            <AppointmentCTA
              href="https://wa.me/919566293322"
              target="_blank"
              $scrolled={scrolled}
            >
              <FaWhatsapp /> Book Appointment
            </AppointmentCTA>
          </DesktopMenu>

          <MobileMenuButton $scrolled={scrolled} onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars />
          </MobileMenuButton>
        </NavContent>
      </NavContainer>

      <Overlay $isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)} />
      <MobileMenu $isOpen={isMobileMenuOpen}>
        <div className="menu-header">
          <div className="mobile-branding">
            <span className="dr-name">DR. S.T. PUSHPA</span>
            <span className="dr-tag">Pediatrician &amp; Child Specialist</span>
          </div>
          <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
            <FaTimes size={18} />
          </CloseButton>
        </div>

        <div className="nav-group">
          {navItems.map((item) => (
            <div key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="icon-circle">{item.icon}</div>
                <span>{item.label}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="nav-item" style={{ marginTop: '2.5rem' }}>
          <AppointmentCTA
            href="https://wa.me/919566293322"
            target="_blank"
            $scrolled={true}
            style={{
              justifyContent: 'center',
              padding: '1.25rem',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
              color: 'white',
              boxShadow: '0 15px 35px rgba(18, 140, 126, 0.3)'
            }}
          >
            <FaWhatsapp size={24} /> Book Appointment
          </AppointmentCTA>
        </div>

        <div className="nav-item" style={{ marginTop: 'auto', borderTop: `1px solid ${props => props.theme.colors.border}`, paddingTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px' }}>Switch Theme</span>
            <ThemeSwitcher />
          </div>
        </div>
      </MobileMenu>
    </>
  );
};

export default Navigation;
