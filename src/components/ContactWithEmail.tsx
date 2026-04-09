"use client"
'use client'
import { useState, useRef } from 'react'
import { siteData } from '@/data/siteData'

// ─────────────────────────────────────────────
// HOW TO SET UP EMAILJS (free — 200 emails/mo)
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail works great)
// 3. Create an Email Template with these variables:
//      {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Copy your Service ID, Template ID, and Public Key
// 5. Replace the three constants below
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Dynamically import EmailJS to keep bundle small
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
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
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
              Messages sent through this form go directly to my inbox.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-bg border border-border rounded-lg flex items-center justify-center text-cyan">
                  ✉
                </div>
                <div>
                  <div className="text-xs text-muted mb-0.5">Email</div>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="text-sm text-white hover:text-cyan transition-colors"
                  >
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

            <div className="flex gap-3">
              {[
                { label: 'GH', href: siteData.github, title: 'GitHub' },
                { label: 'LI', href: siteData.linkedin, title: 'LinkedIn' },
                { label: 'TW', href: siteData.twitter, title: 'Twitter' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.title}
                  className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-xs text-muted hover:border-cyan hover:text-cyan transition-colors font-mono"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-bg border border-border rounded-xl p-6 space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted uppercase tracking-widest block mb-1.5">
                  Name
                </label>
                <input
                  name="from_name"
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-xs text-muted uppercase tracking-widest block mb-1.5">
                  Email
                </label>
                <input
                  name="from_email"
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
              <label className="text-xs text-muted uppercase tracking-widest block mb-1.5">
                Subject
              </label>
              <input
                name="subject"
                className="form-input"
                placeholder="What's this about?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="text-xs text-muted uppercase tracking-widest block mb-1.5">
                Message
              </label>
              <textarea
                name="message"
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
              disabled={status === 'sending'}
              className="w-full bg-cyan text-bg font-semibold py-3 rounded-md text-sm hover:opacity-85 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'idle' && 'Send Message →'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && '✓ Message Sent!'}
              {status === 'error' && '✗ Failed — try emailing directly'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
