import React, { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"

import ExhibitionMenu from "./Site/ExhibitionMenu"
import Header from "./Site/Header"
import Exhibition from "./Site/Exhibition"

export default function App() {

  const [language, setLanguage] = useState('english');
  const [exhibition, setExhibition] = useState('');
  const [artworks, setArtworks] = useState('');

  const site = { language, setLanguage, exhibition, setExhibition, artworks, setArtworks };

        return (

          <>

              <Header site={site} />
              <ExhibitionMenu site={site}  />
              <Exhibition site={site} />
    
          </>

        )

}
