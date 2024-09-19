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
        "fabric": "url('/images/fabric2.JPG')",
        "four": "url('/images/four-lines.png')",
        "caminhao": "url('/images/caminhao.jpg')",
        "caminhao-icon": "url('/images/caminhao-icon.png')"
      }
    },
  },
  plugins: [],
};
export default config;
