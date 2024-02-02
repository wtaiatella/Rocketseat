import type { Config } from 'tailwindcss'

const config: Config = {
  // mandatory
  // declare all the files that you want to scan for classnames
  // this will be used to generate the css
  // you can also add other files like scss,less,stylus
  // but you need to install the corresponding packages
  // and add the config for those packages

  // all files ending with the extensions below will be scanned
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  // optional
  // if you want to add any plugins
  // you can add them here
  // here you can extend the tailwind standard config
  // or you can add your own custom config
  // you can also add other plugins like typography
  // for example add colors with the color rocketseat
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },
      maxWidth: {
        app: '700px',
      },
      borderWidth: {
        6: '6px',
      },
      colors: {
        violet: {
          25: '#fcfaff',
        },

        error: {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
        },
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2.5rem)' },
          to: { opacity: '1' },
        },
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 0.5s cubic-bezier(0.5, 2, 0.3, 0.8)',
      },
    },
  },
  plugins: [],
}
export default config
