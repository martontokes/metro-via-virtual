import styles from 'styles/global.css'
import header from 'styles/layout/header.css'
import menu from 'styles/layout/menu.css'
import languageButton from 'styles/layout/languageButton.css'
import welcomeScreen from 'styles/pages/welcome-screen.css'
import pagesGlobal from 'styles/pages/pages-global.css'
import paginator from 'styles/layout/paginator.css'
import horizontalScrollMobileView from 'styles/layout/horizontalScrollMobileView.css'
import scrollbar from 'styles/layout/scrollbar.css'
import swipeManual from 'styles/layout/swipeManual.css'

import illumination from 'styles/pages/illumination.css'
import autosave from 'styles/pages/autosave.css'
import confidential from 'styles/pages/confidential.css'
import butterflies from 'styles/pages/butterflies.css'

import loader_spinner from 'styles/layout/loader-spinner.css'

export default function App({ Component, pageProps }) {
 
  return (

    <>

      <Component {...pageProps} />

    </>

  )
  
}

