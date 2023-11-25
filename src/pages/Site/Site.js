import Header from "./Header"
import Menu from "./Menu/Menu"
import Content from "./Content"
import LanguageButtons from "./LanguageButtons"

export default function Site({site}) {
 
    return (
      
    <>      
      <div id="exhibitionFrame">
      <Header site={site} />
      <Menu site={site} />
      <div id="content">
        <Content site={site}/>
      </div>
      <LanguageButtons site={site} />
      </div>
    </>

    )

}

