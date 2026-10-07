import { MapPin } from 'lucide-react';

interface Props {
  isDark: boolean;
}

const DESTINATIONS = [
  {
    name: 'Dal Lake',
    desc: 'The jewel of Srinagar — iconic shikara rides, floating gardens, and serene houseboat stays.',
    img: 'https://images.pexels.com/photos/25786556/pexels-photo-25786556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
  },
  {
    name: 'Gulmarg',
    desc: 'Snow-capped peaks and the world\'s highest gondola ride. A paradise for adventure and snow lovers.',
    img: 'https://images.pexels.com/photos/30750204/pexels-photo-30750204.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
  },
  {
    name: 'Pahalgam',
    desc: 'Lush green meadows, pine forests, and the Lidder River. The Valley of Shepherds awaits.',
    img: 'https://images.pexels.com/photos/26752840/pexels-photo-26752840.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
  },
  {
    name: 'Sonamarg',
    desc: 'The Meadow of Gold — glaciers, alpine lakes, and breathtaking Himalayan landscapes.',
    img: 'https://images.pexels.com/photos/18907680/pexels-photo-18907680.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
  },
  {
    name: 'Mughal Gardens',
    desc: 'Centuries-old terraced gardens — Nishat, Shalimar, and Chashme Shahi with Persian-style beauty.',
    img: 'https://images.pexels.com/photos/6325492/pexels-photo-6325492.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
  },
  {
    name: 'Betaab Valley',
    desc: 'Named after the Bollywood film, this valley offers stunning meadows and crystal-clear streams.',
    img: 'https://images.pexels.com/photos/18358505/pexels-photo-18358505.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
  },
];

export default function Destinations({ isDark }: Props) {
  return (
    <section id="destinations" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: isDark ? '#0A0A0A' : '#F8FBF8' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: '#00A86B' }}>
            Discover Kashmir
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4" style={{ color: isDark ? '#fff' : '#0A0A0A' }}>
            Popular Destinations
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #00A86B, transparent)' }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((d, i) => (
            <div
              key={d.name}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                height: 320,
                animation: `fadeSlideUp 0.5s ease-out both`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <img
                src={d.img}
                alt={d.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 50px rgba(0,168,107,0.25) inset' }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} style={{ color: '#00A86B' }} />
                  <span className="text-xs tracking-widest uppercase text-emerald-400 font-medium">Kashmir</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{d.name}</h3>
                <p className="text-sm text-white/70 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
