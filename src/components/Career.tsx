import { siteData } from '@/data/siteData'

export default function Career() {
  return (
    <section id="career" className="py-24 bg-bg2">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Career Journey</h2>
        <p className="text-muted mb-14">My educational path and aspirations in the tech world.</p>

        <div className="relative pl-6">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          {siteData.career.map((item, i) => (
            <div key={i} className="relative mb-12">
              {/* Dot */}
              <div className="absolute -left-[1.625rem] top-1.5 w-3 h-3 rounded-full bg-cyan border-2 border-bg" />

              <div className="bg-bg border border-border rounded-xl p-6 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-cyan">{item.period}</span>
                  <span className="text-xs text-muted px-2 py-0.5 bg-bg3 border border-border rounded-full capitalize">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
