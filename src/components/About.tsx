import { siteData } from '@/data/siteData'

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image placeholder */}
        <div className="bg-bg2 border border-border rounded-2xl aspect-[4/5] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-blue/5" />
          <div className="text-center z-10">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan to-blue flex items-center justify-center text-bg text-4xl font-bold mx-auto mb-4">
              DN
            </div>
            <p className="text-muted text-sm">Add your photo here</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-heading">My Journey</h2>
          <p className="text-muted leading-relaxed mb-5">{siteData.bio}</p>
          <p className="text-muted leading-relaxed mb-8">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to
            open-source projects, and mentoring aspiring developers.
          </p>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-bg3 border border-border px-5 py-2.5 rounded-md text-sm text-white hover:border-cyan transition-colors"
          >
            ↓ Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
