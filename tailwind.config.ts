import type { Config } from 'tailwindcss';
import theme, { themeColor } from './src/styles/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: theme.screens,
    extend: {
      colors: {
        ...themeColor,
      },
      ...theme,
    },
  },
  plugins: [],
};
export default config;
