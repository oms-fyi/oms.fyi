const defaultTheme = require('tailwindcss/defaultTheme');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      animation: {
        'pull-bg-through': 'pullBackgroundImageThrough 5s infinite ease-out',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        pullBackgroundImageThrough: {
          '0%, 100%': { backgroundPosition: 'top left' },
          '50%': { backgroundPosition: 'bottom right' },
        },
      },
    },
  },
  plugins: [],
};
