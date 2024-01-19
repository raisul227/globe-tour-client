/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroImg': "url('/src/assets/images/Hero/Hero.jpg')"
      },
      fontFamily: {
        'Poppins': ["Poppins", "sans-serif"]
      }
    },
    colors: {
      'custom': '#F4834A'
    }
  },
  plugins: [require("daisyui")],
}

