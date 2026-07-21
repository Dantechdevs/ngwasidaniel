'use client'
import { siteData } from '@/data/siteData'

export default function Community() {
  return (
    <section id="community" className="py-24" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Beyond Code</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading" style={{ color: 'var(--text)' }}>Community & Leadership</h2>
        <p className="text-sm mb-14 max-w-2xl" style={{ color: 'var(--muted)' }}>
          Technology work aside, I stay active in the community organizations I belong to — coordination,
          communication, and record-keeping that don&apos;t show up in a repo but matter just as much.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {siteData.community.map((item, i) => (
            <div key={i} className="rounded-xl p-6 card-hover"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-lg shrink-0"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>{item.title}</h3>
                  <div className="font-mono text-xs mb-3" style={{ color: 'var(--cyan)' }}>{item.organization}</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
