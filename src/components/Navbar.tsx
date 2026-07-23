'use client'
import { useState, useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Career', href: '#career' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Activity', href: '#github-activity' },
  { label: 'Blog', href: '#blog' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
]

const NAV_HEIGHT = 64 // px — must match h-16 below; used to offset scroll targets

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(navLinks[0].href)
  const clickLock = useRef(false) // suppress the observer briefly during a manual nav click

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight whichever section is actually in view, not just the last clicked link
  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector(l.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLock.current) return
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: `-${NAV_HEIGHT + 16}px 0px -60% 0px`, threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setActive(href)
    setMenuOpen(false)
    clickLock.current = true

    const target = document.querySelector(href) as HTMLElement | null
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
      window.scrollTo({ top, behavior: 'smooth' })
    }
    // release the lock once the smooth scroll has settled
    window.setTimeout(() => { clickLock.current = false }, 700)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(13,13,20,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo — terminal prompt style */}
        <a href="#hero" onClick={() => handleNav('#hero')}
          className="font-mono text-sm shrink-0 flex items-center gap-1.5"
          aria-label="Daniel Ngwasi — home">
          <span style={{ color: 'var(--muted)' }}>~/</span>
          <span style={{ color: 'var(--text)' }}>daniel</span>
          <span style={{ color: 'var(--cyan)' }}>.ngwasi</span>
          <span className="blink" style={{ color: 'var(--cyan)' }}>_</span>
        </a>

        {/* Desktop links — numbered like a real table of contents */}
        <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <button type="button" onClick={() => handleNav(link.href)}
                aria-current={active === link.href ? 'true' : undefined}
                className="font-mono text-xs px-3 py-2 rounded-md transition-colors duration-200 flex items-center gap-1.5"
                style={{
                  color: active === link.href ? 'var(--text)' : 'var(--muted)',
                  background: active === link.href ? 'var(--bg3)' : 'transparent',
                }}>
                <span style={{ color: 'var(--cyan)', opacity: 0.7 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="uppercase tracking-widest">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-full"
            style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
            <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80' }} />
            open-to-work
          </div>
          <ThemeToggle />
          <a href="#contact" onClick={() => handleNav('#contact')}
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-4 py-2 rounded-md transition-opacity hover:opacity-85"
            style={{ background: 'var(--cyan)', color: 'var(--bg)' }}>
            hire_me()
          </a>
          <button type="button" className="lg:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu" style={{ color: 'var(--muted)' }}>
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ background: 'var(--bg2)', borderBottom: menuOpen ? '1px solid var(--border)' : 'none' }}>
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <button type="button" onClick={() => handleNav(link.href)}
                aria-current={active === link.href ? 'true' : undefined}
                className="w-full text-left py-3 font-mono text-sm uppercase tracking-widest transition-colors border-b flex items-center gap-2"
                style={{ color: active === link.href ? 'var(--cyan)' : 'var(--muted)', borderColor: 'var(--border)' }}>
                <span style={{ opacity: 0.6 }}>{String(i + 1).padStart(2, '0')}</span>
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <a href="#contact" onClick={() => handleNav('#contact')}
              className="block w-full text-center font-mono text-sm font-semibold py-3 rounded-md"
              style={{ background: 'var(--cyan)', color: 'var(--bg)' }}>
              hire_me()
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}