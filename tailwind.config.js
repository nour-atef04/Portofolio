/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--bg-base)",
        surface: "var(--bg-surface)",
        body: "var(--text)",
        heading: "var(--text-h)",
        divider: "var(--border)",
        code: "var(--code-bg)",
        social: "var(--social-bg)",
        code: {
          white: "var(--white)",
          pink: "var(--pink)",
          blue: "var(--blue)",
          purple: "var(--purple)",
          green: "var(--green)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          bg: "var(--accent-bg)",
          border: "var(--accent-border)",
        },
      },
      fontFamily: {
        sans: ["var(--sans)"],
        heading: ["var(--heading)"],
        mono: ["var(--mono)"],
      },
      boxShadow: {
        theme: "var(--shadow)",
      },
      keyframes: {
        slideUpFade: {
          "0%": { opacity: "0.2", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRightFade: {
          "0%": { opacity: "0.2", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-up": "slideUpFade 2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-right":
          "slideRightFade 2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
