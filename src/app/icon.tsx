import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          fontWeight: 700,
          color: 'white',
          fontFamily: 'monospace',
          background: 'linear-gradient(135deg, #7c6ffa, #c084fc)',
        }}
      >
        DN
      </div>
    ),
    { ...size }
  )
}
