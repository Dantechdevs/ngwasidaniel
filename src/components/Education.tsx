import { siteData } from '@/data/siteData'

export default function Education() {
  return (
    <section id="education" className="py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Qualifications</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading" style={{ color: 'var(--text)' }}>Education &amp; Certifications</h2>
        <p className="text-sm mb-14" style={{ color: 'var(--muted)' }}>My academic journey and professional qualifications.</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-2" style={{ color: 'var(--text)' }}>
              🎓 Education
            </h3>
            {siteData.education.map((ed, i) => (
              <div key={i} className="rounded-xl p-6 card-hover"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{ed.degree}</h4>
                  <span className="font-mono text-xs" style={{ color: 'var(--cyan)' }}>{ed.period}</span>
                </div>
                <p className="text-xs mb-3 font-mono" style={{ color: 'var(--cyan)' }}>{ed.institution}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{ed.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-2" style={{ color: 'var(--text)' }}>
              🏆 Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {siteData.certifications.map((cert, i) => (
                <div key={i} className="rounded-xl p-4 card-hover flex items-center gap-4"
                  style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--cyan)' }}>
                    ✓
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate" style={{ color: 'var(--text)' }}>{cert.title}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{cert.issuer} · {cert.year}</div>
                  </div>
                  <span className="text-xs flex-shrink-0 px-2 py-0.5 rounded-full"
                    style={{ color: 'var(--cyan)', border: '1px solid var(--cyan)', opacity: 0.7 }}>
                    Verified ✓
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
