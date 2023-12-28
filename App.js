import React, { useEffect, useState, useMemo } from "react"

import Menu from "components/Menu"
import Header from "components/Header"
import Content from "components/Content"

import detectLanguage from "/modules/detectLanguage.mjs"

export default function App() {

  const [language, setLanguage] = useState('');
  const [exhibition, setExhibition] = useState('');
  const [artworks, setArtworks] = useState('');

  const site = { language, setLanguage, exhibition, setExhibition, artworks, setArtworks };

  useEffect(() => {
    console.log("App useEffect run");
  }, [])

    return (

      <>

        <Header site={site} />
        <Menu site={site}  />
        <Content site={site} />
    
      </>

    )

}

export async function getServerSideProps() {

  const userLanguage = req ? req.headers['accept-language'] : navigator.language || navigator.userLanguage;
  console.log(userLanguage);
  return { userLanguage };
}
