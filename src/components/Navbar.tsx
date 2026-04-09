"use client"
'use client'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home',         href: '#hero' },
  { label: 'About',        href: '#about' },
  { label: 'Career',       href: '#career' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Education',    href: '#education' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Blog',         href: '#blog' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(var(--bg-raw, 10,10,15), 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => handleNav('#hero')}
          className="font-mono text-sm font-bold tracking-wide shrink-0"
          style={{ color: 'var(--cyan)' }}
        >
          daniel<span style={{ color: 'var(--text)' }}>.ngwasi</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-5 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-xs uppercase tracking-widest transition-colors duration-200 relative pb-0.5"
                style={{
                  color: active === link.href ? 'var(--cyan)' : 'var(--muted)',
                  borderBottom: active === link.href ? '1px solid var(--cyan)' : '1px solid transparent',
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />

          {/* Hire Me CTA — desktop only */}
          <a
            href="#contact"
            onClick={() => handleNav('#contact')}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-md transition-opacity hover:opacity-85"
            style={{ background: 'var(--cyan)', color: 'var(--bg)' }}
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: 'var(--muted)' }}
          >
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ background: 'var(--bg2)', borderBottom: menuOpen ? '1px solid var(--border)' : 'none' }}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="w-full text-left py-3 text-sm uppercase tracking-widest transition-colors border-b"
                style={{
                  color: active === link.href ? 'var(--cyan)' : 'var(--muted)',
                  borderColor: 'var(--border)',
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#contact"
              onClick={() => handleNav('#contact')}
              className="block w-full text-center text-sm font-semibold py-3 rounded-md"
              style={{ background: 'var(--cyan)', color: 'var(--bg)' }}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
