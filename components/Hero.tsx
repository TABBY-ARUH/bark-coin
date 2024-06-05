// src/components/Hero.tsx
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroTitle>Welcome to Bark Coin</HeroTitle>
    </HeroContainer>
  );
};

export default Hero;

