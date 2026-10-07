import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';

interface Props {
  isDark: boolean;
  toggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Hotels', href: '#hotels' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bg = isDark
    ? scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.0)'
    : scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.0)';

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: bg,
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? (isDark ? '1px solid rgba(0,168,107,0.15)' : '1px solid rgba(0,168,107,0.12)') : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src="/images/42P09-removebg-preview.png"
                alt="Kash Lap Logo"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <div
                  className="font-serif font-bold text-base lg:text-lg leading-tight transition-colors duration-300"
                  style={{ color: isDark ? '#fff' : '#0A0A0A' }}
                >
                  Kash Lap
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: '#00A86B' }}>
                  Tour & Travels
                </div>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium tracking-wide transition-all duration-200 hover:text-emerald-500 relative group"
                  style={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(10,10,10,0.75)' }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: isDark ? 'rgba(0,168,107,0.15)' : 'rgba(0,107,63,0.1)',
                  border: '1px solid rgba(0,168,107,0.3)',
                  color: '#00A86B',
                }}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Call button */}
              <a
                href="tel:+917006692576"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #00A86B, #006B3F)',
                  color: '#fff',
                  boxShadow: '0 4px 15px rgba(0,168,107,0.3)',
                }}
              >
                <Phone size={14} />
                Call Now
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
                style={{ color: isDark ? '#fff' : '#0A0A0A' }}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-[99] lg:hidden transition-all duration-400"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          background: isDark ? 'rgba(10,10,10,0.97)' : 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-serif font-semibold transition-all duration-300 hover:text-emerald-500"
              style={{
                color: isDark ? 'rgba(255,255,255,0.9)' : '#0A0A0A',
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+917006692576"
            className="mt-4 flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold"
            style={{ background: 'linear-gradient(135deg, #00A86B, #006B3F)', color: '#fff' }}
          >
            <Phone size={16} />
            +91 70066 92576
          </a>
        </div>
      </div>
    </>
  );
}
