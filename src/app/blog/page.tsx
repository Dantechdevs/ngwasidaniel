'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { siteData } from '@/data/siteData'

const categoryColors: Record<string, string> = {
  Backend:     '#5b8dee',
  Frontend:    '#7c6ffa',
  Development: '#c084fc',
  Tools:       '#f59e0b',
  ICT:         '#10b981',
}

const allCategories = ['All', ...Array.from(new Set(siteData.blog.map(p => p.category)))]

export default function BlogPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? siteData.blog : siteData.blog.filter(p => p.category === active)

  return (
    <main className="min-h-screen pt-24 pb-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-1 text-xs mb-6 transition-colors"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            ← Back to Portfolio
          </Link>
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Writing</p>
          <h1 className="text-4xl font-bold mb-4 section-heading" style={{ color: 'var(--text)' }}>Blog</h1>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'var(--muted)' }}>
            Thoughts on software development, ICT infrastructure, and technology from the field.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allCategories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="px-4 py-1.5 rounded-full text-xs border transition-all"
              style={{
                background: active === cat ? 'var(--cyan)' : 'transparent',
                color: active === cat ? 'var(--bg)' : 'var(--muted)',
                borderColor: active === cat ? 'var(--cyan)' : 'var(--border)',
                fontWeight: active === cat ? 600 : 400,
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((post, i) => (
            <Link key={i} href={post.slug === '#' ? '/blog' : `/blog/${post.slug}`}
              className="rounded-xl overflow-hidden block card-hover group"
              style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
              <div className="h-44 relative overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,13,20,0.85), transparent)' }} />
                <span className="absolute bottom-3 left-3 text-xs px-2.5 py-1 rounded-full font-mono"
                  style={{
                    background: `${categoryColors[post.category] || '#888'}22`,
                    border: `1px solid ${categoryColors[post.category] || '#888'}55`,
                    color: categoryColors[post.category] || 'var(--muted)',
                  }}>
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <div className="font-mono text-xs mb-2" style={{ color: 'var(--muted)' }}>{post.date}</div>
                <h2 className="font-semibold text-sm leading-snug mb-2" style={{ color: 'var(--text)' }}>{post.title}</h2>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* How to add posts guide */}
        <div className="rounded-xl p-6" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
          <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>
            📝 How to add a new blog post
          </p>
          <ol className="text-xs space-y-3" style={{ color: 'var(--muted)' }}>
            <li><span style={{ color: 'var(--cyan)' }}>1.</span> Open <code className="font-mono px-1 rounded" style={{ background: 'var(--bg3)' }}>src/data/siteData.ts</code> and add an entry to the <code className="font-mono px-1 rounded" style={{ background: 'var(--bg3)' }}>blog: [...]</code> array</li>
            <li><span style={{ color: 'var(--cyan)' }}>2.</span> Set a unique <code className="font-mono px-1 rounded" style={{ background: 'var(--bg3)' }}>slug</code> (e.g. <code className="font-mono px-1 rounded" style={{ background: 'var(--bg3)' }}>"building-apis"</code>)</li>
            <li><span style={{ color: 'var(--cyan)' }}>3.</span> Add a cover image to <code className="font-mono px-1 rounded" style={{ background: 'var(--bg3)' }}>public/images/</code></li>
            <li><span style={{ color: 'var(--cyan)' }}>4.</span> Edit <code className="font-mono px-1 rounded" style={{ background: 'var(--bg3)' }}>src/app/blog/[slug]/page.tsx</code> to add full post content</li>
          </ol>
        </div>
      </div>
    </main>
  )
}
