/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgi': "url('./src/components/home/BG.png')",
        'bgm': "url('./src/components/home/BGmobile.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
   
  },
  plugins: [],
}

