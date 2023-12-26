import { montserrat, notosanshk } from "pages/_app";
import { enterSite, enterSiteZh } from "./enterbuttons";
import { useEffect } from "react";

export default function WelcomeScreen({site}) {

    useEffect(() => {
      document.documentElement.style.height = window.innerHeight + "px";
      document.getElementById("wcsOuterContainer").style.opacity = 1;
    }, [])

    return (
    <>
        <div id="wcsOuterContainer">
          <div id="wcsInnerContainer">
            <div className="innerContentContainer">



            <button id="wcsEnterButtonEnglish" onClick={ () => {
              changeUniversalFontToEnglishOnEnter();
              enterSite(site);}}><span id="buttonTextEng" className="montserrat">enter</span></button>
            </div>

            <div className="innerContentContainer" id="iCC2">

            <button onClick={ () => {
              
              enterSiteZh(site);
              changeUniversalFontToChineseOnEnter();
            
            }} className="notoSansHk" id="wcsEnterButtonChinese"><span id="buttonTextZh">進入展覽</span></button>       

            </div>
          </div>    
        </div>
      </>
    );
  }


/// Font setters ///

function changeUniversalFontToEnglishOnEnter() {

  setTimeout(() => {

      var stringToStyles = `* { font-family: ${montserrat.style.fontFamily} }`;
      var styleElement = document.createElement('style');
      styleElement.appendChild(document.createTextNode(stringToStyles));
      document.head.appendChild(styleElement);

  }, 1000)

}

function changeUniversalFontToChineseOnEnter() {
  
  setTimeout(() => {

      var stringToStyles = `* { font-family: ${notosanshk.style.fontFamily} }`;
      var styleElement = document.createElement('style');
      styleElement.appendChild(document.createTextNode(stringToStyles));
      document.head.appendChild(styleElement);

  }, 1000)

}