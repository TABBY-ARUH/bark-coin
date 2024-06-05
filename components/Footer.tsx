// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

const Footer: React.FC = () => {
  return <FooterContainer>© 2024 Bark Coin. All rights reserved.</FooterContainer>;
};

export default Footer;


