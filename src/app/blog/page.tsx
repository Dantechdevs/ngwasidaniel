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

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 max-w-4xl mx-auto px-4 md:px-6">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Writing</p>
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>All Blog Posts</h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Thoughts on software development, ICT, and technology.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {siteData.blog.map((post, i) => (
          <Link key={i} href={post.slug === '#' ? '#' : `/blog/${post.slug}`}
            className="rounded-xl overflow-hidden block card-hover"
            style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
            <div className="h-44 relative">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg2) 0%, transparent 60%)' }} />
              <span className="absolute bottom-3 left-3 text-xs px-2.5 py-1 rounded-full font-mono"
                style={{
                  background: `${categoryColors[post.category] || '#888'}22`,
                  border: `1px solid ${categoryColors[post.category] || '#888'}44`,
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

      {/* HOW TO ADD NEW BLOG POSTS — developer guide */}
      <div className="mt-16 rounded-xl p-6" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>
          📝 How to add a new blog post
        </p>
        <ol className="text-xs space-y-3" style={{ color: 'var(--muted)' }}>
          <li><span style={{ color: 'var(--cyan)' }}>1.</span> Open <code className="font-mono px-1 rounded" style={{ background: 'var(--bg3)' }}>src/data/siteData.ts</code></li>
          <li><span style={{ color: 'var(--cyan)' }}>2.</span> Find the <code className="font-mono px-1 rounded" style={{ background: 'var(--bg3)' }}>blog: [...]</code> array</li>
          <li><span style={{ color: 'var(--cyan)' }}>3.</span> Add a new entry like this:
            <pre className="mt-2 p-3 rounded text-xs overflow-x-auto" style={{ background: 'var(--bg3)', color: 'var(--text)' }}>{`{
  title: "Your Blog Post Title",
  category: "Backend",        // Frontend | Backend | Tools | ICT
  date: "April 2026",
  excerpt: "Short summary shown on cards...",
  slug: "your-post-slug",     // used in URL: /blog/your-post-slug
  image: "/images/your-image.png",
}`}</pre>
          </li>
          <li><span style={{ color: 'var(--cyan)' }}>4.</span> Add a cover image to <code className="font-mono px-1 rounded" style={{ background: 'var(--bg3)' }}>public/images/</code></li>
          <li><span style={{ color: 'var(--cyan)' }}>5.</span> Create the full post at <code className="font-mono px-1 rounded" style={{ background: 'var(--bg3)' }}>src/app/blog/[slug]/page.tsx</code></li>
        </ol>
      </div>
    </main>
  )
}
