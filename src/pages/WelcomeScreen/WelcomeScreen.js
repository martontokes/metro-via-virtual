import { montserrat, notosanshk } from "pages/_app";
import { enterSite, enterSiteZh } from "./enterbuttons";
import { useEffect } from "react";

export default function WelcomeScreen({site}) {

    useEffect(() => {
      document.getElementById("wcsOuterContainer").style.height = window.innerHeight + "px";
    }, [])

    return (
    <>
        <div id="wcsOuterContainer">
          <div id="wcsInnerContainer">
            <div className="innerContentContainer">
            <h1 id="wcsExhibitionEnglishHeader" className="montserrat">metro<br/>via virtual</h1>
            <h2 id="wcsExhibitionEnglishSubheader" className="montserrat">a virtual exhibition<br/> from Hong Kong</h2>
            <button id="wcsEnterButtonEnglish" onClick={ () => {
              changeUniversalFontToEnglishOnEnter();
              enterSite(site);}}><span id="buttonTextEng" className="montserrat">enter</span></button>
            </div>
            <div className="innerContentContainer" id="iCC2">
            <h1 id="wcsExhibitionChineseHeader" className="notoSansHk">虛擬都會</h1>
            <h2 id="wcsExhibitionChineseSubheader" className="notoSansHk">來自香港的線上展覽</h2>
            <button onClick={ () => {
              
              enterSiteZh(site);
              changeUniversalFontToChineseOnEnter();
            
            } } className="notoSansHk" id="wcsEnterButtonChinese"><span id="buttonTextZh">進入展覽</span></button>       

            </div>
          </div>    
        </div>
      </>
    );
  }

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