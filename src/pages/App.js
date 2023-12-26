import React, { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"

import WelcomeScreen from 'pages/WelcomeScreen/WelcomeScreen';
import ExhibitionMenu from "./Site/ExhibitionMenu"
import Header from "./Site/Header"
import Exhibition from "./Site/Exhibition"
import Loader from "./Site/Loader"

export default function App() {

  const [isWelcomeScreenOn, toggleWelcomeScreen] = useState(true);
  const [language, setLanguage] = useState('');
  const [activePage, setActivePage] = useState('');
  const [exhibitionSwiper, setExhibitionSwiper] = useState('');
  const [artworksSwiper, setArtworksSwiper] = useState('');

  const site = { language, setLanguage, activePage, setActivePage, toggleWelcomeScreen };

        return (

          <>

            { isWelcomeScreenOn ? <WelcomeScreen site={site} /> : 
            
            <>
              <Loader />
              <Header site={site} />
              <ExhibitionMenu exhibitionSwiper={exhibitionSwiper} artworksSwiper={artworksSwiper} />
              <Exhibition setArtworksSwiper={setArtworksSwiper} setExhibitionSwiper={setExhibitionSwiper} site={site} />
            </>

            }
            
          </>

        )

}
