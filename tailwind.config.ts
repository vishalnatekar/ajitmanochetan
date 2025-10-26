import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
    './public/**/*.{html}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#d9ecff',
          200: '#b3d8ff',
          300: '#85c0ff',
          400: '#4d9aff',
          500: '#1d6ff1',
          600: '#1356c7',
          700: '#0f4299',
          800: '#0b306d',
          900: '#062042',
        },
      },
    },
  },
  plugins: [typography],
}

export default config
