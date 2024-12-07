/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'bgImg': "url('/src/assets/bgImg.jpg')"
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],

}

