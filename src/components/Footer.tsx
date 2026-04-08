import { siteData } from '@/data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-cyan text-sm font-bold mb-1">
              daniel<span className="text-white">.ngwasi</span>
            </div>
            <p className="text-muted text-xs max-w-xs">
              Creating digital experiences that inspire. Passionate about clean code, user-focused
              design, and impact-driven tech.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3">
              {[
                { label: 'GH', href: siteData.github },
                { label: 'LI', href: siteData.linkedin },
                { label: 'TW', href: siteData.twitter },
                { label: '✉', href: `mailto:${siteData.email}` },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-xs text-muted hover:border-cyan hover:text-cyan transition-colors font-mono"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="text-muted text-xs">
              © {new Date().getFullYear()} Daniel Ngwasi ✦ All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
