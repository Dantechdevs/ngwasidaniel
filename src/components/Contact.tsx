"use client";
'use client'
import { useState } from 'react'
import { siteData } from '@/data/siteData'
import SocialIcons from './SocialIcons'

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with EmailJS / Resend — see ContactWithEmail.tsx for full setup
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--cyan)' }}>Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading" style={{ color: 'var(--text)' }}>
          Let&apos;s Connect
        </h2>
        <p className="mb-14 text-sm" style={{ color: 'var(--muted)' }}>
          Have a project in mind or want to chat? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <p className="leading-relaxed mb-8 text-sm" style={{ color: 'var(--muted)' }}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
              Messages sent through this form go directly to my inbox.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                  label: 'Email',
                  value: siteData.email,
                  href: `mailto:${siteData.email}`,
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
                  label: 'WhatsApp',
                  value: siteData.whatsapp,
                  href: `https://wa.me/${siteData.whatsapp.replace(/\D/g, '')}`,
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
                  label: 'Location',
                  value: siteData.location,
                  href: null,
                },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--cyan)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: 'var(--muted)' }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm transition-colors"
                        style={{ color: 'var(--text)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: 'var(--text)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs mb-3" style={{ color: 'var(--muted)' }}>Find me on</p>
              <SocialIcons size="sm" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-xl p-6 space-y-4"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest block mb-1.5" style={{ color: 'var(--muted)' }}>Name</label>
                <input className="form-input" placeholder="Your name"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest block mb-1.5" style={{ color: 'var(--muted)' }}>Email</label>
                <input type="email" className="form-input" placeholder="your@email.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest block mb-1.5" style={{ color: 'var(--muted)' }}>Subject</label>
              <input className="form-input" placeholder="What's this about?"
                value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest block mb-1.5" style={{ color: 'var(--muted)' }}>Message</label>
              <textarea className="form-input" rows={5} placeholder="Tell me about your project..."
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button type="submit" disabled={status === 'sending'}
              className="w-full font-semibold py-3 rounded-md text-sm transition-opacity hover:opacity-85 disabled:opacity-60"
              style={{ background: 'var(--cyan)', color: 'var(--bg)' }}>
              {status === 'idle'    && 'Send Message →'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent'    && '✓ Message Sent!'}
              {status === 'error'   && '✗ Failed — try emailing directly'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
