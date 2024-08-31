import React, { useEffect, useState } from "react"

import Menu from "components/Menu"
import Header from "components/Header"
import MobileContent from "components/MobileContent"
import WelcomeScreen from "components/WelcomeScreen"
import Loader from "/src/components/Loader"

import { setContentWindowSize, setContentWindowSizeOnMobile } from "/modules/contentWindowHeightSetters.mjs"
import hideLoaderRevealSite from "/modules/hideLoaderRevealSite.mjs"

import { isMobile } from "react-device-detect"

export default function App() {

  const [isWelcomeScreenOn, setWelcomeScreen] = useState(true);
  const [itemsLoaded, incrementLoad] = useState(4);
  const [contentLoaded, setContentLoaded] = useState(false);
  
  const [language, setLanguage] = useState('');

  const [exhibition, setExhibition] = useState('');
  const [artworks, setArtworks] = useState('');
  
  const [isArtworksMenuOn, setArtworksMenuOn] = useState(false);

  const site = { language, setLanguage, exhibition, setExhibition, artworks, setArtworks, setWelcomeScreen };

  useEffect(() => {
    window.addEventListener('resize', isMobile ? setContentWindowSizeOnMobile : setContentWindowSize);
  }, []);

  useEffect(() => {
    contentLoaded ? hideLoaderRevealSite() : null;
  }, [contentLoaded]);


    return (

      <>

        { isWelcomeScreenOn ? 
        
          <WelcomeScreen site={site} /> 
          
          :

          <>
          <Loader setContentLoaded={setContentLoaded} itemsLoaded={itemsLoaded}/>
          <div id="exhibition">
          <Menu site={site} isArtworksMenuOn={isArtworksMenuOn}  />
          <MobileContent site={site} incrementLoad={incrementLoad} setArtworksMenuOn={setArtworksMenuOn}/> 
          <div id="placeHolderToFetch100dvhInPixels"></div>  
          </div>
          </>
        
        } 
        
      </>

    )

}


