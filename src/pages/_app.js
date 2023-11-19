import styles from 'styles/global.css'
import contentStyles from 'styles/welcomeScreen.css'
import { Montserrat, Noto_Sans_HK } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin']});
const notoSansHk = Noto_Sans_HK({ subsets: ['latin']});

export default function App({ Component, pageProps }) {
 
  return (

    <>
    <style jsx global>{`
        .montserrat {
          font-family: ${montserrat.style.fontFamily};
        }

        .notoSansHk {
          font-family: ${notoSansHk.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>

  )
}

