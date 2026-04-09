'use client'
import { siteData } from '@/data/siteData'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = siteData.blog.find(p => p.slug === params.slug)

  if (!post) {
    return (
      <main className="min-h-screen pt-32 flex items-center justify-center" style={{ background: 'var(--bg)' }}>
        <div className="text-center">
          <div className="text-6xl mb-6">📭</div>
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>Post not found</h1>
          <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>This post doesn't exist or hasn't been published yet.</p>
          <Link href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold"
            style={{ background: 'var(--cyan)', color: 'var(--bg)' }}>
            ← Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pb-20" style={{ background: 'var(--bg)' }}>
      {/* Hero image */}
      <div className="relative h-72 md:h-96 w-full">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, rgba(13,13,20,0.5) 100%)' }} />
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-6 -mt-8 relative z-10">
        {/* Back link */}
        <Link href="/blog"
          className="inline-flex items-center gap-1 text-xs mb-8 transition-colors"
          style={{ color: 'var(--muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
          ← Back to all posts
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="font-mono text-xs px-3 py-1 rounded-full"
            style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--cyan)' }}>
            {post.category}
          </span>
          <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>{post.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: 'var(--text)' }}>
          {post.title}
        </h1>

        <p className="text-base leading-relaxed mb-10 pb-10"
          style={{ color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
          {post.excerpt}
        </p>

        {/* Full content placeholder */}
        <div className="space-y-6 mb-16" style={{ color: 'var(--muted)' }}>
          <div className="rounded-xl p-5" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--cyan)' }}>
              ✏️ Content Placeholder
            </p>
            <p className="text-sm leading-relaxed">
              This is where your full article content goes. Open{' '}
              <code className="font-mono text-xs px-1.5 py-0.5 rounded" style={{ background: 'var(--bg3)', color: 'var(--cyan)' }}>
                src/app/blog/[slug]/page.tsx
              </code>{' '}
              and replace this block with your actual article — paragraphs, headings, code blocks, images, etc.
            </p>
          </div>
        </div>

        {/* Author card */}
        <div className="p-6 rounded-xl flex items-center gap-4"
          style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative"
            style={{ background: 'var(--bg3)', border: '2px solid var(--cyan)' }}>
            <Image src={siteData.images.working} alt="Daniel Ngwasi" fill className="object-cover object-top" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Daniel Ngwasi</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>ICT Officer & Software Developer · Nairobi, Kenya</div>
          </div>
          <Link href="/#contact"
            className="text-xs px-4 py-2 rounded-md font-semibold transition-opacity hover:opacity-85 hidden sm:block"
            style={{ background: 'var(--cyan)', color: 'var(--bg)' }}>
            Hire Me
          </Link>
        </div>

        {/* More posts */}
        <div className="mt-12">
          <h3 className="font-mono text-sm uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>More Posts</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {siteData.blog.filter(p => p.slug !== params.slug).slice(0, 2).map((p, i) => (
              <Link key={i} href={p.slug === '#' ? '/blog' : `/blog/${p.slug}`}
                className="rounded-xl overflow-hidden card-hover"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                <div className="h-28 relative overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: 'rgba(13,13,20,0.5)' }} />
                </div>
                <div className="p-4">
                  <div className="font-mono text-xs mb-1" style={{ color: 'var(--muted)' }}>{p.date}</div>
                  <h4 className="font-semibold text-xs leading-snug" style={{ color: 'var(--text)' }}>{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
