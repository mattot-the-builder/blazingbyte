/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
    "./public/tech-stack/*.svg",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#15E5E5",
        secondary: "#5E8B8E",
        "primary-hover": "#41CECF",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
