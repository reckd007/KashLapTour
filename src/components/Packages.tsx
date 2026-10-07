import { Clock, Check, MessageCircle, Phone } from 'lucide-react';

interface Props {
  isDark: boolean;
}

const PACKAGES = [
  {
    name: 'Blissful Kashmir',
    duration: '6 Nights / 7 Days',
    tagline: 'The Complete Kashmir Experience',
    price: '₹18,999',
    img: 'https://images.pexels.com/photos/24601787/pexels-photo-24601787.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    highlights: [
      'Srinagar – Dal Lake, Mughal Gardens, Shikara Ride',
      'Gulmarg – Gondola Ride, Snow Activities',
      'Pahalgam – Betaab Valley, Aru Valley',
      'Sonamarg – Glacier, Pony Ride',
      'Houseboat Stay on Dal Lake',
      'All Meals, Transfers & Sightseeing',
    ],
    featured: true,
  },
  {
    name: 'Beautiful Kashmir',
    duration: '3 Nights / 4 Days',
    tagline: 'Quick Escape to Paradise',
    price: '₹11,499',
    img: 'https://images.pexels.com/photos/26752840/pexels-photo-26752840.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    highlights: [
      'Srinagar – Dal Lake, Mughal Gardens',
      'Gulmarg – Gondola, Snow Point',
      'Pahalgam – Betaab Valley',
      'Houseboat Stay 1 Night',
      'All Transfers & Sightseeing',
      'Daily Breakfast & Dinner',
    ],
    featured: false,
  },
  {
    name: 'Explore Kashmir',
    duration: '2 Nights / 3 Days',
    tagline: 'Weekend Himalayan Getaway',
    price: '₹7,999',
    img: 'https://images.pexels.com/photos/18907680/pexels-photo-18907680.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    highlights: [
      'Srinagar – Dal Lake Shikara Ride',
      'Gulmarg – Gondola Ride',
      'Local Sightseeing',
      'Hotel Stay',
      'All Transfers',
      'Daily Breakfast',
    ],
    featured: false,
  },
];

export default function Packages({ isDark }: Props) {
  return (
    <section id="packages" className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: isDark ? '#0A0A0A' : '#F8FBF8' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: '#00A86B' }}>
            Curated Journeys
          </p>
          <h2
            className="font-serif text-3xl sm:text-5xl font-bold mb-4"
            style={{ color: isDark ? '#fff' : '#0A0A0A' }}
          >
            Our Travel Packages
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent, #00A86B, transparent)' }} />
          <p className="max-w-2xl mx-auto text-base" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.6)' }}>
            Handcrafted itineraries designed to give you the most unforgettable Kashmir experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, i) => (
            <div
              key={pkg.name}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.9)',
                border: pkg.featured
                  ? '1px solid rgba(0,168,107,0.5)'
                  : isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
                boxShadow: pkg.featured
                  ? '0 20px 60px rgba(0,168,107,0.2)'
                  : '0 10px 40px rgba(0,0,0,0.08)',
                animation: `fadeSlideUp 0.6s ease-out both`,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {pkg.featured && (
                <div
                  className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                  style={{ background: 'linear-gradient(135deg, #00A86B, #006B3F)', color: '#fff' }}
                >
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Clock size={14} />
                  <span className="text-sm font-medium">{pkg.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-1" style={{ color: isDark ? '#fff' : '#0A0A0A' }}>
                  {pkg.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#00A86B' }}>
                  {pkg.tagline}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {pkg.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.7)' }}>
                      <Check size={15} style={{ color: '#00A86B', marginTop: 2, flexShrink: 0 }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4" style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)' }}>
                  <a
                    href="https://wa.me/919796938586"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, #00A86B, #006B3F)',
                      color: '#fff',
                    }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Your Plan CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/919796938586"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #00A86B, #006B3F)',
              color: '#fff',
              boxShadow: '0 10px 35px rgba(0,168,107,0.35)',
            }}
          >
            Book Your Plan
          </a>
          <p className="mt-4 text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(10,10,10,0.55)' }}>
            Pricing on WhatsApp or Phone
          </p>
          <div className="mt-3 flex items-center justify-center gap-5">
            <a
              href="https://wa.me/919796938586"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-emerald-500"
              style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.7)' }}
            >
              <MessageCircle size={15} style={{ color: '#00A86B' }} />
              WhatsApp
            </a>
            <span style={{ color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(10,10,10,0.2)' }}>·</span>
            <a
              href="tel:+917006692576"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-emerald-500"
              style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.7)' }}
            >
              <Phone size={15} style={{ color: '#00A86B' }} />
              Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
