import { siteData } from '@/data/siteData'

const categoryColors: Record<string, string> = {
  Backend: 'text-blue border-blue/30 bg-blue/10',
  Frontend: 'text-cyan border-cyan/30 bg-cyan/10',
  Development: 'text-purple border-purple/30 bg-purple/10',
}

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-bg2">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">Writing</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">From My Blog</h2>
        <p className="text-muted mb-14">
          Thoughts on design, development, and technology.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {siteData.blog.map((post, i) => (
            <a
              key={i}
              href={post.slug}
              className="bg-bg border border-border rounded-xl overflow-hidden card-hover block group"
            >
              {/* Banner */}
              <div
                className="h-36 flex items-end p-4 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #0a0a0f, ${
                    ['#0d2044', '#0a1a18', '#1a0a28'][i % 3]
                  })`,
                }}
              >
                <span
                  className={`text-xs px-2.5 py-1 rounded-full border font-mono ${
                    categoryColors[post.category] || 'text-muted border-border bg-bg3'
                  }`}
                >
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <div className="font-mono text-xs text-muted mb-3">{post.date}</div>
                <h3 className="font-semibold text-sm leading-snug mb-3 group-hover:text-cyan transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
