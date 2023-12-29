import { useEffect } from "react";

import { enterSite, enterSiteZh } from "/modules/enter-site-buttons.mjs";

import { montserrat, notosanshk } from "pages/_app";

export default function WelcomeScreen({site}) {

useEffect(() => {

  document.getElementById("welcomeOuterContainer").style.height = window.innerHeight + "px";
  document.getElementById("welcomeOuterContainer").style.opacity = 1;

}, [])

    return (
    <>
        <div id="welcomeOuterContainer">
          <div id="welcomeInnerContainer">
            <div className="innerContentContainer">
            <h1 id="welcomeEnglishHeader" className="montserrat titleEngW">metro via virtual</h1>
            <h2 id="welcomeEnglishSubheader" className="montserrat titleEngW">a virtual exhibition from Hong Kong</h2>
            <button id="welcomeButtonEnglish" onClick={ () => {
              enterSite(site);
              addFontRuleToHead(montserrat);
              }}><span id="buttonTextEng" className="montserrat titleEngW">enter</span></button>
            </div>
            <div className="innerContentContainer">
            <h1 id="welcomeChineseHeader" className="notoSansHk titleZhW">虛擬都會</h1>
            <h2 id="welcomeChineseSubheader" className="notoSansHk titleZhW">來自香港的線上展覽</h2>
            <button onClick={ () => {
              
              enterSiteZh(site);
              addFontRuleToHead(notosanshk);
            
            } } className="notoSansHk" id="welcomeButtonChinese"><span id="buttonTextZh" className="notoSansHk titleZhW">進入</span></button>       

            </div>
          </div>    
        </div>
      </>
    );
 }

 function addFontRuleToHead(font) {

  var pageFontRule = 
      `* {
        font-family: ${font.style.fontFamily}
      }`;
   

      var styleElement = document.createElement('style');
      styleElement.textContent = pageFontRule;
      document.head.appendChild(styleElement);

}