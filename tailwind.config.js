/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      colors: {
        caribbean: '#3b82f6',
        charcoal: '#1a1a1a',
        midnight: '#0d0d0d',
      },
      spacing: {
        'xs': '0.25rem',
        's': '0.5rem',
        'm': '1rem',
        'l': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '5rem',
      },
      fontSize: {
        '--1': '0.75rem',
        '0': '0.875rem',
        '1': '1rem',
        '2': '1.25rem',
        '3': '1.5rem',
        '4': '2rem',
        '5': '2.5rem',
        '6': '3rem',
        '7': '3.5rem',
        '8': '4rem',
        '9': '4.5rem',
        '10': '5rem',
      },
    },
  },
  plugins: [],
}
