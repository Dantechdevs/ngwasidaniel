'use client'
import { useState } from 'react'
import { siteData } from '@/data/siteData'

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Tools', 'ICT']

export default function Skills() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? siteData.skills : siteData.skills.filter((s) => s.category === active)

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">Technical Stack</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Skills &amp; Technologies</h2>
      <p className="text-muted mb-10">My technical toolkit for building exceptional digital experiences.</p>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-xs border transition-all ${active === cat
                ? 'bg-cyan text-bg border-cyan font-semibold'
                : 'border-border text-muted hover:border-cyan hover:text-cyan'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {filtered.map((skill) => (
          <div
            key={skill.name}
            className="bg-bg2 border border-border rounded-lg p-4 text-center card-hover"
          >
            <div
              className="mb-2 flex items-center justify-center"
              style={{ fontSize: '1.5rem', height: '2.5rem', fontWeight: 600, lineHeight: 1 }}
            >
              {skill.icon}
            </div>
            <div className="text-xs text-muted">{skill.name}</div>
          </div>
        ))}
      </div>

      {/* Tech cloud */}
      <div className="mt-16 flex flex-wrap gap-3 justify-center">
        {siteData.skills.map((s) => (
          <span
            key={s.name}
            className="text-xs text-muted border border-border px-3 py-1 rounded-full hover:border-cyan hover:text-cyan transition-colors cursor-default"
          >
            {s.name}
          </span>
        ))}
      </div>
    </section>
  )
}
