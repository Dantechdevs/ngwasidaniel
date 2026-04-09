"use client";
import { siteData } from '@/data/siteData'
import Image from 'next/image'
import Link from 'next/link'

// Static params from siteData blog entries
export async function generateStaticParams() {
  return siteData.blog
    .filter(p => p.slug !== '#')
    .map(p => ({ slug: p.slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = siteData.blog.find(p => p.slug === params.slug)

  if (!post) {
    return (
      <main className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>Post not found</h1>
          <Link href="/blog" className="text-sm" style={{ color: 'var(--cyan)' }}>← Back to blog</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero image */}
      <div className="relative h-64 md:h-80 w-full mb-12">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <Link href="/blog" className="inline-flex items-center gap-1 text-xs mb-8 transition-colors"
          style={{ color: 'var(--muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
          ← Back to all posts
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs px-3 py-1 rounded-full"
            style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--cyan)' }}>
            {post.category}
          </span>
          <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>{post.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: 'var(--text)' }}>
          {post.title}
        </h1>

        <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--muted)' }}>{post.excerpt}</p>

        {/* ─────────────────────────────────────────────────────────
            ✏️  ADD YOUR FULL BLOG CONTENT BELOW THIS COMMENT
            Replace this placeholder with your actual article.
            You can use regular JSX / HTML elements:
              <h2>, <p>, <ul>, <li>, <code>, <pre>, <img> etc.
        ──────────────────────────────────────────────────────── */}
        <div className="prose prose-invert max-w-none space-y-6" style={{ color: 'var(--muted)' }}>
          <p>
            This is where your full blog post content goes. Edit{' '}
            <code className="font-mono text-xs px-1.5 py-0.5 rounded" style={{ background: 'var(--bg3)', color: 'var(--cyan)' }}>
              src/app/blog/[slug]/page.tsx
            </code>{' '}
            and replace this section with your actual article.
          </p>
          <p>
            You can add headings, code blocks, images, lists — anything you need to tell your story.
          </p>
        </div>

        {/* Author card */}
        <div className="mt-16 p-6 rounded-xl flex items-center gap-4"
          style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
            <Image src={siteData.images.profile} alt="Daniel Ngwasi" fill className="object-cover object-top" />
          </div>
          <div>
            <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Daniel Ngwasi</div>
            <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>ICT Officer & Software Developer · Nairobi, Kenya</div>
          </div>
        </div>
      </div>
    </main>
  )
}
