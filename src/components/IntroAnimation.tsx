import { useEffect, useRef, useState } from 'react';

const IMAGES = [
  'https://images.pexels.com/photos/24601787/pexels-photo-24601787.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'https://images.pexels.com/photos/25786556/pexels-photo-25786556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  'https://images.pexels.com/photos/30750204/pexels-photo-30750204.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
];

interface Props {
  onComplete: () => void;
  isDark: boolean;
}

export default function IntroAnimation({ onComplete, isDark }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<'loading' | 'show' | 'fading' | 'done'>('loading');
  const [currentImg, setCurrentImg] = useState(0);
  const mousePos = useRef({ x: -999, y: -999 });
  const animFrameRef = useRef<number>(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCount = useRef(0);
  const zoomRadius = 90;
  const zoomFactor = 2.2;

  useEffect(() => {
    imagesRef.current = [];
    loadedCount.current = 0;
    IMAGES.forEach((src, i) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = src;
      img.onload = () => {
        loadedCount.current++;
        if (loadedCount.current === IMAGES.length) {
          setPhase('show');
        }
      };
      img.onerror = () => {
        loadedCount.current++;
        if (loadedCount.current === IMAGES.length) setPhase('show');
      };
      imagesRef.current[i] = img;
    });
  }, []);

  // Cycle images
  useEffect(() => {
    if (phase !== 'show') return;
    const t = setInterval(() => {
      setCurrentImg(p => (p + 1) % IMAGES.length);
    }, 2200);
    return () => clearInterval(t);
  }, [phase]);

  // Auto-complete after 6s
  useEffect(() => {
    if (phase !== 'show') return;
    const t = setTimeout(() => setPhase('fading'), 6000);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase === 'fading') {
      setTimeout(() => { setPhase('done'); onComplete(); }, 1200);
    }
  }, [phase, onComplete]);

  // Canvas render loop
  useEffect(() => {
    if (phase !== 'show') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const img = imagesRef.current[currentImg];
      if (!img || !img.complete) {
        animFrameRef.current = requestAnimationFrame(draw);
        return;
      }
      // Draw base image cover
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;
      const sx = (w - sw) / 2;
      const sy = (h - sh) / 2;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, sx, sy, sw, sh);

      // Lens zoom effect
      const { x, y } = mousePos.current;
      if (x >= 0 && x <= w && y >= 0 && y <= h) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, zoomRadius, 0, Math.PI * 2);
        ctx.clip();

        const srcX = (x - sx) / scale;
        const srcY = (y - sy) / scale;
        const srcW = (zoomRadius * 2) / scale / zoomFactor;
        const srcH = (zoomRadius * 2) / scale / zoomFactor;

        ctx.drawImage(
          img,
          Math.max(0, srcX - srcW / 2),
          Math.max(0, srcY - srcH / 2),
          Math.min(img.naturalWidth - Math.max(0, srcX - srcW / 2), srcW),
          Math.min(img.naturalHeight - Math.max(0, srcY - srcH / 2), srcH),
          x - zoomRadius,
          y - zoomRadius,
          zoomRadius * 2,
          zoomRadius * 2,
        );

        // Lens border
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, zoomRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0,168,107,0.7)';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        // Subtle inner highlight
        const grad = ctx.createRadialGradient(x - zoomRadius * 0.3, y - zoomRadius * 0.3, 2, x, y, zoomRadius);
        grad.addColorStop(0, 'rgba(255,255,255,0.12)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(x, y, zoomRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [phase, currentImg]);

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  const handleMouseLeave = () => { mousePos.current = { x: -999, y: -999 }; };

  const handleClick = () => {
    if (phase === 'show') setPhase('fading');
  };

  if (phase === 'done') return null;

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden cursor-none"
      style={{
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
        background: '#0A0A0A',
      }}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ display: phase === 'loading' ? 'none' : 'block' }}
      />

      {/* Dark overlay gradient */}
      {phase !== 'loading' && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.65) 100%)' }}
        />
      )}

      {/* Loading spinner */}
      {phase === 'loading' && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
          <p className="text-emerald-400 text-sm tracking-widest uppercase">Loading Kashmir...</p>
        </div>
      )}

      {/* Text overlay */}
      {phase === 'show' && (
        <div className="relative z-10 text-center px-6 pointer-events-none select-none">
          <div className="mb-6 flex justify-center">
            <img
              src="/images/42P09-removebg-preview.png"
              alt="Kash Lap Logo"
              className="w-24 h-24 object-contain drop-shadow-2xl animate-pulse"
            />
          </div>
          <h1
            className="font-serif text-white text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight drop-shadow-2xl"
            style={{ textShadow: '0 4px 32px rgba(0,0,0,0.8), 0 0 60px rgba(0,168,107,0.3)' }}
          >
            Kash Lap Tour
            <br />
            <span style={{ color: '#00A86B' }}>And Travels</span>
          </h1>
          <div className="mt-4 w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #00A86B, transparent)' }} />
          <p className="mt-4 text-white/80 text-lg sm:text-2xl tracking-[0.25em] uppercase font-light drop-shadow-lg">
            Kashmir · Heaven On Earth
          </p>
          <p className="mt-8 text-white/40 text-sm tracking-widest animate-pulse">
            Move your cursor over the mountains · Click to explore
          </p>
        </div>
      )}

      {/* Image dots */}
      {phase === 'show' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {IMAGES.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-500"
              style={{
                width: i === currentImg ? 24 : 8,
                height: 8,
                background: i === currentImg ? '#00A86B' : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
