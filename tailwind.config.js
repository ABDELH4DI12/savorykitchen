/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',     // Dark gray - professional
        secondary: '#059669',   // Emerald green - fresh
        accent: '#10B981',      // Light green
        dark: '#111827',        // Almost black
        light: '#F9FAFB',       // Light gray
        'brand-dark': '#1F2937',
        'brand-green': '#059669',
        'brand-gold': '#D97706',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Fredoka', 'cursive'],
        'comic': ['Comic Neue', 'cursive'],
        'bubblegum': ['Bubblegum Sans', 'cursive'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
