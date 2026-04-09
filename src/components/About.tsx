"use client"
import { siteData } from '@/data/siteData'
import SocialIcons from './SocialIcons'

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 md:px-6">
      <div className="max-w-3xl">

        {/* Content */}
        <div>
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

