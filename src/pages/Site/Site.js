import Menu from "./Menu"
import Content from "./Content"
import LanguageButtons from "./LanguageButtons"
import Header from "./Header"
import MobileContent from "./MobileContent"
import SwipeManual from "./swipeManual"
import Loader from "./Loader"

import { useEffect, useState } from "react"

import { isMobile } from "react-device-detect"

export default function Site({site}) {

  const [swiperState, setSwiperState] = useState('');

  useEffect(() => {

    if (document.querySelector(".loader") != null) {

    document.querySelector(".loader").style.opacity = 1;
  
    }

  }, [])

    return (
      <>

        <div id="exhibition">

          <Header site={site} />
          <Menu swiperState={swiperState} setSwiperState={setSwiperState} />
          
          { isMobile ? <MobileContent swiperState={swiperState} setSwiperState={setSwiperState} site={site} /> : null }
          { isMobile ? null : <Content site={site} /> }

        </div>
        
        <Loader />

      </>
    )
}

