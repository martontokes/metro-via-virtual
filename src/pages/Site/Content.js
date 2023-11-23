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

    if (site.language === 'english') {

        switch (site.activePage) {

          case 'Statement': return ( <Statement /> );
          case 'Essay': return ( <Essay />);  
          case 'Curator': return ( <Curator /> );
          case 'Autosave': return ( <Autosave /> );
          case 'Confidential': return ( <Confidential /> );
          case 'Illumination': return ( <Illumination /> );
          case 'Butterflies': return ( <Butterflies /> );
          case 'Domestik': return ( <Domestik /> );

        }

} else {
    
        switch (site.activePage) {

            case 'StatementZh': return ( <StatementZh /> );
            case 'AutosaveZh': return ( <AutosaveZh /> );
            case 'ConfidentialZh': return ( <ConfidentialZh /> );
            case 'IlluminationZh': return ( <IlluminationZh /> );
            case 'ButterfliesZh': return ( <ButterfliesZh /> );
            case 'DomestikZh': return ( <DomestikZh /> );

          }
      }

}