/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0F11',
        panel: '#15171A',
        line: '#2A2D31',
        paper: '#F2EEE8',
        muted: '#AAA59E',
        accent: '#D98E4A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 16px 50px rgba(217, 142, 74, 0.12)',
      },
    },
  },
  plugins: [],
};
