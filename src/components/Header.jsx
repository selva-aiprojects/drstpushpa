import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.headerGradient};
  color: white;
  padding: 2rem 0;
  text-align: center;
  transition: background 0.5s ease;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Qualification = styled.p`
  font-size: 1.2rem;
  opacity: 0.95;
  font-weight: 300;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>Dr. S.T. Pushpa</Title>
        <Qualification>Pediatrician &amp; Child Specialist</Qualification>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
