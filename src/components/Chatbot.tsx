'use client'
import { useState, useRef, useEffect } from 'react'
import { siteData } from '@/data/siteData'

type Message = {
  from: 'user' | 'bot'
  text: string
  time: string
}

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function getBotReply(input: string): string {
  const lower = input.toLowerCase()
  for (const item of siteData.chatbot.autoReplies) {
    if (item.triggers.some((t) => lower.includes(t))) {
      return item.reply
    }
  }
  return "Thanks for your message! Daniel will get back to you soon. You can also reach him directly at damnngwasi@gmail.com or WhatsApp +254712328150 📩"
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: siteData.chatbot.greeting, time: getTime() },
  ])
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = () => {
    const text = input.trim()
    if (!text) return
    const now = getTime()

    setMessages((prev) => [...prev, { from: 'user', text, time: now }])
    setInput('')

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: getBotReply(text), time: getTime() },
      ])
    }, 800)
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') send()
  }

  return (
    <>
      {/* Tooltip */}
      {!open && (
        <div className="fixed bottom-24 right-6 z-50 bg-bg2 border border-border text-white text-xs px-3 py-2 rounded-lg shadow-lg animate-bounce">
          Chat with me on WhatsApp! ✓
        </div>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-bg2 border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-cyan flex items-center justify-center text-bg font-bold text-sm flex-shrink-0">
              DN
            </div>
            <div className="flex-1">
              <div className="text-white text-sm font-semibold">Daniel Ngwasi</div>
              <div className="text-green-300 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white text-lg leading-none"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72"
            style={{ background: '#0d1117' }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-xl text-xs leading-relaxed relative ${
                    msg.from === 'user'
                      ? 'bg-[#005c4b] text-white rounded-br-none'
                      : 'bg-bg3 text-white rounded-bl-none border border-border'
                  }`}
                >
                  {msg.text}
                  <div className="text-[10px] text-white/40 mt-1 text-right">{msg.time}</div>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2">
            <input
              className="flex-1 bg-bg3 border border-border rounded-full px-3 py-2 text-xs text-white placeholder-muted outline-none focus:border-cyan"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button
              onClick={send}
              className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white text-sm flex-shrink-0 hover:opacity-85 transition-opacity"
            >
              ➤
            </button>
          </div>

          {/* WhatsApp direct link */}
          <a
            href={`https://wa.me/${siteData.chatbot.whatsappNumber.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-[11px] text-[#00a884] py-2 hover:underline border-t border-border"
          >
            Open in WhatsApp ↗
          </a>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        {open ? (
          <span className="text-white text-xl">×</span>
        ) : (
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>
    </>
  )
}
