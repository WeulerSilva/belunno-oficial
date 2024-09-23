import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amsi: ['Amsi', 'sans-serif'],
        gothan: ['Gothan', 'sans-serif'],
        renogare: ['Renogare', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "laranja": "#FFD500",
        "vermelho": "#E30A16"
      },
      backgroundImage: {
        "belunne": "url('/images/belunno-logo.svg')",
        "first-line": "url('/images/first-line.svg')",
        "second-line": "url('/images/second-line.svg')",
        "fabric": "url('/images/fabric2.JPG')",
        "four": "url('/images/four-lines.png')",
        "four-red": "url('/images/four-red.png')",
        "caminhao": "url('/images/caminhao.jpg')",
        "caminhao-icon": "url('/images/caminhao-icon.png')",
        "home-img": "url('/images/home-img.png')",
        "food-home": "url('/images/food-home.png')",
        "pig": "url('/images/pig.png')",
      }
    },
  },
  plugins: [],
};
export default config;
