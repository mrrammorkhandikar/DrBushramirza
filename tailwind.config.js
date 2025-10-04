// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 💥 ADD CUSTOM KEYFRAMES AND ANIMATION
      keyframes: {
        slideLeftFast: { // Renamed for clarity
          '0%': { transform: 'translateX(0)' },
          // CRITICAL FIX: Translate by -50% to smoothly loop the duplicated content
          '100%': { transform: 'translateX(-50%)' }, 
        },
      },
      animation: {
        // FIX: Use 10s for a smooth, fast loop R->L. Change to 2s if truly required.
        'slide-fast': 'slideLeftFast 10s linear infinite', 
      },
      colors: {
        primary: '#1f5855',
        tealSoft: '#7aa9ac',
        neutralLight: '#bfc7c7',
        brownAccent: '#5a4319',
        goldAccent: '#e7cb76',
      },
    },
  },
  plugins: [],
};