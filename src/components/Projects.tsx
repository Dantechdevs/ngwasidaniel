import Image from 'next/image'
import { siteData } from '@/data/siteData'

// Gradient backgrounds for projects without images
const gradients = [
  'from-[#0a0a0f] to-[#0d2044]',
  'from-[#0a0a0f] to-[#0d3020]',
  'from-[#0a0a0f] to-[#1a0a28]',
  'from-[#0a0a0f] to-[#0a1a0d]',
  'from-[#0a0a0f] to-[#1a1000]',
]

type Project = {
  title: string
  description: string
  tags: string[]
  demo: string
  source: string
  featured: boolean
  image?: string
  badge?: string
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">Portfolio</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Featured Projects</h2>
      <p className="text-muted mb-14">
        Check out some of my recent work and the problems I&apos;ve solved.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {(siteData.projects as Project[]).map((project, i) => (
          <div
            key={i}
            className={`bg-bg2 border rounded-xl overflow-hidden card-hover ${
              project.featured ? 'border-border' : 'border-border opacity-90'
            }`}
          >
            {/* Project preview — real screenshot or gradient fallback */}
            <div className="h-48 relative overflow-hidden border-b border-border">
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Subtle overlay so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg2/60 to-transparent" />
                  {/* Badge (e.g. "Open Source · v0.1.0-alpha") */}
                  {project.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[10px] bg-bg/80 backdrop-blur border border-cyan/30 text-cyan px-2.5 py-1 rounded-full">
                        {project.badge}
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center relative`}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <span className="font-mono text-xs text-cyan z-10">
                    &lt;project_{String(i + 1).padStart(2, '0')}/&gt;
                  </span>
                </div>
              )}
            </div>

            {/* Card body */}
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
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-border text-cyan px-4 py-2 rounded-md hover:border-cyan transition-colors"
                  >
                    ↗ Live Demo
                  </a>
                )}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs border border-border text-muted px-4 py-2 rounded-md hover:border-cyan hover:text-cyan transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View all projects link */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/Dantechdevs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border text-muted px-6 py-3 rounded-md text-sm hover:border-cyan hover:text-cyan transition-colors"
        >
          View all projects on GitHub ↗
        </a>
      </div>
    </section>
  )
}
