import React, { useEffect, useState, useMemo } from "react"

import Menu from "components/Menu"
import Header from "components/Header"
import Content from "components/Content"
import WelcomeScreen from "components/WelcomeScreen"

import detectLanguage from "/modules/detect-language.mjs"

export default function App() {

  const [language, setLanguage] = useState('');
  const [exhibition, setExhibition] = useState('');
  const [artworks, setArtworks] = useState('');
  const [isWelcomeScreenOn, setWelcomeScreen] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const site = { language, setLanguage, exhibition, setExhibition, artworks, setArtworks, setWelcomeScreen, loadingProgress, setLoadingProgress };

    return (

      <>

        { isWelcomeScreenOn ? <WelcomeScreen site={site} /> :
        
        <>
        <Header site={site} />
        <Menu site={site}  />
        <Content site={site} />
        </>
        
        } 
        
      </>

    )

}