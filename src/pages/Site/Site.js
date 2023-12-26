import ExhibitionMenu from "./ExhibitionMenu"
import Content from "./Content"
import Header from "./Header"
import Exhibition from "./Exhibition"
import Loader from "./Loader"

import SwipeManual from "./swipeManual"

import { useEffect, useState } from "react"

import { isMobile } from "react-device-detect"

export default function Site({site}) {

  const [exhibitionSwiper, setExhibitionSwiper] = useState('');
  const [artworksSwiper, setArtworksSwiper] = useState('');


    return (
      <>

        <Loader />

        <div id="exhibition">

          <Header site={site} />
          <ExhibitionMenu exhibitionSwiper={exhibitionSwiper} artworksSwiper={artworksSwiper} />
          <Exhibition setArtworksSwiper={setArtworksSwiper} setExhibitionSwiper={setExhibitionSwiper} site={site} />

        </div>
        


      </>
    )
}

