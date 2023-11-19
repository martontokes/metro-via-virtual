import Autosave from "@/Artworks/Autosave"
import AutosaveZh from "@/Artworks/AutosaveZh"
import Butterflies from "@/Artworks/Butterflies"
import ButterfliesZh from "@/Artworks/ButterfliesZh"
import Confidential from "@/Artworks/Confidential"
import ConfidentialZh from "@/Artworks/ConfidentialZh"
import Domestik from "@/Artworks/Domestik"
import DomestikZh from "@/Artworks/DomestikZh"
import Essay from "@/Artworks/Essay"
import Curator from "@/Artworks/Curator"
import Curatorial from "@/Artworks/Curatorial"
import CuratorialZh from "@/Artworks/CuratorialZh"
import Illumination from "@/Artworks/Illumination"
import IlluminationZh from "@/Artworks/IlluminationZh"

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

