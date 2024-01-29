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
      },
    },
  },
  plugins: [],
}
export default config
