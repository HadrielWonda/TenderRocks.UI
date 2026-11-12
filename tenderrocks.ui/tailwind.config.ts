import type { Config } from 'tailwindcss';

// The palette comes from the TenderRock logo: a bright blue mark and charcoal lettering. Text and
// buttons use brand 700 and darker, which pass WCAG AA (4.5:1) on white. Brand 500 is the logo
// blue and is used for decoration only.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7fe',
          100: '#d9edfc',
          200: '#b3dbf9',
          500: '#008be6',
          700: '#0b62a8',
          800: '#0a4f88',
          900: '#0c3558',
        },
        ink: {
          900: '#18212b',
          950: '#10171f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
        prose: '44rem',
      },
    },
  },
  plugins: [],
};

export default config;
