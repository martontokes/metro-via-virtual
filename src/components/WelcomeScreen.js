import { useEffect } from "react";

import { enterSite, enterSiteZh } from "/modules/enter-site-buttons.mjs";

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
            <button id="welcomeEnterButtonEnglish" onClick={ () => enterSite(site) } ><span id="buttonTextEng" className="montserrat titleEngW">enter</span></button>
            </div>
            <div className="innerContentContainer">
            <h1 id="welcomeChineseHeader" className="notoSansHk titleZhW">虛擬都會</h1>
            <h2 id="welcomeChineseSubheader" className="notoSansHk titleZhW">來自香港的線上展覽</h2>
            <button onClick={ () => {
              
              enterSiteZh(site);
              changeUniversalFontOnEnter();
            
            } } className="notoSansHk" id="welcomeEnterButtonChinese"><span id="buttonTextZh" className="notoSansHk titleZhW">進入</span></button>       

            </div>
          </div>    
        </div>
      </>
    );
 }