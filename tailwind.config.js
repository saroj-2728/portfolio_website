/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#282C33",
        foreground: "var(--foreground)",
        primary: "#C778DD",
        grayish: "#ABB2BF",
      },
      boxShadow: {
        "custom": "0 20px 25px var(--shadow-color), 0 10px 10px -5px var(--shadow-color)",
      },
      fontFamily: {
        allertaStencil: ['var(--font-allerta-stencil)'],
      },
    },
  },
  plugins: [],
};
