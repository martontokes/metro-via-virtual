import Autosave from "components/Artworks/Autosave"
import AutosaveZh from "components/Artworks/AutosaveZh"
import Butterflies from "components/Artworks/Butterflies"
import ButterfliesZh from "components/Artworks/ButterfliesZh"
import Confidential from "components/Artworks/Confidential"
import ConfidentialZh from "components/Artworks/ConfidentialZh"
import Domestik from "components/Artworks/Domestik"
import DomestikZh from "components/Artworks/DomestikZh"
import Essay from "components/Artworks/Essay"
import Curator from "components/Artworks/Curator"
import Curatorial from "components/Artworks/Curatorial"
import CuratorialZh from "components/Artworks/CuratorialZh"
import Illumination from "components/Artworks/Illumination"
import IlluminationZh from "components/Artworks/IlluminationZh"

export default function Content({site}) {

    if (site.language === 'english') {

        switch (site.activePage) {

          case 0: return ( <Curatorial /> );
          case 1: return ( <Essay />);  
          case 2: return ( <Curator /> );
          case 3: return ( <Autosave /> );
          case 4: return ( <Confidential /> );
          case 5: return ( <Illumination /> );
          case 6: return ( <Butterflies /> );
          case 7: return ( <Domestik /> );

        }

} else {
    
        switch (site.activePage) {

            case 0: return ( <CuratorialZh /> );
            case 3: return ( <AutosaveZh /> );
            case 4: return ( <ConfidentialZh /> );
            case 5: return ( <IlluminationZh /> );
            case 6: return ( <ButterfliesZh /> );
            case 7: return ( <DomestikZh /> );

          }
      }

}

