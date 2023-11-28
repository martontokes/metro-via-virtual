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

export default function Content({site}) {

  function touchStart(event) {

  }

  function touchMove(event) {
    document.getElementById("swipeController").style.left = event.touches[0].screenX + "px";
    console.log(document.getElementById("swipeController").style.left);
  
  }

  function touchEnd(event) {

  }


  if (site.language == 'english') {

  return (
  
  <>
    <div id="swipeController"
    onTouchStart={(event) => touchStart(event)}
    onTouchMove={(event) => touchMove(event)}
    onTouchEnd={(event) => touchEnd(event)} >


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
      <div id="swipeController">
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