/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: "#D386F7",
        sagedark: "#B176D3",
        cream: "#F9F0EB",
      },
      keyframes: {
        movein: {
          "0%": { transform: "translate(0, -20px)", opacity: 0 },
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
        moveout: {
          "0%": { transform: "translate(0, 0)", opacity: 1 },
          "100%": { transform: "translate(0, 20px)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
