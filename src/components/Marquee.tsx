'use client'
import { siteData } from '@/data/siteData'

export default function Marquee() {
  const items = siteData.marquee
  // Duplicate for seamless infinite loop
  const doubled = [...items, ...items]

  return (
    <div className="relative w-full overflow-hidden border-y border-border py-3 my-8">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
        style={{ background: 'linear-gradient(to right, var(--color-bg, #0a0a0a), transparent)' }} />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
        style={{ background: 'linear-gradient(to left, var(--color-bg, #0a0a0a), transparent)' }} />

      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 whitespace-nowrap text-xs font-mono text-muted uppercase tracking-widest"
          >
            {item}
            <span className="mx-6 text-cyan opacity-40">◆</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
