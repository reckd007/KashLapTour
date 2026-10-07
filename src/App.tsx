import { useState, useEffect, useCallback } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Packages from '@/components/Packages';
import Services from '@/components/Services';
import Destinations from '@/components/Destinations';
import Hotels from '@/components/Hotels';
import About from '@/components/About';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('kashlap-theme');
    if (saved === 'light') {
      setIsDark(false);
      document.body.classList.add('light');
    } else {
      setIsDark(true);
      document.body.classList.remove('light');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.body.classList.remove('light');
        localStorage.setItem('kashlap-theme', 'dark');
      } else {
        document.body.classList.add('light');
        localStorage.setItem('kashlap-theme', 'light');
      }
      return next;
    });
  }, []);

  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <>
      {!introDone && <IntroAnimation onComplete={handleIntroComplete} isDark={isDark} />}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main style={{ opacity: introDone ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <Hero isDark={isDark} />
        <Packages isDark={isDark} />
        <Services isDark={isDark} />
        <Destinations isDark={isDark} />
        <Hotels isDark={isDark} />
        <About isDark={isDark} />
        <Footer isDark={isDark} />
      </main>
      <FloatingWhatsApp />
    </>
  );
}

export default App;
