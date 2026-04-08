import { siteData } from '@/data/siteData'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden grid-bg"
    >
      {/* Radial glows */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 bg-bg3 border border-border rounded-full px-4 py-1.5 text-xs text-muted mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan pulse-dot" />
          Available for opportunities
        </div>

        {/* Name & role */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Hi, I&apos;m{' '}
          <span className="text-cyan">{siteData.name.split(' ')[0]}</span>{' '}
          <span className="text-blue">{siteData.name.split(' ')[1]}</span>
        </h1>

        <div className="font-mono text-muted text-sm md:text-base tracking-widest uppercase mb-6">
          {siteData.role}
        </div>

        <p className="max-w-xl text-muted leading-relaxed text-base mb-10">
          {siteData.tagline} Specializing in writing, testing, and maintaining{' '}
          <span className="text-white">efficient, scalable software</span> that makes a real impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#contact"
            className="bg-cyan text-bg font-semibold px-6 py-3 rounded-md text-sm hover:opacity-85 transition-opacity"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="border border-border text-white px-6 py-3 rounded-md text-sm hover:border-cyan transition-colors"
          >
            View my work
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 pt-8 border-t border-border">
          {siteData.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-3xl font-bold text-white">{stat.number}</div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
