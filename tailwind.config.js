/** @type {import('tailwindcss').Config} */

huePrim = 360;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      prim: `hsla(${huePrim}, 80%, 40%, 1)`,
      prim2: `hsla(${huePrim}, 80%, 60%, 1)`,
      prim3: `hsla(${huePrim}, 80%, 80%, 1)`,
    },
    extend: {
      spacing: {
        vw: "5vw",
      },
    },
  },
  plugins: [],
};
