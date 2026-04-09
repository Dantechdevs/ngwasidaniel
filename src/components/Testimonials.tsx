"use client";
'use client'
import { useState } from 'react'
import { siteData } from '@/data/siteData'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const t = siteData.testimonials[idx]

  return (
    <section id="testimonials" className="py-24 max-w-6xl mx-auto px-4 md:px-6">
      <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Social Proof</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading" style={{ color: 'var(--text)' }}>Client Testimonials</h2>
      <p className="text-sm mb-14" style={{ color: 'var(--muted)' }}>What people are saying about working with me.</p>

      <div className="max-w-2xl mx-auto">
        <div className="rounded-2xl p-6 md:p-8"
          style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
          <div className="font-mono text-5xl leading-none mb-4" style={{ color: 'var(--cyan)' }}>&ldquo;</div>
          <p className="leading-relaxed text-base mb-8" style={{ color: 'var(--text)' }}>{t.text}</p>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--cyan)' }}>
              {t.initials}
            </div>
            <div>
              <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{t.name}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{t.role}</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={() => setIdx((idx - 1 + siteData.testimonials.length) % siteData.testimonials.length)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-colors"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)'; (e.currentTarget as HTMLElement).style.color = 'var(--cyan)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--muted)' }}>
            ←
          </button>
          {siteData.testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className="h-2 rounded-full transition-all"
              style={{ width: i === idx ? '24px' : '8px', background: i === idx ? 'var(--cyan)' : 'var(--border)' }} />
          ))}
          <button onClick={() => setIdx((idx + 1) % siteData.testimonials.length)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-colors"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)'; (e.currentTarget as HTMLElement).style.color = 'var(--cyan)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--muted)' }}>
            →
          </button>
        </div>
      </div>
    </section>
  )
}
