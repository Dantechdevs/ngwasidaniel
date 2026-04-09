import type { Metadata } from 'next'
import { Sora, Space_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

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
    'ICT Officer and Software Developer specializing in scalable web applications and practical software solutions. Based in Nairobi, Kenya.',
  keywords: ['software developer', 'ICT officer', 'web developer', 'React', 'Next.js', 'Kenya', 'Nairobi'],
  openGraph: {
    title: 'Daniel Ngwasi | Software Developer',
    description: 'Building practical systems that solve real-world problems.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceMono.variable}`} data-theme="dark">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
