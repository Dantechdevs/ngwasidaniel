'use client'
import { siteData } from '@/data/siteData'

export default function Testimonials() {
  const { heading, body, buttonLabel, buttonHref } = siteData.feedbackCta

  return (
    <section id="testimonials" className="py-24 max-w-6xl mx-auto px-4 md:px-6">
      <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Social Proof</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading" style={{ color: 'var(--text)' }}>{heading}</h2>

      <div className="max-w-2xl mx-auto text-center rounded-2xl p-10 md:p-14"
        style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
        <div className="font-mono text-5xl leading-none mb-4" style={{ color: 'var(--cyan)' }}>&ldquo;</div>
        <p className="leading-relaxed text-sm mb-8 max-w-md mx-auto" style={{ color: 'var(--muted)' }}>{body}</p>
        <a href={buttonHref}
          className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-md transition-colors font-mono"
          style={{ border: '1px solid var(--cyan)', color: 'var(--cyan)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--cyan)'; (e.currentTarget as HTMLElement).style.color = 'var(--bg)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--cyan)' }}>
          {buttonLabel} →
        </a>
      </div>
    </section>
  )
}
