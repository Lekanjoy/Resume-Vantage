import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7758F3",
        "primary-100": "#9E88F6",
        "secondary": "#1A1A1A",
        "secondary-100": "#40444B",
      }
    },
  },
  plugins: [],
};
export default config;
