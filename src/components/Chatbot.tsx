"use client";
'use client'
import { useState, useRef, useEffect } from 'react'
import { siteData } from '@/data/siteData'

type Message = { from: 'user' | 'bot'; text: string; time: string }

const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

function getBotReply(input: string): string {
  const lower = input.toLowerCase()
  for (const item of siteData.chatbot.autoReplies) {
    if (item.triggers.some((t: string) => lower.includes(t))) return item.reply
  }
  return `Thanks for your message! Daniel will respond soon. You can also reach him directly:\n📧 ${siteData.email}\n📱 WhatsApp: ${siteData.whatsapp}`
}

const WA_NUMBER = siteData.chatbot.whatsappNumber.replace(/\D/g, '')
const WA_LINK = `https://wa.me/${WA_NUMBER}`

export default function Chatbot() {
  const [open, setOpen]       = useState(false)
  const [input, setInput]     = useState('')
  const [showTip, setShowTip] = useState(true)
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: siteData.chatbot.greeting, time: getTime() },
  ])
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, open])

  // Hide tooltip after 5s
  useEffect(() => { const t = setTimeout(() => setShowTip(false), 5000); return () => clearTimeout(t) }, [])

  const send = () => {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, { from: 'user', text, time: getTime() }])
    setInput('')
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: getBotReply(text), time: getTime() }])
    }, 700)
  }

  return (
    <>
      {/* Tooltip */}
      {!open && showTip && (
        <div className="fixed bottom-24 right-6 z-50 text-xs px-3 py-2 rounded-xl shadow-lg animate-bounce pointer-events-none"
          style={{ background: 'var(--bg2)', border: '1px solid var(--border)', color: 'var(--text)' }}>
          💬 Chat with me!
        </div>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>

          {/* Header */}
          <div className="px-4 py-3 flex items-center gap-3" style={{ background: '#075e54' }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{ background: 'var(--cyan)', color: 'var(--bg)' }}>DN</div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-semibold truncate">Daniel Ngwasi</div>
              <div className="text-green-300 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online
              </div>
            </div>
            {/* Open in WhatsApp */}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors flex-shrink-0" title="Open in WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-xl leading-none ml-1">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64" style={{ background: '#0d1117' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed whitespace-pre-line ${
                  msg.from === 'user' ? 'rounded-br-none' : 'rounded-bl-none'
                }`} style={{
                  background: msg.from === 'user' ? '#005c4b' : 'var(--bg3)',
                  border: msg.from === 'bot' ? '1px solid var(--border)' : 'none',
                  color: 'var(--text)',
                }}>
                  {msg.text}
                  <div className="text-[10px] mt-1 text-right opacity-50">{msg.time}</div>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 flex gap-2" style={{ borderTop: '1px solid var(--border)' }}>
            <input
              className="flex-1 rounded-full px-3 py-2 text-xs outline-none"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
            />
            <button onClick={send}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-opacity hover:opacity-85"
              style={{ background: '#00a884' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/>
              </svg>
            </button>
          </div>

          {/* Direct WhatsApp CTA */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold transition-opacity hover:opacity-85"
            style={{ background: '#25d366', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp →
          </a>
        </div>
      )}

      {/* Floating WhatsApp button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => { e.preventDefault(); setOpen(!open); setShowTip(false) }}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: '#25d366' }}
        aria-label="Chat on WhatsApp"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )}
      </a>
    </>
  )
}
