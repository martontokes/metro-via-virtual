import { useState, useEffect } from "react"

import Header from "./Header"
import Menu from "./Menu"
import Content from "./Content"
import LanguageButtons from "./LanguageButtons"

import setViewOnResize from "/modules/setViewOnResize.mjs"

export default function Site({site}) {

    const [view, setView] = useState('');
 
    return (
      
    <>      

      <Header site={site} />
      <Menu site={site} />
      <Content site={site}/>
      <LanguageButtons site={site} />

    </>

    )

}

