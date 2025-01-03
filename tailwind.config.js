/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'bannaOne':'#FFF7CF',
      'bannaTwo':'#F5DE6E',
      'StrawberryOne':'#FFE1E2',
      'StrawberryTwo':'#FCB1B4',
      'KiwiOne':'#ECFFCC',
      'KiwiTwo':'#8FB351',
      'bluberryOne':'#FFCBEA',
      'bluberryTwo':'#C976A7'
    },
    container: {
      center: true,
    },
    fontFamily:{
      'ABeeZee':["ABeeZee", 'serif'],
      'BricolageGrotesque':["Bricolage Grotesque", 'serif']
    }
  },
  plugins: [],
}