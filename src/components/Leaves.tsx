import { useEffect, useState, useMemo } from 'react';

interface LeafData {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  swayAmount: number;
  swayDuration: number;
  rotateX: number;
  rotateY: number;
  rotateZStart: number;
  rotateZEnd: number;
  depth: number;
  flipSpeed: number;
  hue: number;
}

function makeLeaf(id: number): LeafData {
  const depth = 0.5 + Math.random() * 1.5;
  return {
    id,
    left: Math.random() * 100,
    delay: -Math.random() * 12,
    duration: 10 + Math.random() * 10,
    size: (16 + Math.random() * 20) * depth,
    swayAmount: 30 + Math.random() * 50,
    swayDuration: 2.5 + Math.random() * 2.5,
    rotateX: Math.random() * 360,
    rotateY: Math.random() * 360,
    rotateZStart: Math.random() * 360,
    rotateZEnd: Math.random() * 720 - 360,
    depth,
    flipSpeed: 1.5 + Math.random() * 2.5,
    hue: 140 + Math.random() * 30,
  };
}

export default function Leaves({ visible = true }: { visible?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const leaves = useMemo(() => Array.from({ length: 18 }, (_, i) => makeLeaf(i)), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: 5,
        perspective: '800px',
        perspectiveOrigin: '50% 0%',
        opacity: mounted && visible ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}
    >
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className="absolute top-0"
          style={{
            left: `${leaf.left}%`,
            willChange: 'transform, opacity',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'visible',
            animation: `fall3DLeaf ${leaf.duration}s linear infinite`,
            animationDelay: `${leaf.delay}s`,
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        >
          <div
            style={{
              width: leaf.size,
              height: leaf.size,
              transformStyle: 'preserve-3d',
              animation: `flip3DLeaf ${leaf.flipSpeed}s ease-in-out infinite alternate`,
            }}
          >
            <div
              style={{
                animation: `sway3DLeaf ${leaf.swayDuration}s ease-in-out infinite alternate`,
                transformStyle: 'preserve-3d',
              }}
            >
              <LeafSVG hue={leaf.hue} size={leaf.size} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LeafSVG({ hue, size }: { hue: number; size: number }) {
  const c1 = `hsl(${hue}, 55%, 38%)`;
  const c2 = `hsl(${hue + 10}, 60%, 28%)`;
  const c3 = `hsl(${hue - 10}, 50%, 45%)`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{
        filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.25))',
      }}
    >
      <defs>
        <linearGradient id={`g${hue}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c3} />
          <stop offset="50%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      <path
        d="M16 2C11 7 5 12 5 19c0 6 4.9 11 11 11s11-5 11-11c0-7-6-12-11-17z"
        fill={`url(#g${hue})`}
        stroke={c2}
        strokeWidth="0.5"
      />
      <path d="M16 3v26" stroke={c2} strokeWidth="0.7" opacity="0.5" />
      <path d="M16 10l-5-3M16 14l-6-2M16 18l-7-1M16 22l-6 1M16 10l5-3M16 14l6-2M16 18l7-1M16 22l6 1"
        stroke={c2} strokeWidth="0.4" opacity="0.4" fill="none"
      />
    </svg>
  );
}
