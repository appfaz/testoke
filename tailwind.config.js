module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        body: ["Rubik", "sans-serif"],
      },
      gridTemplateColumns: {
        "creator-left": "3.5rem 250px 1fr",
        "creator-right": "3.5rem 1fr 250px",
        "editor-left": "250px 1fr",
        "editor-right": "1fr 250px",
      },
      width: {
        board: "90rem",
        xl: "90rem",
        lg: "64rem",
        sm: "30rem",
      },
      spacing: {
        7.5: "1.875rem",
        12.5: "3.125rem",
        15: "3.75rem",
        50: "12.5rem",
        53: "13.25rem",
        53.5: "13.375rem",
      },
      fontSize: {
        md: ["1.125rem", "1.625rem"],
      },
      maxWidth: {
        24: "6rem",
      },
      animation: {
        fade: "fadeIn 0.1s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },

  plugins: [],
};
