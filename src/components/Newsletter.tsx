"use client";
'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [form, setForm]       = useState({ name: '', email: '' })
  const [subscribed, setSub]  = useState(false)
  const [rating, setRating]   = useState(0)
  const [hovered, setHovered] = useState(0)
  const [rated, setRated]     = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSub(true)
    setForm({ name: '', email: '' })
    setTimeout(() => setSub(false), 4000)
  }

  return (
    <section className="py-24" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16">

        {/* Newsletter */}
        <div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
            style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--cyan)' }}>✉</div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>Stay Updated</h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
            Subscribe to receive updates on my latest projects, blog posts, and industry insights.
            I respect your privacy — unsubscribe at any time.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input className="form-input" placeholder="Your name" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })} required />
            <input type="email" className="form-input" placeholder="Your email address" value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })} required />
            <button type="submit"
              className="w-full font-semibold py-3 rounded-md text-sm transition-opacity hover:opacity-85"
              style={{ background: 'var(--cyan)', color: 'var(--bg)' }}>
              {subscribed ? '✓ Subscribed!' : 'Subscribe →'}
            </button>
          </form>
        </div>

        {/* Rating */}
        <div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
            style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--cyan)' }}>★</div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>Rate My Portfolio</h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
            Did you enjoy my portfolio? Let me know with a quick rating!
          </p>
          <div className="rounded-xl p-8 text-center"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>How would you rate my portfolio?</p>
            <div className="flex justify-center gap-3 mb-6">
              {[1,2,3,4,5].map(star => (
                <button key={star} onClick={() => { setRating(star); setRated(true) }}
                  onMouseEnter={() => setHovered(star)} onMouseLeave={() => setHovered(0)}
                  disabled={rated}
                  className="text-3xl transition-transform hover:scale-110">
                  <span style={{ color: star <= (hovered || rating) ? 'var(--cyan)' : 'var(--border)' }}>★</span>
                </button>
              ))}
            </div>
            {rated ? (
              <p className="text-sm font-mono" style={{ color: 'var(--cyan)' }}>
                Thanks for your {rating}-star rating! 🙏
              </p>
            ) : (
              <p className="text-xs" style={{ color: 'var(--muted)' }}>Your feedback helps me improve!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
