'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [form, setForm] = useState({ name: '', email: '' })
  const [subscribed, setSubscribed] = useState(false)
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [rated, setRated] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Connect to Mailchimp / ConvertKit / Resend here
    setSubscribed(true)
    setForm({ name: '', email: '' })
    setTimeout(() => setSubscribed(false), 4000)
  }

  const handleRate = (star: number) => {
    setRating(star)
    setRated(true)
  }

  return (
    <section className="py-24 bg-bg2">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Newsletter */}
        <div>
          <div className="w-12 h-12 bg-cyan/10 border border-cyan/20 rounded-xl flex items-center justify-center text-cyan text-xl mb-6">
            ✉
          </div>
          <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
          <p className="text-muted text-sm leading-relaxed mb-8">
            Subscribe to receive updates on my latest projects, blog posts, and industry insights.
            I respect your privacy — unsubscribe at any time.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              className="form-input"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              className="form-input"
              placeholder="Your email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <button
              type="submit"
              className="w-full bg-cyan text-bg font-semibold py-3 rounded-md text-sm hover:opacity-85 transition-opacity"
            >
              {subscribed ? '✓ Subscribed!' : 'Subscribe →'}
            </button>
          </form>
        </div>

        {/* Rating */}
        <div>
          <div className="w-12 h-12 bg-cyan/10 border border-cyan/20 rounded-xl flex items-center justify-center text-cyan text-xl mb-6">
            ★
          </div>
          <h2 className="text-2xl font-bold mb-3">Rate My Portfolio</h2>
          <p className="text-muted text-sm leading-relaxed mb-8">
            Did you enjoy my portfolio? Let me know with a quick rating — it helps me improve and
            create better experiences.
          </p>
          <div className="bg-bg border border-border rounded-xl p-8 text-center">
            <p className="text-sm text-muted mb-6">How would you rate my portfolio?</p>
            <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRate(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className="text-3xl transition-transform hover:scale-110"
                  disabled={rated}
                >
                  <span
                    className={
                      star <= (hovered || rating) ? 'text-cyan' : 'text-border'
                    }
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
            {rated ? (
              <p className="text-cyan text-sm font-mono">
                Thanks for your {rating}-star rating! 🙏
              </p>
            ) : (
              <>
                <p className="text-muted text-xs mb-1">Your feedback helps me improve!</p>
                <p className="text-muted text-xs">Ratings are collected anonymously.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
