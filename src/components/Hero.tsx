import { useEffect, useState } from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import Leaves from '@/components/Leaves';

interface Props {
  isDark: boolean;
}

const HERO_IMG = 'https://images.pexels.com/photos/25786556/pexels-photo-25786556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080';

export default function Hero({ isDark }: Props) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
          transition: 'transform 0.05s linear',
        }}
      >
        <img
          src={HERO_IMG}
          alt="Kashmir Dal Lake mountains"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.85) 100%)'
              : 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.85) 100%)',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              background: '#00A86B',
              opacity: 0.15 + Math.random() * 0.25,
              animation: `floatParticle ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Falling 3D leaves — only visible while hero is in view */}
      <Leaves visible={scrollY < 500} />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          transform: `translateY(${scrollY * -0.15}px)`,
          opacity: Math.max(0, 1 - scrollY / 500),
        }}
      >
        <div className="mb-8 flex justify-center animate-fadeInUp">
          <img
            src="/images/42P09-removebg-preview.png"
            alt="Kash Lap Logo"
            className="w-20 h-20 lg:w-24 lg:h-24 object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 30px rgba(0,168,107,0.4))' }}
          />
        </div>

        <p
          className="text-sm sm:text-base tracking-[0.3em] uppercase font-light mb-4 animate-fadeInUp"
          style={{ color: '#00A86B', animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Welcome to Paradise
        </p>

        <h1
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fadeInUp"
          style={{
            color: isDark ? '#fff' : '#0A0A0A',
            textShadow: isDark ? '0 4px 30px rgba(0,0,0,0.6)' : '0 4px 30px rgba(255,255,255,0.6)',
            animationDelay: '0.4s',
            animationFillMode: 'both',
          }}
        >
          Kash Lap Tour And Travels
        </h1>

        <div
          className="w-32 h-0.5 mx-auto mb-6 animate-fadeInUp"
          style={{
            background: 'linear-gradient(90deg, transparent, #00A86B, transparent)',
            animationDelay: '0.6s',
            animationFillMode: 'both',
          }}
        />

        <p
          className="text-xl sm:text-3xl font-light tracking-wider mb-10 animate-fadeInUp"
          style={{
            color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(10,10,10,0.85)',
            animationDelay: '0.8s',
            animationFillMode: 'both',
          }}
        >
          Kashmir! Heaven On Earth
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          <a
            href="#packages"
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #00A86B, #006B3F)',
              color: '#fff',
              boxShadow: '0 8px 25px rgba(0,168,107,0.35)',
            }}
          >
            Explore Packages
          </a>
          <a
            href="https://wa.me/919796938586"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-2"
            style={{
              background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0,168,107,0.4)',
              color: isDark ? '#fff' : '#0A0A0A',
            }}
          >
            <MessageCircle size={16} style={{ color: '#00A86B' }} />
            Talk to Travel Expert
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm animate-fadeInUp" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <a href="tel:+917006692576" className="flex items-center gap-2 transition-colors hover:text-emerald-500" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.65)' }}>
            <Phone size={14} style={{ color: '#00A86B' }} />
            +91 70066 92576
          </a>
          <div className="flex items-center gap-2" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.65)' }}>
            <MapPin size={14} style={{ color: '#00A86B' }} />
            Srinagar, Kashmir
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full flex justify-center pt-2" style={{ border: '2px solid rgba(0,168,107,0.5)' }}>
          <div className="w-1 h-2 rounded-full" style={{ background: '#00A86B', animation: 'scrollDot 1.5s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
