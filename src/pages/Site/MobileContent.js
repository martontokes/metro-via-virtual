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

  if (site.language === 'english') {
    return (
      <>
        <div className="content-container">
          <div className="page">
            <Statement />
          </div>
          <div className="page">
            <Essay />
          </div>
          <div className="page">
            <Curator />
          </div>
          <div className="page">
            <Autosave />
          </div>
          <div className="page">
            <Confidential />
          </div>
          <div className="page">
            <Illumination />
          </div>
          <div className="page">
            <Butterflies />
          </div>
          <div className="page">
            <Domestik />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="content-container">
          <div className="page">
            <StatementZh />
          </div>
          <div className="page">
            <AutosaveZh />
          </div>
          <div className="page">
            <ConfidentialZh />
          </div>
          <div className="page">
            <IlluminationZh />
          </div>
          <div className="page">
            <ButterfliesZh />
          </div>
          <div className="page">
            <DomestikZh />
          </div>
        </div>
      </>
    );
  }
}
