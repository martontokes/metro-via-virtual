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

export default function App({ Component, pageProps }) {
 
  return (

    <>

      <Component {...pageProps} />

    </>

  )
  
}

