import Autosave from "./Content/English/Artworks/Autosave"
import AutosaveZh from "./Content/Chinese/Artworks/AutosaveZh"
import Butterflies from "./Content/English/Artworks/Butterflies"
import ButterfliesZh from "./Content/Chinese/Artworks/ButterfliesZh"
import Confidential from "./Content/English/Artworks/Confidential"
import ConfidentialZh from "./Content/Chinese/Artworks/ConfidentialZh"
import Domestik from "./Content/English/Artworks/Domestik"
import DomestikZh from "./Content/Chinese/Artworks/DomestikZh"
import Essay from "./Content/English/Essay"
import Curator from "./Content/English/Curator"
import Statement from './Content/English/Statement'
import StatementZh from "./Content/Chinese/StatementZh"
import Illumination from "./Content/English/Artworks/Illumination"
import IlluminationZh from "./Content/Chinese/Artworks/IlluminationZh"
import { useState } from "react"

import {swipeFunctions, pageStringToNum} from "../../../modules/swipeFunctions.mjs"

export default function Content({site}) {

  useState(() => {
    
  }, [[], site.activePage]);

  // touchEnd: check if threshold value for swiping page was exceeded by x movement's result. swipe to next page if yes, move back current if no.
  //  turn display to none for all pages but actual.
  //
  // touchStart: turn display to block for neighbour divs of the actual page. start recording x movement //
  // touchMove: calculate x movement. // 
  // 
  // swipe: scrollTo. setPaginator. scrollUp
  let touchstartx;
  let touchendx;

  function touchStart(e) {
    touchstartx = e.touches[0].clientX;

  }

  function touchMove(e) {
    touchendx = event.touches[0].clientX;
    console.log(touchendx);
  };

  function touchEnd() {
    console.log(`Start: ${touchstartx}`);
    console.log(`End: ${touchendx}`);
  }


  if (site.language == 'english') {

  return (
  
    <>

    <div id="contentContainer" onTouchStart={(e) => {touchStart(e)}} onTouchMove={(e) => {touchMove(e)}} onTouchEnd={(e) => {touchEnd(e)}}>
            <div className="mobile1 mobileContentPage">
            <Statement />
            </div>
            <div className="mobile2 mobileContentPage">
            <Essay />
            </div>
            <div className="mobile3 mobileContentPage">
            <Curator />
            </div>
            <div className="mobile4 mobileContentPage">
            <Autosave />
            </div>
            <div className="mobile5 mobileContentPage">
            <Confidential />
            </div>
            <div className="mobile6 mobileContentPage">
            <Illumination />
            </div>
            <div className="mobile7 mobileContentPage">
            <Butterflies />
            </div>
            <div className="mobile8 mobileContentPage">
            <Domestik />
            </div>
      </div>

    </>

  )

  } else {

  return (

  <>
      <div id="swipeContainer">
          <div className="mobile1">
          <StatementZh />
          </div>
          <div className="mobile2">
          <AutosaveZh />
          </div>
          <div className="mobile3">
          <ConfidentialZh />
          </div>
          <div className="mobile4">
          <IlluminationZh />
          </div>
          <div className="mobile5">
          <ButterfliesZh />
          </div>
          <div className="mobile6">
          <DomestikZh />
          </div>
      </div>
  </>

)
  }




}