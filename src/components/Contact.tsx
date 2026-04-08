'use client'
import { useState } from 'react'
import { siteData } from '@/data/siteData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your email service (EmailJS, Resend, etc.)
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-bg2">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-cyan text-xs uppercase tracking-widest mb-3">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">Let&apos;s Connect</h2>
        <p className="text-muted mb-14">
          Have a project in mind or want to chat? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <p className="text-muted leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to
              be part of your vision. Messages sent through this form go directly to my inbox.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-bg border border-border rounded-lg flex items-center justify-center text-cyan">
                  ✉
                </div>
                <div>
                  <div className="text-xs text-muted mb-0.5">Email</div>
                  <a href={`mailto:${siteData.email}`} className="text-sm text-white hover:text-cyan transition-colors">
                    {siteData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-bg border border-border rounded-lg flex items-center justify-center text-cyan">
                  📍
                </div>
                <div>
                  <div className="text-xs text-muted mb-0.5">Location</div>
                  <span className="text-sm text-white">{siteData.location}</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-10">
              {[
                { label: 'GH', href: siteData.github },
                { label: 'LI', href: siteData.linkedin },
                { label: 'TW', href: siteData.twitter },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-xs text-muted hover:border-cyan hover:text-cyan transition-colors font-mono"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-bg border border-border rounded-xl p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted uppercase tracking-widest block mb-1.5">Name</label>
                <input
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-xs text-muted uppercase tracking-widest block mb-1.5">Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted uppercase tracking-widest block mb-1.5">Subject</label>
              <input
                className="form-input"
                placeholder="What's this about?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-xs text-muted uppercase tracking-widest block mb-1.5">Message</label>
              <textarea
                className="form-input"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan text-bg font-semibold py-3 rounded-md text-sm hover:opacity-85 transition-opacity"
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
