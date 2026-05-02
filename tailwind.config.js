/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary':   '#000000',
        'bg-secondary': '#050505',
        'bg-card':      'rgba(255, 255, 255, 0.03)',
        'neon-blue':    '#3B82F6',
        'neon-cyan':    '#22D3EE',
        'neon-glow':    'rgba(59, 130, 246, 0.5)',
        'text-primary': '#FFFFFF',
        'text-secondary':'#9CA3AF',
        'text-muted':   '#4B5563',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
