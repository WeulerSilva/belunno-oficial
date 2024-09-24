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
        "banner-home-1": "url('/images/banner-home-1.png')",
        "banner-home-2": "url('/images/banner-home-2.png')",
        "banner-home-3": "url('/images/banner-home-3.png')",
        "banner-home-4": "url('/images/banner-home-4.png')",
        "banner-home-5": "url('/images/banner-home-5.png')",
        "banner-home-6": "url('/images/banner-home-6.png')",
        "banner-home-7": "url('/images/banner-home-7.png')",
        "banner-home-8": "url('/images/banner-home-8.png')",
        "banner-home-9": "url('/images/banner-home-9.png')",
        "banner-home-10": "url('/images/banner-home-10.png')",
        "banner-home-1-m": "url('/images/banner-home-1-m.png')",
        "banner-home-2-m": "url('/images/banner-home-2-m.png')",
        "banner-home-3-m": "url('/images/banner-home-3-m.png')",
        "banner-home-4-m": "url('/images/banner-home-4-m.png')",
        "banner-home-5-m": "url('/images/banner-home-5-m.png')",
        "banner-home-6-m": "url('/images/banner-home-6-m.png')",
        "banner-home-7-m": "url('/images/banner-home-7-m.png')",
        "banner-home-8-m": "url('/images/banner-home-8-m.png')",
        "banner-home-9-m": "url('/images/banner-home-9-m.png')",
        "banner-home-10-m": "url('/images/banner-home-10-m.png')",
        "logo-1": "url('/images/logo-1.png')",
        "logo-2": "url('/images/logo-2.png')",
        "logo-3": "url('/images/logo-3.png')",
        "logo-4": "url('/images/logo-4.png')",
        "logo-5": "url('/images/logo-5.png')",
        "logo-6": "url('/images/logo-6.png')",
      }
    },
  },
  plugins: [],
};
export default config;
