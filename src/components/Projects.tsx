"use client"
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { siteData } from '@/data/siteData'

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
  images?: string[]
  badge?: string
}

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default function Projects() {
  const allProjects = siteData.projects as Project[]
  const featured = allProjects.filter(p => p.featured)
  const more = allProjects.filter(p => !p.featured)

  // Build filter chips from the tags that actually appear on featured projects
  const allTags = useMemo(() => {
    const set = new Set<string>()
    featured.forEach(p => p.tags.forEach(t => set.add(t)))
    return Array.from(set).sort()
  }, [featured])

  const [filter, setFilter] = useState<string | null>(null)
  const visibleFeatured = filter ? featured.filter(p => p.tags.includes(filter)) : featured

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4 md:px-6">
      <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Portfolio</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading" style={{ color: 'var(--text)' }}>Featured Projects</h2>
      <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
        Real systems, built for real clients and community organizations — not tutorials.
      </p>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button type="button" onClick={() => setFilter(null)}
          className="text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors"
          style={{
            background: filter === null ? 'var(--cyan)' : 'var(--bg3)',
            color: filter === null ? 'var(--bg)' : 'var(--muted)',
            border: '1px solid var(--border)',
          }}>
          All ({featured.length})
        </button>
        {allTags.map(tag => (
          <button key={tag} type="button" onClick={() => setFilter(tag)}
            className="text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors"
            style={{
              background: filter === tag ? 'var(--cyan)' : 'var(--bg3)',
              color: filter === tag ? 'var(--bg)' : 'var(--muted)',
              border: '1px solid var(--border)',
            }}>
            {tag}
          </button>
        ))}
      </div>

      {/* Featured grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {visibleFeatured.map((project, i) => (
          <div key={project.title} className="rounded-xl overflow-hidden card-hover"
            style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
            <div className="h-48 relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
              {project.images && project.images.length === 2 ? (
                <div className="w-full h-full flex">
                  <div className="relative h-full" style={{ width: '60%' }}>
                    <Image src={project.images[0]} alt={`${project.title} – preview 1`} fill className="object-cover object-top" />
                  </div>
                  <div className="w-px shrink-0 z-10" style={{ background: 'var(--border)' }} />
                  <div className="relative h-full" style={{ width: '40%' }}>
                    <Image src={project.images[1]} alt={`${project.title} – preview 2`} fill className="object-cover object-top" />
                  </div>
                  <div className="absolute inset-0 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(13,13,20,0.6), transparent)' }} />
                  {project.badge && (
                    <span className="absolute top-3 left-3 z-20 font-mono text-[10px] px-2.5 py-1 rounded-full backdrop-blur"
                      style={{ background: 'rgba(13,13,20,0.7)', border: '1px solid rgba(124,111,250,0.4)', color: 'var(--cyan)' }}>
                      {project.badge}
                    </span>
                  )}
                </div>
              ) : project.image ? (
                <>
                  <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,13,20,0.65), transparent)' }} />
                  {project.badge && (
                    <span className="absolute top-3 left-3 font-mono text-[10px] px-2.5 py-1 rounded-full backdrop-blur"
                      style={{ background: 'rgba(13,13,20,0.7)', border: '1px solid rgba(124,111,250,0.4)', color: 'var(--cyan)' }}>
                      {project.badge}
                    </span>
                  )}
                </>
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />
                  <span className="font-mono text-xs z-10" style={{ color: 'var(--cyan)' }}>
                    &lt;project_{String(i + 1).padStart(2, '0')}/&gt;
                  </span>
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text)' }}>{project.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                    style={{ color: 'var(--muted)', background: 'var(--bg3)', border: '1px solid var(--border)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.demo !== '#' && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                    style={{ border: '1px solid var(--border)', color: 'var(--cyan)' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--cyan)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
                    <ExternalLinkIcon /> Live Demo
                  </a>
                )}
                <a href={project.source} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}>
                  <GithubIcon /> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More projects — compact tier, no images, lower visual weight */}
      {more.length > 0 && (
        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: 'var(--muted)' }}>
            More Projects
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {more.map(project => (
              <div key={project.title} className="rounded-lg p-5"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{project.title}</h4>
                  {project.badge && (
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded-full shrink-0"
                      style={{ color: 'var(--muted)', background: 'var(--bg3)', border: '1px solid var(--border)' }}>
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{ color: 'var(--muted)', background: 'var(--bg3)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold transition-colors"
                      style={{ color: 'var(--cyan)' }}>
                      <ExternalLinkIcon /> Demo
                    </a>
                  )}
                  <a href={project.source} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold transition-colors"
                    style={{ color: 'var(--muted)' }}>
                    <GithubIcon /> Source
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-14">
        <a href="https://github.com/Dantechdevs" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-md transition-colors"
          style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}>
          <GithubIcon /> View all projects on GitHub ↗
        </a>
      </div>
    </section>
  )
}