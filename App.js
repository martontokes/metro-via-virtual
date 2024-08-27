import React, { useEffect, useState, useMemo } from "react"

import Menu from "components/Menu"
import Header from "components/Header"
import MobileContent from "components/MobileContent"
import WelcomeScreen from "components/WelcomeScreen"
import Loader from "/src/components/Loader";

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

    if (contentLoaded) {
      hideLoaderRevealSite();
    }
  }, [contentLoaded]);

/* mod to commit */

    return (

      <>

        { isWelcomeScreenOn ? <WelcomeScreen site={site} /> :

        <>
        <Loader setContentLoaded={setContentLoaded} itemsLoaded={itemsLoaded}/>

        <div id="exhibition">
        <Menu site={site} isArtworksMenuOn={isArtworksMenuOn}  />
        <MobileContent site={site} incrementLoad={incrementLoad} setArtworksMenuOn={setArtworksMenuOn}/>

        
        
        

        </div>
        </>
        
        } 
        
      </>

    )

}

function hideLoaderRevealSite() {

  document.getElementById("loaderContainer").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("loaderContainer").remove();
    document.getElementById("exhibition").style.opacity = 1;
  }, 1000);

}