// src/App.tsx
import React, { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Hero from './components/Hero';
import About from './components/About';
import Telegram from './components/Telegram';
import Discord from './Discord.tsx'
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'telegram':
        return <Telegram />;
      case 'discord':
        return <Discord />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <GlobalStyles />
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
        <button onClick={() => setCurrentPage('telegram')}>Telegram</button>
        <button onClick={() => setCurrentPage('discord')}>Discord</button>
      </nav>
      {renderPage()}
      <Footer />
    </>
  );
};

export default App;
