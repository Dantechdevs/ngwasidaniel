'use client'
import { siteData } from '@/data/siteData'

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>What I Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading" style={{ color: 'var(--text)' }}>Services</h2>
        <p className="text-sm mb-14 max-w-xl" style={{ color: 'var(--muted)' }}>
          From web development to ICT infrastructure — here's how I can help your business grow.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(siteData as any).services.map((service: any, i: number) => (
            <div key={i} className="rounded-xl p-6 card-hover group"
              style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}>
                {service.icon}
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text)' }}>{service.title}</h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>{service.description}</p>
              <ul className="space-y-1.5">
                {service.features.map((f: string, j: number) => (
                  <li key={j} className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--cyan)' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ background: 'var(--cyan)', color: 'var(--bg)' }}>
            Discuss Your Project →
          </a>
        </div>
      </div>
    </section>
  )
}
