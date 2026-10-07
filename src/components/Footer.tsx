import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

interface Props {
  isDark: boolean;
}

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Hotels', href: '#hotels' },
  { label: 'About', href: '#about' },
];

export default function Footer({ isDark }: Props) {
  return (
    <footer id="contact" className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0" style={{ background: isDark ? '#080808' : '#0A0A0A' }} />
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #00A86B, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/42P09-removebg-preview.png" alt="Logo" className="w-12 h-12 object-contain" />
              <div>
                <div className="font-serif text-lg font-bold text-white">Kash Lap</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: '#00A86B' }}>Tour & Travels</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-4">
              Your trusted partner for exploring the breathtaking beauty of Kashmir — Heaven On Earth.
            </p>
            <p className="font-serif text-lg italic" style={{ color: '#00A86B' }}>
              "Kashmir! Heaven On Earth"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/50 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} style={{ color: '#00A86B', marginTop: 2 }} />
                <div>
                  <a href="tel:+917006692576" className="text-sm text-white/60 hover:text-emerald-400 transition-colors block">
                    +91 70066 92576
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} style={{ color: '#00A86B', marginTop: 2 }} />
                <a href="mailto:info@kashlaptourandtravels.com" className="text-sm text-white/60 hover:text-emerald-400 transition-colors">
                  info@kashlaptourandtravels.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} style={{ color: '#00A86B', marginTop: 2 }} />
                <span className="text-sm text-white/60">
                  Srinagar, Kashmir, Jammu & Kashmir, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} style={{ color: '#00A86B', marginTop: 2 }} />
                <span className="text-sm text-white/60">
                  Mon – Sun: 8:00 AM – 9:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Book Your Trip</h4>
            <p className="text-sm text-white/50 mb-4">
              Ready to explore Kashmir? Reach out and let us craft your perfect journey.
            </p>
            <a
              href="https://wa.me/919796938586"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #00A86B, #006B3F)',
                color: '#fff',
                boxShadow: '0 8px 25px rgba(0,168,107,0.3)',
              }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+917006692576"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 mt-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(0,168,107,0.3)',
                color: '#fff',
              }}
            >
              <Phone size={16} />
              Call Us Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Kash Lap Tour And Travels. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Crafted with care for the lovers of Kashmir.
          </p>
        </div>
      </div>
    </footer>
  );
}
