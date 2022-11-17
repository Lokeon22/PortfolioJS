/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      animation: {
        spin: "spin 6s linear infinite",
        beat1: "beat1 3s ease-in-out infinite",
        beat2: "beat2 4s ease-in-out infinite",
      },
      keyframes: {
        beat1: {
          "0, 100%": { transform: "scale(1)" },
          "50%": { transform: "translateY(-10px)" },
        },
        beat2: {
          "0, 100%": { transform: "scale(1)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
      backgroundImage: {
        "bg-flower": "url('./src/assets/projectsPreview/bg-flower.jpg')",
        "yin-yang": "url('./src/assets/icons/double-dragon.svg')",
      },
      fontFamily: {
        "Noto-Sans": ["'Noto Sans JP', sans-serif;"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
