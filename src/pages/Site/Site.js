import Menu from "./Menu/Menu"
import Content from "./Content"
import LanguageButtons from "./LanguageButtons"
import Header from "./Header"

export default function Site({site}) {
 
    return (
      
    <>      
      <div id="exhibitionContainer">
        <Header site={site} />
      <div id="menuContainer">
        <Menu site={site} />
      </div>
      <div id="content">
        <Content site={site}/>
      </div>
      <LanguageButtons site={site} />
      </div>
    </>

    )

}

