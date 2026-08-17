import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaWater } from 'react-icons/fa';

const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 30px;
  padding: 0.25rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  gap: 0.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  }
`;

const ModeButton = styled.button`
  background: ${props => props.active ? (props.theme.mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)') : 'transparent'};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.active ? 1 : 0.6};

  &:hover {
    background: ${props => !props.active ? (props.theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)') : ''};
    opacity: 1;
    transform: ${props => !props.active ? 'translateY(-2px)' : 'none'};
  }

  svg {
    font-size: 1.1rem;
    color: ${props => props.active ? props.iconColor : 'inherit'};
    transition: all 0.3s ease;
  }
`;

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SwitcherContainer>
      <ModeButton
        active={theme.mode === 'light'}
        onClick={() => toggleTheme('light')}
        title="Light Mode"
        iconColor="#fdb813"
        aria-label="Toggle Light Mode"
      >
        <FaSun />
      </ModeButton>
      <ModeButton
        active={theme.mode === 'dark'}
        onClick={() => toggleTheme('dark')}
        title="Dark Mode"
        iconColor="#9333ea"
        aria-label="Toggle Dark Mode"
      >
        <FaMoon />
      </ModeButton>
      <ModeButton
        active={theme.mode === 'blue'}
        onClick={() => toggleTheme('blue')}
        title="Ocean Mode"
        iconColor="#0ea5e9"
        aria-label="Toggle Ocean Mode"
      >
        <FaWater />
      </ModeButton>
    </SwitcherContainer>
  );
};

export default ThemeSwitcher;
