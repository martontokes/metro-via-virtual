import Header from "./Header"
import Menu from "./Menu"
import Content from "./Content"
import LanguageButtons from "./LanguageButtons"

export default function Exhibition({site}) {

    return (
      
    <>      
    
      <Header site={site} />
      <Menu site={site} />

      <div id="content">
      <Content site={site}/>
      </div>

      <LanguageButtons site={site} />

    </>

    )

}

