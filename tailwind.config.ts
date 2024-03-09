import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        red: "#FC4747",
        darkBlue: "#10141E",
        grayish: "#5A698F",
        white: "#FFFFFF",
        semiDarkBlue: "#161D2F",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      borderRadius: {
        "20": "20px",
        "6": "6px",
        "8": "8px",
        full: "9999px",
        "28": "28.5px",
      },
      width: {
        "32": "32px",
        "117": "117px",
      },
      height: {
        "32": "32px",
        "48": "48px",
      },
      fontSize: {
        base10: "10px",
        headingL: "3.2rem",
        headingM: "2.4rem",
        headingS: "16px",
        headingXS: "1.8rem",
        bodyM: "1.5rem",
        bodyS: "1.5rem",
      },
      caret: {
        red: "#FC4747",
      },
      maxHeight: {
        "960": "960px",
      },
      minHeight: {
        "140": "140px",
      },
      minWidth: {
        "400": "400px",
        "220": "220px",
      },
      fill: {
        primary: "#FC4747",
        darkBlue: "#10141E",
        grayish: "#5A698F",
        white: "#FFFFFF",
        semiDarkBlue: "#161D2F",
      },
    },
  },
  plugins: [],
};
export default config;
