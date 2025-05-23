import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import Header from "/src/components/Header"

export default function Menu({ site, isArtworksMenuOn }) {
 
  return (

    <>

      <div id="mainMenu">

        {isMobile ? null : <><h1 id="aboutLabel" style={{fontWeight: "normal"}}>about</h1></>}
        <button onClick={() => exhibitionButtonHandler(site, 0)} className="uppermenu menubutton activeButton">{ (site.language == "english")  ? "statement" : "chinese" } </button>
        {isMobile ? <button onClick={() => exhibitionButtonHandler(site, 1)} className="uppermenu menubutton">artworks</button> : null}
        <button onClick={() => exhibitionButtonHandler(site, 2)} className="uppermenu menubutton">essay</button>
        <button onClick={() => exhibitionButtonHandler(site, 3)} className="uppermenu menubutton">curator</button></div>
        { isMobile ? null : <ArtworksMenu site={site}/>}
    
        <>
        
          <div id="headerTextContainer">
            <h1 id="headerTitle" className="montserrat">metro via virtual</h1>
            <h2 id="headerSubtitle" className="montserrat">a virtual exhibition from Hong Kong</h2>
          </div>
          
        </>

    </>
  );

}


function ArtworksMenu({site}) {

  return (

    <div id="artworksMenu">
    <h1 id="artworksLabel" style={{fontWeight: "normal"}}>artworks</h1>
    <button onClick={() => artworkButtonHandler(site, 0)} className="menubutton artworkMenuButton ">Domestik/Publik</button>
    <button onClick={() => artworkButtonHandler(site, 1)} className="menubutton artworkMenuButton ">Illumination</button>
    <button onClick={() => artworkButtonHandler(site, 2)} className="menubutton artworkMenuButton ">Confidential Records</button>
    <button onClick={() => artworkButtonHandler(site, 3)} className="menubutton artworkMenuButton ">Autosave: Redoubt</button>
    <button onClick={() => artworkButtonHandler(site, 4)} className="menubutton artworkMenuButton ">Butterflies on the Wheel</button>
  </div>

  )
}

var timeoutId = [];

function artworkButtonHandler(site, index) {

  const artworks_buttons = document.querySelectorAll(".artworkMenuButton");
  const exhibition_buttons = document.querySelectorAll(".uppermenu");
  const artworkpage = document.querySelector(".swiper");

  exhibition_buttons.forEach(btn => btn.classList.remove("activeButton"));

  if (artworks_buttons.length > 0) {

    artworks_buttons.forEach(btn => btn.classList.remove("activeButton"));
    artworks_buttons[index].classList.add("activeButton");
  
  }

  artworkpage.style.opacity = 0;

    if (timeoutId[0]) clearTimeout(timeoutId[0]);
    if (timeoutId[1]) clearTimeout(timeoutId[1]);

    timeoutId[0] = setTimeout(() => {

    site.exhibition.slideTo(1, 0, false);  
    site.artworks.slideTo(index, 0, false);


    timeoutId[1] = setTimeout(() => {

      artworkpage.style.opacity = 1;

    }, 0);

  }, 1000); 

}



function exhibitionButtonHandler(site, index) {

  const artworks_buttons = document.querySelectorAll(".artworkMenuButton");
  const exhibition_buttons = document.querySelectorAll(".uppermenu");
  const artworkpage = document.querySelector(".swiper");

  artworks_buttons.forEach(btn => btn.classList.remove("activeButton"));
  exhibition_buttons.forEach(btn => btn.classList.remove("activeButton"));

  if (isMobile) {

    site.exhibition.slideTo(index, 500, false);

    return;
  
  }

  if (index === 0) {

    exhibition_buttons[index].classList.add("activeButton");
  
  } else {
  
    exhibition_buttons[index - 1].classList.add("activeButton");
  
  }

  artworkpage.style.opacity = 0;

  if (timeoutId[0]) clearTimeout(timeoutId[0]);
  if (timeoutId[1]) clearTimeout(timeoutId[1]);

  timeoutId[0] = setTimeout(() => {

    site.exhibition.slideTo(index, 0, false);

  timeoutId[0] = setTimeout(() => {

      artworkpage.style.opacity = 1;

    }, 0);

  }, 1000);
  
}



function scrollContentToTopOnSwitchingArtworkPage(site) {
  
  let exhibitionSlides = document.querySelectorAll(".exhibitionSlide");
  let artworkSlides = document.querySelectorAll(".artworkSlide");

  for (let i = 0; i < exhibitionSlides.length; i++) {

    if (i == site.exhibition.activeIndex) {

      continue;

    }

    exhibitionSlides[i].scrollTo(0,0);
  }

  for (let i = 0; i < artworkSlides.length; i++) {

    if (i == site.artworks.activeIndex) {

      continue;

    }

    artworkSlides[i].scrollTo(0,0);
  }

}

function scrollContentToTopOnSwitchingExhibitionPage(site) {

  let exhibitionSlides = document.querySelectorAll(".exhibitionSlide");
  let artworkSlides = document.querySelectorAll(".artworkSlide");

  if ([0, 2, 3].includes(site.exhibition.activeIndex)) {

    for (let i = 0; i < artworkSlides.length; i++) {

      artworkSlides[i].scrollTo(0,0);

    }

  }

  for (let i = 0; i < exhibitionSlides.length; i++) {

    if (i == site.exhibition.activeIndex) {

      continue;

    }

    exhibitionSlides[i].scrollTo(0,0);

  }

}