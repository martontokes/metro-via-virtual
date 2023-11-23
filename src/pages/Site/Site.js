import Header from "./Header"
import Menu from "./Menu/Menu"
import Content from "./Content"
import LanguageButtons from "./LanguageButtons"

export default function Site({site}) {
 
    return (
      
    <>      

      <Header site={site} />
      <Menu site={site} />
      <Content site={site}/>
      <LanguageButtons site={site} />

    </>

    )

}

