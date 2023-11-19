import Autosave from "Components/Artworks/Autosave"
import AutosaveZh from "Components/Artworks/AutosaveZh"
import Butterflies from "Components/Artworks/Butterflies"
import ButterfliesZh from "Components/Artworks/ButterfliesZh"
import Confidential from "Components/Artworks/Confidential"
import ConfidentialZh from "Components/Artworks/ConfidentialZh"
import Domestik from "Components/Artworks/Domestik"
import DomestikZh from "Components/Artworks/DomestikZh"
import Essay from "Components/Artworks/Essay"
import Curator from "Components/Artworks/Curator"
import Curatorial from "Components/Artworks/Curatorial"
import CuratorialZh from "Components/Artworks/CuratorialZh"
import Illumination from "Components/Artworks/Illumination"
import IlluminationZh from "Components/Artworks/IlluminationZh"

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

