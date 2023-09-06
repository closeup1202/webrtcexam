/** @type {import('tailwindcss').Config} */

export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    width: {
      '128': '32rem',
    }
  },
  fontFamily: {
    sans: ['var(--font-inter)'],
    mono: ['var(--font-roboto-mono)'],
    cinzel: ['var(--font-cinzel)'],
    notosanskr: ['var(--font-notosanskr)'],
    phudu: ['var(--font-phudu)']
  }
};
export const plugins = [];
