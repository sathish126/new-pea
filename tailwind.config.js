module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['MinecraftPE', 'sans-serif'], // Custom font name
      },
      animation: {
        bounceSlow: 'bounce 3s infinite', // Slower bounce animation
        pulseSlow: 'pulse 3s infinite',  // Slower pulse animation
        colorShift: 'colorShift 5s infinite', // Custom color shift
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
