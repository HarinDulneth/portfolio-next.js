/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
          'geist-mono': ['var(--font-geist-mono)', 'monospace'],
          'great-vibes': ['var(--font-great-vibes)', 'cursive'],
          'goldman-regular': ['var(--font-goldman)', 'sans-serif'],
          'audiowide': ['var(--font-audiowide)', 'sans-serif'],
          'inter': ['var(--font-inter)', 'sans-serif'],
          'zendots': ['var(--font-zendots)', 'sans-serif'],
          'orbitron': ['var(--font-orbitron)', 'sans-serif'],
        },
        colors: {
          'magic-blue': '#6344F5',
          'magic-purple': '#AE48FF',
        },
        animation: {
          shimmer: "shimmer 2s linear infinite",
          gradient: 'gradient 2s linear infinite'
        },
        keyframes: {
          gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          shimmer: {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "-200% 0",
            },
          },
        },
      },
    },
    plugins: [],
  };
  