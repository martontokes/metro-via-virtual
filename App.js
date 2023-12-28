import React, { useEffect, useState, useMemo } from "react"

import Menu from "components/Menu"
import Header from "components/Header"
import Content from "components/Content"

import detectLanguage from "/modules/detect-language.mjs"

export default function App() {

  const [language, setLanguage] = useState('');
  const [exhibition, setExhibition] = useState('');
  const [artworks, setArtworks] = useState('');
  const [userHasEntered, enterUser] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);

  const site = { language, setLanguage, exhibition, setExhibition, artworks, setArtworks, enterUser, loadingProgress, setLoadingProgress };

    return (

      <>

        { userHasEntered ? <WelcomeScreen site={site} /> :
        
        <>
        <Header site={site} />
        <Menu site={site}  />
        <Content site={site} />
        </>
        
        } 
        
      </>

    )

}

export async function getServerSideProps() {

  const userLanguage = req ? req.headers['accept-language'] : navigator.language || navigator.userLanguage;
  console.log(userLanguage);
  return { userLanguage };
}