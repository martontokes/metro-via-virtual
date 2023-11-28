import Menu from "./Menu/Menu"
import Content from "./Content"
import LanguageButtons from "./LanguageButtons"
import Header from "./Header"
import Paginator from "./Paginator"
import MobileContent from "./MobileContent"

import { isMobile } from "react-device-detect"

export default function Site({site}) {
 
    return (
      
    <>      

        <Header site={site} />
        <Menu site={site} />
      { isMobile ? <MobileContent site={site} /> : null }
      { isMobile ? null : <Content site={site} /> }
      <Paginator site={site} />
      <LanguageButtons site={site} />

    </>

    )

}

