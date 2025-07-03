import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores do manual de marca Espaço Nave
        'espaconave': {
          green: '#8AB781',
          blue: '#1B5668',
          gray: '#737373',
        },
        green: {
          400: '#8AB781',
        },
        blue: {
          600: '#1B5668',
        },
        gray: {
          400: '#737373',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'stars': 'stars 20s linear infinite',
        'shine': 'shine 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        stars: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
