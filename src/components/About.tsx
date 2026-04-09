"use client"
import Image from 'next/image'
import { siteData } from '@/data/siteData'
import SocialIcons from './SocialIcons'

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT — developer illustration */}
        <div className="relative mx-auto md:mx-0 w-full max-w-md">
          <div className="rounded-2xl overflow-hidden relative"
            style={{ border: '1px solid var(--border)', background: 'var(--bg2)' }}>
            <Image
              src="/images/developer-illustration.png"
              alt="Developer illustration"
              width={500}
              height={500}
              className="object-contain w-full"
              style={{ display: 'block' }}
            />
          </div>
          {/* Floating stats card */}
          <div className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3 text-center shadow-xl"
            style={{ background: 'var(--cyan)', color: 'var(--bg)', minWidth: '110px' }}>
            <div className="font-mono text-xl font-bold">5+</div>
            <div className="text-xs font-medium">Years Exp.</div>
          </div>
        </div>

        {/* RIGHT — content */}
        <div className="mt-8 md:mt-0">
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-heading" style={{ color: 'var(--text)' }}>
            My Journey
          </h2>
          <p className="leading-relaxed mb-4 text-sm md:text-base" style={{ color: 'var(--muted)' }}>
            {siteData.bio}
          </p>
          <p className="leading-relaxed mb-8 text-sm md:text-base" style={{ color: 'var(--muted)' }}>
            When I&apos;m not coding or managing ICT infrastructure, I explore new technologies,
            contribute to open-source, and mentor aspiring developers.
          </p>

          {/* Quick facts grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { label: 'University', value: "St. Paul's University" },
              { label: 'Graduated',  value: '2022' },
              { label: 'Current Role', value: 'ICT Officer' },
              { label: 'Location',   value: 'Nairobi, Kenya' },
            ].map(fact => (
              <div key={fact.label} className="rounded-lg p-3"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                <div className="text-xs mb-1" style={{ color: 'var(--muted)' }}>{fact.label}</div>
                <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{fact.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="/cv.pdf" download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm transition-colors"
              style={{ background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--cyan)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
              ↓ Download CV
            </a>
            <SocialIcons size="sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
