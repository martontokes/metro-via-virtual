import React, { useEffect, useState, useMemo } from "react"

import Menu from "components/Menu"
import Header from "components/Header"
import Content from "components/Content"
import WelcomeScreen from "components/WelcomeScreen"
import Loader from "/src/components/Loader";

import detectLanguage from "/modules/detect-language.mjs"

export default function App() {

  const [language, setLanguage] = useState('');
  const [exhibition, setExhibition] = useState('');
  const [artworks, setArtworks] = useState('');
  const [isWelcomeScreenOn, setWelcomeScreen] = useState(true);
  const [itemsLoaded, incrementLoad] = useState(0);
  const [contentLoaded, setContentLoaded] = useState(false);

  const site = { language, setLanguage, exhibition, setExhibition, artworks, setArtworks, setWelcomeScreen };

  useEffect(() => {
    console.log(site.exhibition.activeIndex);
  }, [site])

  useEffect(() => {

    if (contentLoaded) {
      document.getElementById("loaderContainer").style.opacity = 0;
      setTimeout(() => {
        document.getElementById("loaderContainer").remove();
        document.getElementById("exhibition").style.opacity = 1;
      }, 1000);
    }
  }, [contentLoaded]);

    return (

      <>

        { isWelcomeScreenOn ? <WelcomeScreen site={site} /> :

        <>
        <Loader setContentLoaded={setContentLoaded} itemsLoaded={itemsLoaded}/>
        <div id="exhibition">
        <Menu site={site}  />
        <Content site={site} incrementLoad={incrementLoad} />
        </div>
        </>
        
        } 
        
      </>

    )

}