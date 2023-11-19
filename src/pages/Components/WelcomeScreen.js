export default function WelcomeScreen({site}) {

    const enterSite = (language) => {

      document.getElementById("wcsInnerContainer").style.opacity = 0;

        setTimeout(() => {

          site.setLanguage(language);
          site.toggleWelcomeScreen(false);

        }, 1000)

    }



    return (

    <>
      <div id="wcsOuterContainer">

        <div id="wcsInnerContainer">

          <h1 id="wcsExhibitionEnglishHeader" className="regular">metro via virtual</h1>
          <h2 id="wcsExhibitionEnglishSubheader" className="regular">a virtual exhibition from Hong Kong</h2>

          <button id="wcsEnterButtonEnglish" onClick={() => { enterSite('english')} } className="montserrat" ><span id="buttonTextEng">enter exhibition</span></button>
          
          <h1 id="wcsExhibitionChineseHeader" className="noto notoregular">虛擬都會</h1>
          <h2 id="wcsExhibitionChineseSubheader" className="noto notoregular">來自香港的線上展覽</h2>

          <button onClick={() => { enterSite('chinese')} } className="noto" id="wcsEnterButtonChinese"><span id="buttonTextZh">進入展覽</span></button>
        
        </div>
        
      </div>

    </>

    );
  }