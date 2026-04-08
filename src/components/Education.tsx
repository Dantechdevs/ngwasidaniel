import { siteData } from '@/data/siteData'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg2">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">Qualifications</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Education &amp; Certifications</h2>
        <p className="text-muted mb-14">My academic journey and professional qualifications.</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="font-mono text-sm text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="text-cyan">🎓</span> Education
            </h3>
            {siteData.education.map((ed, i) => (
              <div key={i} className="bg-bg border border-border rounded-xl p-6 card-hover">
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <h4 className="font-semibold text-base">{ed.degree}</h4>
                  <span className="font-mono text-xs text-cyan">{ed.period}</span>
                </div>
                <p className="text-muted text-sm mb-3">{ed.institution}</p>
                <p className="text-muted text-sm leading-relaxed">{ed.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-sm text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="text-cyan">🏆</span> Certifications
            </h3>
            <div className="flex flex-col gap-4">
              {siteData.certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-bg border border-border rounded-xl p-5 card-hover flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{cert.title}</div>
                    <div className="text-muted text-xs mt-0.5">
                      {cert.issuer} · {cert.year}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs text-cyan border border-cyan/30 px-2 py-0.5 rounded-full">
                      Verified ✓
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
