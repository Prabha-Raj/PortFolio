/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
   extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Georgia': ['Georgia', 'serif'],
        'Fira_Code': ['Fira Code', 'monospace'],
        'JetBrains_Mono': ['JetBrains Mono', 'monospace'],
        'Courier_Prime': ['Courier Prime', 'monospace'],
        'Source_Code_Pro': ['Source Code Pro', 'monospace']
      },
    },
  },
  plugins: [],
}