/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html", // Scan HTML files in public folder
    "./src/**/*.{html,js}", // Scan HTML and JS files in src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary1: "#1f2937",
        secondary2: "#2563eb",
        tertiary: "",
      },
    },
  },
  plugins: [],
};

// extend: {
//   spacing: {
//     '128': '32rem',
//     '144': '36rem',
//   },
//   borderRadius: {
//     '4xl': '2rem',
//   },
//   fontFamily: {
//     sans: ['Graphik', 'sans-serif'],
//     serif: ['Merriweather', 'serif'],
//   },
//   fontSize: {
//     'xs': '.75rem',
//     'sm': '.875rem',
//     'tiny': '.875rem',
//     'base': '1rem',
//     'lg': '1.125rem',
//     'xl': '1.25rem',
//     '2xl': '1.5rem',
//     '3xl': '1.875rem',
//     '4xl': '2.25rem',
//     '5xl': '3rem',
//     '6xl': '4rem',
//     '7xl': '5rem',
//   },
// },
