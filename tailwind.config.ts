import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blueprint: {
          50: "#E7F2FE",
          100: "#aed9ff",
          200: "#7dbdff",
          300: "#4aa3ff",
          400: "#1a89ff",
          500: "#006fe6",
          600: "#0056b4",
          700: "#003e82",
          800: "#002551",
          900: "#000d21",
          DEFAULT: "#006fe6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
