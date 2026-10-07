import { Car, Compass, UtensilsCrossed, PiggyBank } from 'lucide-react';

interface Props {
  isDark: boolean;
}

const SERVICES = [
  {
    icon: Car,
    title: 'Transport',
    desc: 'Comfortable, well-maintained vehicles with experienced drivers for all your travel needs across Kashmir.',
  },
  {
    icon: Compass,
    title: 'Trip Guiding',
    desc: 'Knowledgeable local guides who reveal the hidden gems, culture, and stories of every destination.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Bed',
    desc: 'Handpicked hotels and houseboats with authentic Kashmiri cuisine served fresh throughout your journey.',
  },
  {
    icon: PiggyBank,
    title: 'Money Saving',
    desc: 'Best-value packages and transparent pricing so you get the most of Kashmir without overspending.',
  },
];

export default function Services({ isDark }: Props) {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: isDark ? '#0D0D0D' : '#fff' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: '#00A86B' }}>
            What We Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4" style={{ color: isDark ? '#fff' : '#0A0A0A' }}>
            Our Services
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #00A86B, transparent)' }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(248,251,248,0.8)',
                  border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.05)',
                  animation: `fadeSlideUp 0.5s ease-out both`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: '0 0 40px rgba(0,168,107,0.15) inset' }}
                />
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,168,107,0.15), rgba(0,107,63,0.1))',
                    border: '1px solid rgba(0,168,107,0.25)',
                  }}
                >
                  <Icon size={28} style={{ color: '#00A86B' }} />
                </div>
                <h3 className="relative font-serif text-xl font-bold mb-3" style={{ color: isDark ? '#fff' : '#0A0A0A' }}>
                  {s.title}
                </h3>
                <p className="relative text-sm leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.6)' }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
