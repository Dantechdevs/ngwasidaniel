/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:     'var(--bg)',
        bg2:    'var(--bg2)',
        bg3:    'var(--bg3)',
        border: 'var(--border)',
        text:   'var(--text)',
        muted:  'var(--muted)',
        cyan:   'var(--cyan)',
        blue:   'var(--blue)',
        purple: 'var(--purple)',
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
