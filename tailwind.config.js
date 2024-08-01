/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {


    extend: {

      backgroundImage: {
        'onda': "url('/src/assets/SectionTwo/bgOnda.svg')",
        'BannerOne': "url('/src/assets/SectionOne/BannerOne.jpg')",
        'BannerOneMobile': "url('/src/assets/SectionOne/BannerOneMobile.jpg')",
        'BannerTwo': "url('/src/assets/SectionOne/BannerTwo.jpg')",
        'BannerTwoMobile': "url('/src/assets/SectionOne/BannerTwoMobile.jpg')"
      },

      fontFamily: {

        Roboto: ["Roboto", " sans-serif;"]
      },
      colors: {
        green: {
          DEFAULT: '#04231B',
          900: '#003934',
          800: '#1A5934',
          700: '#62A030',
          600: '#A6C83B',
          500: '#77800D', //NO SE USA
        },
        orange:{
          DEFAULT: '#E47C2C',
          900: '#E5B049',
          800: '#ECC24F',
        },
        gray:{
          DEFAULT: '#F6F3D7',
          900: '#DDD2B8',
          800: '#FFFFFF',
          700: '#1D1D1B',
        },
        blue: {
          DEFAULT: '#27374B',
          900: '#02160F',
          800: '#0F1F2F'
        },
        pink: {
          DEFAULT: '#FFDFC2',
        },
        yellow: {

          DEFAULT: '#E2CF01',
          900: '#BFBD00'

        },
        brown: {
          DEFAULT: '#4A2E1F',
          900: '#515127',
          800: '#77800D',
          700: '#808033',
          600: '#D9D6A8'

        },
        white: {
          DEFAULT: '#F5F4F5'
        }


      }
    },
  },
  plugins: [],
}

