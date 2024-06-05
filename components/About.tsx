// src/components/About.tsx
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1rem;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Bark Coin</AboutTitle>
      <AboutText>
        Bark Coin is a community-centric cryptocurrency that prioritizes transparency, security, and rewarding loyalty.
      </AboutText>
    </AboutContainer>
  );
};

export default About;

