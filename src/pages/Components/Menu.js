import { useState, useEffect } from "react";

export default function Menu({site}) {

  const [activeMenu, setActiveMenu] = useState(0);
  const [menu, setMenu] = useState([]);
  const [toggledFirstChange, toggleFirstChange] = useState(false);



  useEffect(() => {
    setMenu(document.getElementsByClassName("menubutton"));
    document.getElementById("content").style.opacity = 1;
    document.getElementById("menu").style.opacity = 1;
  }, []);




  useEffect(() => {
    if (toggledFirstChange) {
    menu[activeMenu].classList.add("activeMenuButton");
    }
  }, [activeMenu]);




  const menuItemClick = (activatedPage) => {

    if (!toggledFirstChange) {
    toggleFirstChange(true);
    }

    menu[activeMenu].classList.remove("activeMenuButton");
    setActiveMenu(activatedPage);

    document.getElementById("content").style.opacity = 0;

    setTimeout(() => {

      site.setActivePage(activatedPage);

      setTimeout(() => {
        document.getElementById("content").style.opacity = 1;
      }, 50);

    }, 1050);
    
  };



  return (

    <div id="menu">

        {site.language === 'english' ? (

          <>

            <button onClick={() => menuItemClick(0)} 
            className="menubutton engMenuButton montserrat activeMenuButton">
              curatorial statement
            </button>

            <button onClick={() => menuItemClick(1)} 
            className="menubutton engMenuButton montserrat">
              essay about the exhibition
            </button>

            <button onClick={() => menuItemClick(2)} 
            className="menubutton engMenuButton montserrat menubreakpoint">
              about the curator
            </button>

            <button onClick={() => menuItemClick(3)} 
            className="menubutton engMenuButton montserrat">
              Autosave: Redoubt
            </button>

            <button onClick={() => menuItemClick(4)} 
            className="menubutton engMenuButton montserrat">
              Confidential Records: Dual Metropolitans
            </button>

            <button onClick={() => menuItemClick(5)} 
            className="menubutton engMenuButton montserrat">
              Illumination
            </button>

            <button onClick={() => menuItemClick(6)} 
            className="menubutton engMenuButton montserrat">
              Butterflies on the Wheel
            </button>

            <button onClick={() => menuItemClick(7)} 
            className="menubutton engMenuButton montserrat">
              Domestik/Publik
            </button>

          </>

        ) : (

          <>
            <button onClick={() => menuItemClick(0)} 
            className="menubutton zhMenuButton noto menubreakpoint activeMenuButton">
              策展論
            </button>

            <button onClick={() => menuItemClick(3)} 
            className="menubutton zhMenuButton noto">
              自動存檔：堡壘
            </button>

            <button onClick={() => menuItemClick(4)} 
            className="menubutton zhMenuButton noto">
              機密錄：雙城
            </button>

            <button onClick={() => menuItemClick(5)} 
            className="menubutton zhMenuButton noto">
              啟示
            </button>

            <button onClick={() => menuItemClick(6)} 
            className="menubutton zhMenuButton noto">
              黃淑賢
            </button>

            <button onClick={() => menuItemClick(7)} 
            className="menubutton zhMenuButton noto">
              家居/公共
            </button>

          </>

        )}

      </div>

  );

}