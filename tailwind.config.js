/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'custom-image': "url('/src/assets/icons8-spring-boot.svg')",
    },
  },
  plugins: [],
}
