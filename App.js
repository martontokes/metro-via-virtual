import React, { useEffect, useState } from "react"

import Menu from "./Site/Menu"
import Header from "./Site/Header"
import Content from "./Site/Content"

export default function App() {

  const [language, setLanguage] = useState('english');
  const [exhibition, setExhibition] = useState('');
  const [artworks, setArtworks] = useState('');

  const site = { language, setLanguage, exhibition, setExhibition, artworks, setArtworks };

    return (

      <>

        <Header site={site} />
        <Menu site={site}  />
        <Content site={site} />
    
      </>

    )

}

