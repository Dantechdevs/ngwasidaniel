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
  title: 'Daniel Ngwasi | Full-Stack Software Engineer',
  description:
    'Full-Stack Software Engineer and Digital Systems Analyst specializing in scalable web applications, Laravel systems, and ICT infrastructure. Based in Nairobi, Kenya. Built by Dantechdevelopers.com',
  keywords: ['software developer', 'ICT officer', 'web developer', 'React', 'Next.js', 'Laravel', 'PHP', 'Kenya', 'Nairobi', 'Dantechdevelopers'],
  authors: [{ name: 'Daniel Ngwasi', url: 'https://dantechdevelopers.com' }],
  creator: 'Dantechdevelopers.com',
  openGraph: {
    title: 'Daniel Ngwasi | Full-Stack Software Engineer',
    description: 'Building practical systems that solve real-world problems. Nairobi, Kenya.',
    type: 'website',
    url: 'https://dantechdevelopers.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceMono.variable}`} data-theme="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
