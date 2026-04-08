import Image from 'next/image'
import { siteData } from '@/data/siteData'

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Profile photo */}
        <div className="bg-bg2 border border-border rounded-2xl overflow-hidden aspect-[4/5] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10" />
          <Image
            src={siteData.images.profile}
            alt="Daniel Ngwasi"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Content */}
        <div>
          <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-heading">My Journey</h2>
          <p className="text-muted leading-relaxed mb-5">{siteData.bio}</p>
          <p className="text-muted leading-relaxed mb-8">
            When I&apos;m not coding or managing ICT infrastructure, you can find me exploring new
            technologies, contributing to open-source projects, and mentoring aspiring developers.
          </p>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: 'University', value: "St. Paul's University" },
              { label: 'Graduated', value: '2022' },
              { label: 'Current Role', value: 'ICT Officer' },
              { label: 'Location', value: 'Nairobi, Kenya' },
            ].map((fact) => (
              <div key={fact.label} className="bg-bg2 border border-border rounded-lg p-3">
                <div className="text-xs text-muted mb-1">{fact.label}</div>
                <div className="text-sm font-semibold text-white">{fact.value}</div>
              </div>
            ))}
          </div>

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
