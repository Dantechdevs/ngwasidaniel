'use client'
import { siteData } from '@/data/siteData'

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=dark&bg_color=0d1117&title_color=00d4b8&icon_color=00d4b8&text_color=c9d1d9&border_color=30363d&hide_border=false`}
          alt="Daniel's GitHub stats"
          className="w-full rounded-xl"
          style={{ border: '1px solid var(--border)' }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=dark&bg_color=0d1117&title_color=00d4b8&text_color=c9d1d9&border_color=30363d&hide_border=false`}
          alt="Daniel's most used languages"
          className="w-full rounded-xl"
          style={{ border: '1px solid var(--border)' }}
        />
      </div>

      <div className="rounded-xl p-4 overflow-x-auto" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/00d4b8/${user}`}
          alt="Daniel's GitHub contribution graph"
          className="w-full min-w-[600px]"
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
