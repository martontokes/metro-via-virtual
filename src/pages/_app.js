import styles from 'styles/global.css'
import header from 'styles/header.css'
import menu from 'styles/menu.css'
import languageButton from 'styles/languageButton.css'
import welcomeScreen from 'styles/welcomeScreen.css'
import content from 'styles/content.css'
import paginator from 'styles/paginator.css'

import illumination from 'styles/content/illumination.css'

import { Montserrat, Noto_Sans_HK } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin']});
const notoSansHk = Noto_Sans_HK({ subsets: ['latin']});

export default function App({ Component, pageProps }) {
 
  return (

    <>

      <style jsx global>
      
        {
    
          `
            .montserrat {
              font-family: ${montserrat.style.fontFamily};
            }

            .notoSansHk {
              font-family: ${notoSansHk.style.fontFamily};
            }
          `
        }
      
      </style>

      <Component {...pageProps} />

    </>

  )
  
}

