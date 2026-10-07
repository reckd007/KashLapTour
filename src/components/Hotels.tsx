import { Star, MapPin } from 'lucide-react';

interface Props {
  isDark: boolean;
}

const HOTELS = [
  {
    name: 'Dal Lake Houseboat',
    type: 'Luxury Houseboat',
    rating: 4.8,
    img: 'https://images.pexels.com/photos/11522584/pexels-photo-11522584.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    desc: 'Traditional Kashmiri houseboat on Dal Lake with intricately carved wood interiors and serene views.',
  },
  {
    name: 'Gulmarg Highland Resort',
    type: 'Mountain Resort',
    rating: 4.7,
    img: 'https://images.pexels.com/photos/15344127/pexels-photo-15344127.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    desc: 'Cozy alpine resort nestled among pine forests with stunning views of snow-capped peaks.',
  },
  {
    name: 'Pahalgam Valley Stay',
    type: 'Riverside Hotel',
    rating: 4.6,
    img: 'https://images.pexels.com/photos/16151009/pexels-photo-16151009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    desc: 'Riverside accommodation surrounded by lush green valleys and the sound of the Lidder River.',
  },
  {
    name: 'Srinagar Mughal Retreat',
    type: 'Boutique Hotel',
    rating: 4.5,
    img: 'https://images.pexels.com/photos/29264394/pexels-photo-29264394.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    desc: 'Elegant boutique hotel near Mughal Gardens offering warm Kashmiri hospitality and cuisine.',
  },
];

export default function Hotels({ isDark }: Props) {
  return (
    <section id="hotels" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: isDark ? '#0D0D0D' : '#fff' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: '#00A86B' }}>
            Stay In Comfort
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4" style={{ color: isDark ? '#fff' : '#0A0A0A' }}>
            Recommended Hotels
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #00A86B, transparent)' }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTELS.map((h, i) => (
            <div
              key={h.name}
              className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(248,251,248,0.9)',
                border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.05)',
                animation: `fadeSlideUp 0.5s ease-out both`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={h.img}
                  alt={h.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(0,168,107,0.9)', color: '#fff', backdropFilter: 'blur(8px)' }}
                >
                  <Star size={11} fill="#fff" />
                  {h.rating}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin size={12} style={{ color: '#00A86B' }} />
                  <span className="text-xs" style={{ color: '#00A86B' }}>{h.type}</span>
                </div>
                <h3 className="font-serif text-lg font-bold mb-2" style={{ color: isDark ? '#fff' : '#0A0A0A' }}>
                  {h.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.6)' }}>
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
