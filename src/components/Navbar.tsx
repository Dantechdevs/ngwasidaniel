'use client'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

type Link = { label: string; href: string }
type NavItem = Link | { label: string; children: Link[] }

const navGroups: NavItem[] = [
  { label: 'About', href: '#about' },
  {
    label: 'Profile',
    children: [
      { label: 'Career', href: '#career' },
      { label: 'Skills', href: '#skills' },
    ],
  },
  { label: 'Projects', href: '#projects' },
  {
    label: 'More',
    children: [
      { label: 'Activity', href: '#github-activity' },
      { label: 'Blog', href: '#blog' },
      { label: 'Community', href: '#community' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

// Flattened list of every real section link — used for scroll-spy, hash-on-load,
// and the mobile menu. Rendering uses navGroups directly; this is bookkeeping only.
const flatLinks: Link[] = navGroups.flatMap((item) =>
  'children' in item ? item.children : [item]
)

const NAV_HEIGHT = 64 // px — must match h-16 below; used to offset scroll targets

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(flatLinks[0].href)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const clickLock = useRef(false) // suppress the observer briefly during a manual nav click
  const dropdownRefs = useRef<Record<string, HTMLLIElement | null>>({})

  // Respect a direct link like yoursite.com/#projects on first load, instead of
  // always defaulting to the first nav item until the user scrolls.
  useEffect(() => {
    const hash = window.location.hash
    if (hash && flatLinks.some(l => l.href === hash)) {
      setActive(hash)
      clickLock.current = true
      window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ block: 'start' })
        window.scrollBy({ top: -NAV_HEIGHT })
        clickLock.current = false
      }, 50)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close an open dropdown when clicking anywhere outside it
  useEffect(() => {
    if (!openDropdown) return
    const onClickOutside = (e: MouseEvent) => {
      const container = dropdownRefs.current[openDropdown]
      if (container && !container.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [openDropdown])

  // Scroll-spy: highlight whichever section is actually in view, not just the last clicked link
  useEffect(() => {
    const sections = flatLinks
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
    setOpenDropdown(null)
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
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" onClick={() => handleNav('#hero')}
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Daniel Ngwasi — home">
          <span className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }}>
            DN
          </span>
          <span className="font-bold text-base tracking-tight hidden sm:inline" style={{ color: 'var(--text)' }}>
            Daniel Ngwasi
          </span>
        </a>

        {/* Desktop links — plain items + grouped dropdowns, underline indicator on active */}
        <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navGroups.map((item) => {
            if (!('children' in item)) {
              return (
                <li key={item.href} className="relative">
                  <button type="button" onClick={() => handleNav(item.href)}
                    aria-current={active === item.href ? 'true' : undefined}
                    className="text-sm font-semibold px-4 py-2 transition-colors duration-200"
                    style={{ color: active === item.href ? 'var(--text)' : 'var(--muted)' }}>
                    {item.label}
                    <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full transition-transform duration-200 origin-left"
                      style={{
                        background: 'linear-gradient(90deg, var(--cyan), var(--purple))',
                        transform: active === item.href ? 'scaleX(1)' : 'scaleX(0)',
                      }} />
                  </button>
                </li>
              )
            }

            const isGroupActive = item.children.some(c => c.href === active)
            const isOpen = openDropdown === item.label

            return (
              <li key={item.label} className="relative"
                ref={(el) => { dropdownRefs.current[item.label] = el }}>
                <button type="button"
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  aria-expanded={isOpen}
                  className="flex items-center gap-1 text-sm font-semibold px-4 py-2 transition-colors duration-200"
                  style={{ color: isGroupActive || isOpen ? 'var(--text)' : 'var(--muted)' }}>
                  {item.label}
                  <ChevronDown size={14} className="transition-transform duration-200"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full transition-transform duration-200 origin-left"
                    style={{
                      background: 'linear-gradient(90deg, var(--cyan), var(--purple))',
                      transform: isGroupActive ? 'scaleX(1)' : 'scaleX(0)',
                    }} />
                </button>

                {/* Dropdown panel */}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? 'visible' : 'hidden',
                    transform: isOpen ? 'translate(-50%, 0)' : 'translate(-50%, -4px)',
                  }}>
                  <ul className="min-w-[160px] rounded-xl overflow-hidden py-1"
                    style={{ background: 'var(--bg2)', border: '1px solid var(--border)', boxShadow: '0 12px 32px rgba(0,0,0,0.35)' }}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <button type="button" onClick={() => handleNav(child.href)}
                          aria-current={active === child.href ? 'true' : undefined}
                          className="w-full text-left text-sm font-medium px-4 py-2.5 transition-colors"
                          style={{ color: active === child.href ? 'var(--cyan)' : 'var(--text)' }}>
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full"
            style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
            <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80' }} />
            Available for work
          </div>
          <ThemeToggle />
          <a href="#contact" onClick={() => handleNav('#contact')}
            className="hidden md:inline-flex items-center text-sm font-bold px-5 py-2.5 rounded-full text-white transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }}>
            Hire Me
          </a>
          <button type="button" className="lg:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu" style={{ color: 'var(--muted)' }}>
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Persistent divider — subtle at the top of the page, fuller once scrolled */}
      <div className="h-px w-full transition-opacity duration-300"
        style={{
          background: 'linear-gradient(90deg, rgba(124,111,250,0.15), var(--cyan) 15%, var(--purple) 85%, rgba(192,132,252,0.15))',
          height: '2px',
          opacity: scrolled ? 1 : 0.85,
          boxShadow: scrolled ? '0 1px 8px rgba(124,111,250,0.35)' : 'none',
        }} />

      {/* Mobile menu — groups get a small uppercase label, children indented beneath */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ background: 'var(--bg2)', borderBottom: menuOpen ? '1px solid var(--border)' : 'none' }}>
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navGroups.map((item) => {
            if (!('children' in item)) {
              return (
                <li key={item.href}>
                  <button type="button" onClick={() => handleNav(item.href)}
                    aria-current={active === item.href ? 'true' : undefined}
                    className="w-full text-left py-3 text-sm font-semibold transition-colors border-b"
                    style={{ color: active === item.href ? 'var(--cyan)' : 'var(--text)', borderColor: 'var(--border)' }}>
                    {item.label}
                  </button>
                </li>
              )
            }
            return (
              <li key={item.label} className="border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="pt-3 pb-1 text-[11px] font-bold uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                  {item.label}
                </div>
                <ul className="flex flex-col pb-2">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <button type="button" onClick={() => handleNav(child.href)}
                        aria-current={active === child.href ? 'true' : undefined}
                        className="w-full text-left py-2.5 pl-3 text-sm font-medium transition-colors"
                        style={{ color: active === child.href ? 'var(--cyan)' : 'var(--text)' }}>
                        {child.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
          <li className="pt-4 flex items-center">
            <div className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
              <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80' }} />
              Available for work
            </div>
          </li>
          <li className="pt-3">
            <a href="#contact" onClick={() => handleNav('#contact')}
              className="block w-full text-center text-sm font-bold py-3 rounded-full text-white"
              style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))' }}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}