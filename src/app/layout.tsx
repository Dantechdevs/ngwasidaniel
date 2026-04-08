import type { Metadata } from 'next'
import { Sora, Space_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Daniel Ngwasi | Software Developer',
  description:
    'Computer Science Graduate and Software Developer specializing in scalable web applications and practical software solutions.',
  keywords: ['software developer', 'web developer', 'React', 'Next.js', 'Kenya', 'Nairobi'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
