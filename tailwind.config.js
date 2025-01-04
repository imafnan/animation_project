/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bannaOne: '#FFF7CF',
        bannaTwo: '#F5DE6E',
        strawberryOne: '#FFE1E2',
        strawberryTwo: '#FCB1B4',
        kiwiOne: '#ECFFCC',
        kiwiTwo: '#8FB351',
        bluberryOne: '#FFCBEA',
        bluberryTwo: '#C976A7',
      },
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