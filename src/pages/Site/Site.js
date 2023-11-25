import Menu from "./Menu/Menu"
import Content from "./Content"
import LanguageButtons from "./LanguageButtons"
import Header from "./Header"
import Paginator from "./Paginator"

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
      <Paginator site={site} />
      <LanguageButtons site={site} />
      </div>
    </>

    )

}

