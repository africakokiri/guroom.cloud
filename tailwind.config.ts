import scrollbarHide from "tailwind-scrollbar-hide";
import type { Config } from "tailwindcss";
import twAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "hsl(0, 0%, 14.9%)"
        // white: "hsl(0, 0%, 89.8%)"
      }
    }
  },
  plugins: [twAnimate, scrollbarHide]
} satisfies Config;
