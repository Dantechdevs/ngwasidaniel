"use client";
import Image from 'next/image'
import Link from 'next/link'
import { siteData } from '@/data/siteData'

const categoryColors: Record<string, string> = {
  Backend:     '#4488ff',
  Frontend:    '#00d4b8',
  Development: '#9966ff',
  Tools:       '#f59e0b',
  ICT:         '#10b981',
}

export default function Blog() {
  return (
    <section id="blog" className="py-24" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Writing</p>
            <h2 className="text-3xl md:text-4xl font-bold section-heading" style={{ color: 'var(--text)' }}>From My Blog</h2>
          </div>
          <Link href="/blog"
            className="text-xs font-mono transition-colors self-start sm:self-auto"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            View all posts →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.blog.map((post, i) => (
            <Link key={i} href={post.slug === '#' ? '/blog' : `/blog/${post.slug}`}
              className="rounded-xl overflow-hidden block group card-hover"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>

              {/* Real image */}
              <div className="h-44 relative overflow-hidden">
                <Image src={post.image} alt={post.title} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, var(--bg)/80, transparent)' }} />
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs px-2.5 py-1 rounded-full border font-mono"
                    style={{
                      background: `${categoryColors[post.category] || '#888'}22`,
                      borderColor: `${categoryColors[post.category] || '#888'}44`,
                      color: categoryColors[post.category] || 'var(--muted)',
                    }}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="font-mono text-xs mb-3" style={{ color: 'var(--muted)' }}>{post.date}</div>
                <h3 className="font-semibold text-sm leading-snug mb-3 transition-colors"
                  style={{ color: 'var(--text)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}>
                  {post.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Add blog CTA */}
        <div className="mt-10 text-center">
          <Link href="/blog"
            className="inline-flex items-center gap-2 text-sm px-6 py-3 rounded-md transition-colors"
            style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)'; (e.currentTarget as HTMLElement).style.color = 'var(--cyan)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--muted)' }}>
            View all blog posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
