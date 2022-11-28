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

      accent: `hsla(143, 65%, 39%, 1)`,
      dev: `hsla(45,100%,50%,.7)`,

      w: `hsla(0,0%,100%,1)`,
      gray1: `hsla(0,0%,80%,1)`,
      gray2: `hsla(0,0%,60%,1)`,
      key: `hsla(0,0%,15%,1)`,

      link: `hsla(185, 100%, 50%, 1)`,
      linkb: `hsla(200, 80%, 40%, 1)`,
    },
    extend: {
      spacing: {
        vw: "5vw",
      },
    },
  },
  plugins: [],
};
