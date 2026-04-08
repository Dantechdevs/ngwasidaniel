import { siteData } from '@/data/siteData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">Portfolio</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Featured Projects</h2>
      <p className="text-muted mb-14">Check out some of my recent work and the problems I&apos;ve solved.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {siteData.projects.map((project, i) => (
          <div
            key={i}
            className={`bg-bg2 border rounded-xl overflow-hidden card-hover ${
              project.featured ? 'border-border' : 'border-border opacity-90'
            }`}
          >
            {/* Project mockup bar */}
            <div
              className="h-44 flex items-center justify-center border-b border-border relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, #0a0a0f, ${
                  ['#0d2044', '#0d3020', '#1a0a28', '#0a1a0d'][i % 4]
                })`,
              }}
            >
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <span className="font-mono text-xs text-cyan z-10">
                &lt;project_{String(i + 1).padStart(2, '0')}/&gt;
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-base mb-2">{project.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted bg-bg3 border border-border px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.demo}
                  className="text-xs border border-border text-cyan px-4 py-2 rounded-md hover:border-cyan transition-colors"
                >
                  ↗ Live Demo
                </a>
                <a
                  href={project.source}
                  className="text-xs border border-border text-muted px-4 py-2 rounded-md hover:border-cyan hover:text-cyan transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
