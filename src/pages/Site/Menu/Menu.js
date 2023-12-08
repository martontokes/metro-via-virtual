import menuItemClick from './menuItemClick'

export default function Menu({site}) {

  return (

    <div id="menuContainer">

      <div id="menu">

        {site.language === 'english' ? (

          <>

<h3 id="artworks-header-in-mobile-menu" className="montserrat">exhibition</h3>

            <button onClick={() => menuItemClick(site, 'Statement')} 
            className={`menubutton artworksmenubutton montserrat ${site.activePage === "Statement" ? "activeMenuButton" : ""}`}>
              curatorial statement
            </button>

            <button onClick={() => menuItemClick(site, 'Essay')} 
            className={`menubutton artworksmenubutton montserrat  ${site.activePage === "Essay" ? "activeMenuButton" : ""}`}>
              essay about the exhibition
            </button>

            <h3 id="artworks-header-in-mobile-menu" className="montserrat">artworks</h3>

            <button onClick={() => menuItemClick(site, 'Confidential')} 
            className={`menubutton artworksmenubutton montserrat ${site.activePage === "Confidential" ? "activeMenuButton" : ""}`}>
              Confidential Records: Dual Metropolitans
            </button>

            <button onClick={() => menuItemClick(site, 'Illumination')} 
            className={`menubutton artworksmenubutton montserrat ${site.activePage === "Illumination" ? "activeMenuButton" : ""}`}>
              Illumination
            </button>
            
            <button onClick={() => menuItemClick(site, 'Butterflies')} 
            className={`menubutton artworksmenubutton montserrat ${site.activePage === "Butterflies" ? "activeMenuButton" : ""}`}>
              Butterflies on the Wheel
            </button>
            
            <button onClick={() => menuItemClick(site, 'Domestik')} 
            className={`menubutton artworksmenubutton montserrat ${site.activePage === "Domestik" ? "activeMenuButton" : ""}`}>
              Domestik/Publik
            </button>

            <button onClick={() => menuItemClick(site, 'Autosave')} 
            className={`menubutton artworksmenubutton montserrat ${site.activePage === "Autosave" ? "activeMenuButton" : ""}`}>
              Autosave: Redoubt
            </button>

            <h3 id="artworks-header-in-mobile-menu" className="montserrat">contact</h3>

            <button onClick={() => menuItemClick(site, 'Curator')} 
            className={`menubutton artworksmenubutton montserrat LowestLowerMenuItemOnMobile ${site.activePage === "Curator" ? "activeMenuButton" : ""}`}>
              about the curator
            </button>

          </>

        ) : (

          <>
            <button onClick={() => menuItemClick('StatementZh')} 
            className="menubutton noto activeMenuButton">
              策展論
            </button>

            <button onClick={() => menuItemClick('AutosaveZh')} 
            className="menubutton noto">
              自動存檔：堡壘
            </button>

            <button onClick={() => menuItemClick('ConfidentialZh')} 
            className="menubutton noto">
              機密錄：雙城
            </button>

            <button onClick={() => menuItemClick('IlluminationZh')} 
            className="menubutton noto">
              啟示
            </button>

            <button onClick={() => menuItemClick('ButterfliesZh')} 
            className="menubutton noto">
              黃淑賢
            </button>

            <button onClick={() => menuItemClick('DomestikZh')} 
            className="menubutton noto">
              家居/公共
            </button>

          </>

        )}

        </div>
        
      </div>

  );

}