/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 300ms ease-in-out infinite ",
      },
    },
    fontFamily: {
      sans: ['"Noto Sans", serif'],
      serif: ['"Noto Sans", serif'],
      mono: ['"Noto Sans Mono", monospace'],
      cust: ['"DynaPuff", serif'],
    },
  },
  darkMode: "selector",
  plugins: [],
};
