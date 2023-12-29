import { Montserrat, Noto_Sans_HK } from 'next/font/google'

import styles from "styles/global.css"

import welcomescreen from "styles/pages/welcome-screen.css"
import illumination from "styles/pages/illumination.css"
import confidential from "styles/pages/confidential.css"
import butterflies from "styles/pages/butterflies.css"
import autosave from "styles/pages/autosave.css"
import pagesGlobal from "styles/pages/pages-global.css"

import header from "styles/layout/header.css"
import loaderSpinner from "styles/layout/loader-spinner.css"
import scrollbar from "styles/layout/scrollbar.css"
import menu from "styles/layout/menu.css"

const notosanshk = Noto_Sans_HK({subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700'], display: "block"});
const montserrat = Montserrat({subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700']});

export default function App({ Component, pageProps }) {
 
  return (

    <>

      <style jsx global>
      
        {
    
          `
          .notoSansHk {
            font-family: ${notosanshk.style.fontFamily};

          }
          
          .montserrat {
              font-family: ${montserrat.style.fontFamily};
            }



          `
        }
      
      </style>

      <Component {...pageProps} />

    </>

  )
  
}


export { montserrat };
export { notosanshk };