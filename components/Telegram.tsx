// src/components/Telegram.tsx
import React from 'react';
import styled from 'styled-components';

const TelegramContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const TelegramTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TelegramLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #0088cc;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #0077bb;
  }
`;

const Telegram: React.FC = () => {
  return (
    <TelegramContainer>
      <TelegramTitle>Join Our Telegram Community</TelegramTitle>
      <TelegramLink href="https://t.me/BarkCoinCommunity" target="_blank" rel="noopener noreferrer">
        Join Telegram
      </TelegramLink>
    </TelegramContainer>
  );
};

export default Telegram;


