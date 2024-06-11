/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#55AD9B",
        lightGreen: "#4acad9",
        beige: "#F1F8E8",
        orange: "#FEAE6F",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, #fff 0%, #fff 50%, green 50%, green 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
