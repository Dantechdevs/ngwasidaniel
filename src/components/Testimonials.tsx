'use client'
import { useState } from 'react'
import { siteData } from '@/data/siteData'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const t = siteData.testimonials[idx]

  return (
    <section id="testimonials" className="py-24 max-w-6xl mx-auto px-6">
      <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">Social Proof</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Client Testimonials</h2>
      <p className="text-muted mb-14">What people are saying about working with me.</p>

      <div className="max-w-2xl mx-auto">
        <div className="bg-bg2 border border-border rounded-2xl p-8">
          <div className="font-mono text-5xl text-cyan leading-none mb-4">&ldquo;</div>
          <p className="text-white leading-relaxed text-base mb-8">{t.text}</p>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center font-semibold text-sm text-cyan">
              {t.initials}
            </div>
            <div>
              <div className="font-semibold text-sm">{t.name}</div>
              <div className="text-muted text-xs mt-0.5">{t.role}</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setIdx((idx - 1 + siteData.testimonials.length) % siteData.testimonials.length)}
            className="w-9 h-9 rounded-full border border-border text-muted hover:border-cyan hover:text-cyan transition-colors text-sm"
          >
            ←
          </button>
          {siteData.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-cyan w-6' : 'bg-border'}`}
            />
          ))}
          <button
            onClick={() => setIdx((idx + 1) % siteData.testimonials.length)}
            className="w-9 h-9 rounded-full border border-border text-muted hover:border-cyan hover:text-cyan transition-colors text-sm"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
