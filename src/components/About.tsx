import { Quote, Award, Users, MapPinned } from 'lucide-react';

interface Props {
  isDark: boolean;
}

export default function About({ isDark }: Props) {
  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Travelers' },
    { icon: MapPinned, value: '15+', label: 'Destinations Covered' },
    { icon: Award, value: '8+', label: 'Years of Service' },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: isDark ? '#0A0A0A' : '#F8FBF8' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(0,168,107,0.15)' }}>
              <img
                src="https://images.pexels.com/photos/20552493/pexels-photo-20552493.jpeg?auto=compress&cs=tinysrgb&w=900&h=700"
                alt="Kashmir landscape"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-4 lg:right-8 px-6 py-4 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #00A86B, #006B3F)',
                color: '#fff',
                boxShadow: '0 20px 50px rgba(0,168,107,0.35)',
              }}
            >
              <div className="font-serif text-3xl font-bold">8+</div>
              <div className="text-xs tracking-widest uppercase opacity-90">Years of Trust</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: '#00A86B' }}>
              About Us
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-6" style={{ color: isDark ? '#fff' : '#0A0A0A' }}>
              Your Kashmir Travel Partner
            </h2>
            <div className="w-24 h-0.5 mb-6" style={{ background: 'linear-gradient(90deg, #00A86B, transparent)' }} />

            <div className="relative pl-6 mb-6">
              <Quote
                size={28}
                className="absolute -left-1 -top-2 opacity-20"
                style={{ color: '#00A86B' }}
              />
              <p className="text-base leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.75)' : 'rgba(10,10,10,0.7)' }}>
                Kash Lap Tour And Travels is a trusted Kashmir-based travel agency dedicated to making
                your dream of exploring Kashmir a breathtaking reality. From the serene waters of Dal Lake
                to the snow-clad peaks of Gulmarg, we craft journeys that stay with you forever.
              </p>
            </div>
            <p className="text-base leading-relaxed mb-8" style={{ color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.6)' }}>
              With years of local expertise, personalized itineraries, and a passion for hospitality, we ensure
              every traveler experiences the true beauty, culture, and warmth of Kashmir — Heaven On Earth.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map(s => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="text-center p-4 rounded-2xl" style={{
                    background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(0,168,107,0.15)',
                  }}>
                    <Icon size={22} style={{ color: '#00A86B', margin: '0 auto 8px' }} />
                    <div className="font-serif text-2xl font-bold" style={{ color: isDark ? '#fff' : '#0A0A0A' }}>
                      {s.value}
                    </div>
                    <div className="text-xs mt-1" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(10,10,10,0.5)' }}>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
