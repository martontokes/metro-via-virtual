import { Montserrat, Noto_Sans_HK } from 'next/font/google'

const notosanshk = Noto_Sans_HK({subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700'],  display: 'swap'});
const montserrat = Montserrat({subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700'], display: 'swap'});

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