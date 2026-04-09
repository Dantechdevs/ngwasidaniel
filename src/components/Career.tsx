import { siteData } from '@/data/siteData'

const typeIcon: Record<string, string> = { work: '💼', education: '🎓' }

export default function Career() {
  return (
    <section id="career" className="py-24" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading" style={{ color: 'var(--text)' }}>Career Journey</h2>
        <p className="text-sm mb-14" style={{ color: 'var(--muted)' }}>My educational path and professional experience.</p>

        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'var(--border)' }} />
          {siteData.career.map((item, i) => (
            <div key={i} className="relative mb-10">
              <div className="absolute -left-[1.625rem] top-2 w-3 h-3 rounded-full border-2"
                style={{ background: 'var(--cyan)', borderColor: 'var(--bg2)' }} />
              <div className="rounded-xl p-5 md:p-6 card-hover"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-xs" style={{ color: 'var(--cyan)' }}>{item.period}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
                    {typeIcon[item.type]} {item.type}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--text)' }}>{item.title}</h3>
                <p className="text-xs font-mono mb-2" style={{ color: 'var(--cyan)' }}>{item.company}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
