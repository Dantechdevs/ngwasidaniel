import Image from 'next/image'
import { siteData } from '@/data/siteData'

const categoryColors: Record<string, string> = {
  Backend: 'text-blue border-blue/30 bg-blue/10',
  Frontend: 'text-cyan border-cyan/30 bg-cyan/10',
  Development: 'text-purple border-purple/30 bg-purple/10',
  Tools: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
}

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-bg2">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">Writing</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">From My Blog</h2>
        <p className="text-muted mb-14">Thoughts on design, development, and technology.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {siteData.blog.map((post, i) => (
            <a
              key={i}
              href={post.slug}
              className="bg-bg border border-border rounded-xl overflow-hidden card-hover block group"
            >
              {/* Real image banner */}
              <div className="h-44 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border font-mono ${
                      categoryColors[post.category] || 'text-muted border-border bg-bg3'
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
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
