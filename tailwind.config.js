/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // padding left and right
        padding: "1rem",
      },
      colors: {
        facebook: "#3b5998",
        twitter: "#1da1f2",
        linkedin: "#0077b5",
        instagram: "#e1306c",
        youtube: "#ff0000",
      },
    },
  },
  plugins: [],
};
