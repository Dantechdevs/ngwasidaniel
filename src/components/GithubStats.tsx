'use client'
import { useState } from 'react'
import { siteData } from '@/data/siteData'

// The original public instance (github-readme-stats.vercel.app) is a shared,
// free-tier service that regularly hits GitHub API rate limits and returns
// 503s under load. The maintainers announced in mid-2026 that active work has
// moved to this actively-maintained fork, which is a drop-in replacement with
// identical params — just a different domain. Track failures per-image so a
// dead widget doesn't leave a broken-image icon sitting in the layout.
const STATS_HOST = 'https://github-stats-extended.vercel.app'

function StatImage({ src, alt, width, height, minWidth, className = '' }: {
  src: string; alt: string; width: number; height: number; minWidth?: number; className?: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="w-full flex items-center justify-center rounded-xl text-xs font-mono p-6"
        style={{ aspectRatio: `${width}/${height}`, background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
        Stats service unavailable right now — refresh to retry.
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`w-full rounded-xl ${className}`}
      style={{ border: '1px solid var(--border)', ...(minWidth ? { minWidth } : {}) }}
    />
  )
}

export default function GithubStats() {
  const user = siteData.githubUsername

  return (
    <section id="github-activity" className="py-24 max-w-6xl mx-auto px-4 md:px-6">
      <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Live Activity</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading" style={{ color: 'var(--text)' }}>GitHub Activity</h2>
      <p className="text-sm mb-14 max-w-2xl" style={{ color: 'var(--muted)' }}>
        A live look at what I&apos;ve been building, straight from{' '}
        <a href={siteData.github} target="_blank" rel="noopener noreferrer"
          className="underline" style={{ color: 'var(--cyan)' }}>
          @{user}
        </a>.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <StatImage
          src={`${STATS_HOST}/api?username=${user}&show_icons=true&theme=dark&bg_color=0d0d14&title_color=7c6ffa&icon_color=7c6ffa&text_color=eaeaf5&border_color=2e2e4a&hide_border=false`}
          alt="Daniel's GitHub stats"
          width={495} height={195}
        />
        <StatImage
          src={`${STATS_HOST}/api/top-langs/?username=${user}&layout=compact&theme=dark&bg_color=0d0d14&title_color=7c6ffa&text_color=eaeaf5&border_color=2e2e4a&hide_border=false`}
          alt="Daniel's most used languages"
          width={300} height={195}
        />
      </div>

      <div className="rounded-xl p-4 overflow-x-auto" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
        <StatImage
          src={`https://ghchart.rshah.org/7c6ffa/${user}`}
          alt="Daniel's GitHub contribution graph"
          width={720} height={112}
          minWidth={600}
        />
      </div>

      <p className="text-xs mt-4" style={{ color: 'var(--muted)' }}>
        Some private/client repositories aren&apos;t reflected here — see{' '}
        <a href="#projects" className="underline" style={{ color: 'var(--cyan)' }}>Projects</a>{' '}
        for the full picture.
      </p>
    </section>
  )
}