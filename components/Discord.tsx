// src/components/Discord.tsx
import React from 'react';
import styled from 'styled-components';

const DiscordContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const DiscordTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const DiscordLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #7289da;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #5a6abf;
  }
`;

const Discord: React.FC = () => {
  return (
    <DiscordContainer>
      <DiscordTitle>Join Our Discord Server</DiscordTitle>
      <DiscordLink href="https://discord.gg/BarkCoin" target="_blank" rel="noopener noreferrer">
        Join Discord
      </DiscordLink>
    </DiscordContainer>
  );
};

export default Discord;

