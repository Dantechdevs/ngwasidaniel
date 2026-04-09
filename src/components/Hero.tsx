"use client"
import Image from 'next/image'
import { siteData } from '@/data/siteData'
import SocialIcons from './SocialIcons'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden grid-bg"
    >
      {/* Radial glows */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,184,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(68,136,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* LEFT — text */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs mb-8"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--cyan)' }} />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Hi, I&apos;m{' '}
              <span style={{ color: 'var(--cyan)' }}>Daniel</span>{' '}
              <span style={{ color: 'var(--blue)' }}>Ngwasi</span>
            </h1>

            <div className="font-mono text-sm tracking-widest uppercase mb-5" style={{ color: 'var(--muted)' }}>
              {siteData.role}
            </div>

            <p className="max-w-xl mx-auto md:mx-0 leading-relaxed mb-8 text-sm md:text-base" style={{ color: 'var(--muted)' }}>
              {siteData.tagline} Specializing in writing, testing, and maintaining{' '}
              <span style={{ color: 'var(--text)' }}>efficient, scalable software</span> that makes a real impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
              <a href="#contact"
                className="px-6 py-3 rounded-md text-sm font-semibold transition-opacity hover:opacity-85"
                style={{ background: 'var(--cyan)', color: 'var(--bg)' }}>
                Get in touch
              </a>
              <a href="#projects"
                className="px-6 py-3 rounded-md text-sm transition-colors"
                style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--cyan)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
                View my work
              </a>
            </div>

            {/* Social icons */}
            <div className="flex justify-center md:justify-start">
              <SocialIcons size="sm" />
            </div>
          </div>

          {/* RIGHT — photo */}
          <div className="shrink-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full"
                style={{ background: 'conic-gradient(var(--cyan), var(--blue), var(--purple), var(--cyan))', padding: '3px' }}>
                <div className="w-full h-full rounded-full" style={{ background: 'var(--bg)' }} />
              </div>
              {/* Photo */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden">
                <Image
                  src={siteData.images.working}
                  alt="Daniel Ngwasi"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 rounded-full px-3 py-1.5 text-xs font-mono font-bold shadow-lg"
                style={{ background: 'var(--cyan)', color: 'var(--bg)' }}>
                👨‍💻 Open to work
              </div>
            </div>
          </div>

        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 mt-14 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}>
          {siteData.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-mono text-2xl md:text-3xl font-bold" style={{ color: 'var(--text)' }}>
                {stat.number}
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
