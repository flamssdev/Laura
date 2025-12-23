
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Empathy from './components/Empathy';
import Services from './components/Services';
import Differentials from './components/Differentials';
import CastrationFocus from './components/CastrationFocus';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />
      <main>
        <Hero />
        <Empathy />
        <Services />
        <Differentials />
        <CastrationFocus />
        <Gallery />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
