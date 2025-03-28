/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // Disable dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './site-generator/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0062FF',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0062FF',
          600: '#004ECC',
          700: '#003B99',
          800: '#002766',
          900: '#001433',
          950: '#000A1A',
        },
        secondary: {
          DEFAULT: '#6B7280',
          50: '#F8F9FA',
          100: '#F1F2F4',
          200: '#E4E6E9',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0B0F19',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontWeight: {
        bold: '700',
      },
    },
  },
  plugins: [],
}
