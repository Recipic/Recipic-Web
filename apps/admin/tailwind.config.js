/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../../packages/ui/components/**/*.{js,ts,jsx,tsx}'],
  presets: [require('@recipic-packages/ui/tailwind.config.ts')],
  theme: {
    extend: {},
  },
  plugins: [],
};
