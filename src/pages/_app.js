import styles from 'styles/global.css'
import header from 'styles/header.css'
import menu from 'styles/menu.css'
import languageButton from 'styles/languageButton.css'
import welcomeScreen from 'styles/welcomeScreen.css'
import content from 'styles/content.css'
import paginator from 'styles/paginator.css'
import horizontalScrollMobileView from 'styles/horizontalScrollMobileView.css'
import scrollbar from 'styles/scrollbar.css'
import swipeManual from 'styles/swipeManual.css'
import mySwiper from 'styles/mySwiper.css'

import illumination from 'styles/content/illumination.css'

import { Montserrat, Noto_Sans_HK } from 'next/font/google'

const notosanshk = Noto_Sans_HK({subsets: ["latin"], display: "optional"});
const montserrat = Montserrat({subsets: ["latin"], display: "optional"});


export default function App({ Component, pageProps }) {
 
  return (

    <>

      <style jsx global>
      
        {
    
          `
          .notoSansHk {
            font-family: ${notosanshk.style.fontFamily}
          }
          
            * {
              font-family: ${montserrat.style.fontFamily};
            }



          `
        }
      
      </style>

      <Component {...pageProps} />

    </>

  )
  
}

