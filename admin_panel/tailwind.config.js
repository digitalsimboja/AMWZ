/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFBC16',
        'custom-active': '#F3F3F3',
        'custom-gray': '#F3F3F3',
        'custom-gray-text': '#E7E7E7',
      },
    },
  },
  plugins: [],
};

