/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unblessed: ['unblessed', 'sans-serif'],
        minecraft: ['MinecraftPE', 'sans-serif'],
        'dirty-brush': ['DirtyBrush', 'sans-serif'],
        goodBrush: ['GoodBrush', 'cursive'],
        whiteOnBlack: ['WhiteOnBlack', 'sans-serif'],
        romanSD: ['RomanSD', 'sans-serif'], 
        
      },
      animation: {
        bounceSlow: 'bounce 3s infinite',
        pulseSlow: 'pulse 3s infinite',
        colorShift: 'colorShift 5s infinite',
      },
      keyframes: {
        colorShift: {
          '0%': { color: '#F59E0B' },  // Yellow
          '50%': { color: '#10B981' }, // Green
          '100%': { color: '#F59E0B' }, // Back to Yellow
        },
      },
    },
  },
  plugins: [],
};
