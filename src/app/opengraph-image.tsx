import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Daniel Ngwasi — Full-Stack Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0d0d14',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(124,111,250,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(192,132,252,0.3), transparent 45%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              fontWeight: 700,
              color: 'white',
              background: 'linear-gradient(135deg, #7c6ffa, #c084fc)',
            }}
          >
            DN
          </div>
          <div style={{ fontSize: 28, color: '#8f8fb0', fontFamily: 'monospace' }}>
            ngwasidaniel.vercel.app
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 68, fontWeight: 800, color: '#eaeaf5', lineHeight: 1.1 }}>
          Daniel Ngwasi
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 32,
            fontWeight: 600,
            marginTop: 12,
            background: 'linear-gradient(90deg, #7c6ffa, #c084fc)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Full-Stack Software Engineer
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: '#8f8fb0', marginTop: 28, maxWidth: 820 }}>
          Building practical systems that solve real-world problems · Nairobi, Kenya
        </div>
      </div>
    ),
    { ...size }
  )
}
