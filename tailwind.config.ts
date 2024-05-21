import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        textOffWhite: "var(--text-off-white)",
        textOffWhiteDeep: "var(--text-off-white-deep)",
        primaryBackground: "var(--primary-background-color)",
      },
    },
  },
  plugins: [],
};
export default config;
