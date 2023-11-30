import Autosave from "./Content/English/Artworks/Autosave";
import AutosaveZh from "./Content/Chinese/Artworks/AutosaveZh";
import Butterflies from "./Content/English/Artworks/Butterflies";
import ButterfliesZh from "./Content/Chinese/Artworks/ButterfliesZh";
import Confidential from "./Content/English/Artworks/Confidential";
import ConfidentialZh from "./Content/Chinese/Artworks/ConfidentialZh";
import Domestik from "./Content/English/Artworks/Domestik";
import DomestikZh from "./Content/Chinese/Artworks/DomestikZh";
import Essay from "./Content/English/Essay";
import Curator from "./Content/English/Curator";
import Statement from './Content/English/Statement';
import StatementZh from "./Content/Chinese/StatementZh";
import Illumination from "./Content/English/Artworks/Illumination";
import IlluminationZh from "./Content/Chinese/Artworks/IlluminationZh";

export default function Content({ site }) {

  let touchstartx;
  let touchendx;
  let touchMovement;
  let scrollPos;

  function touchStart(e) {
    touchstartx = e.touches[0].clientX;
  }

  function touchMove(e) {
    touchendx = e.touches[0].clientX;
    console.log(touchendx);
  }

  function touchEnd() {
    if (touchstartx > touchendx) {
      touchMovement = touchstartx - touchendx;
      console.log(`to right: ${touchMovement}`);
      window.scrollTo({left: 920,});
    } else if (touchendx > touchstartx) {
      touchMovement = touchendx - touchstartx;
      console.log(`to left ${touchMovement}`);
    }
  }

  if (site.language === 'english') {
    return (
      <>
        <div id="contentContainer" onTouchStart={(e) => { touchStart(e) }} onTouchMove={(e) => { touchMove(e) }} onTouchEnd={(e) => { touchEnd(e) }}>
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
    );
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
    );
  }
}
