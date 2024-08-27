import { useEffect } from "react";
import { isMobile } from "react-device-detect";

export default function Menu({ site, isArtworksMenuOn }) {

  return (
    <>
      <div id="mainMenu">
        {isMobile ? null : <><h1 id="aboutLabel">about</h1></>}

        <button onClick={() => exhibitionButtonHandler(site, 0)} className="uppermenu menubutton activeButton">{ (site.language == "english")  ? "statement" : "chinese" } </button>
        {isMobile ? <button onClick={() => exhibitionButtonHandler(site, 1)} className="uppermenu menubutton">artworks</button> : null}
        <button onClick={() => exhibitionButtonHandler(site, 2)} className="uppermenu menubutton">essay</button>
        <button onClick={() => exhibitionButtonHandler(site, 3)} className="uppermenu menubutton">curator</button>
      </div>

      { !isMobile ? <ArtworksMenu site={site}/> : null}
    </>
  );
}


function ArtworksMenu({site}) {

  return (

    <div id="artworksMenu">
    <h1 id="artworksLabel">artworks</h1>
    <button onClick={() => artworkButtonHandler(site, 0)} className="menubutton artworkMenuButton ">Domestik/Publik</button>
    <button onClick={() => artworkButtonHandler(site, 1)} className="menubutton artworkMenuButton ">Illumination</button>
    <button onClick={() => artworkButtonHandler(site, 2)} className="menubutton artworkMenuButton ">Confidential Records</button>
    <button onClick={() => artworkButtonHandler(site, 3)} className="menubutton artworkMenuButton ">Autosave: Redoubt</button>
    <button onClick={() => artworkButtonHandler(site, 4)} className="menubutton artworkMenuButton ">Butterflies on the Wheel</button>
  </div>

  )
}



function artworkButtonHandler(site, index) {

  const menubuttons = document.querySelectorAll(".artworkMenuButton");
  const uppermenubuttons = document.querySelectorAll(".uppermenu");

  for (let i = 0; i < menubuttons.length; i++) {
    menubuttons[i].classList.remove("activeButton");
  }

  const artworkpage = document.querySelector(".swiper");

  if (isMobile) {
    if (menubuttons.length > 0) {
      for (let i = 0; i < menubuttons.length; i++) {
        menubuttons[i].classList.remove("activeButton");
    }
     menubuttons[index].classList.add("activeButton");
    }
  scrollContentToTopOnSwitchingArtworkPage(site);
  site.artworks.slideTo(index, 500, false);

  } else {

    for (let i = 0; i < uppermenubuttons.length; i++) {
      uppermenubuttons[i].classList.remove("activeButton");
    }

    if (menubuttons.length > 0) {
      for (let i = 0; i < menubuttons.length; i++) {
        menubuttons[i].classList.remove("activeButton");
    }
    menubuttons[index].classList.add("activeButton");
 
    }
  artworkpage.style.opacity = 0;
  setTimeout(() => {
    site.exhibition.slideTo(1, 0, false);  
    site.artworks.slideTo(index, 0, false);
    setTimeout(() => {
      artworkpage.style.opacity = 1;
    }, 0);
  }, 1000);

  

  }


}

function exhibitionButtonHandler(site, index) {

  const menubuttons = document.querySelectorAll(".uppermenu");
  const artworkpage = document.querySelector(".swiper");
  const lowermenubuttons = document.querySelectorAll(".artworkMenuButton");

  for (let i = 0; i < lowermenubuttons.length; i++) {
    lowermenubuttons[i].classList.remove("activeButton");
  }

  if (isMobile) {

    for (let i = 0; i < menubuttons.length; i++) {
      menubuttons[i].classList.remove("activeButton");
    }
   menubuttons[index].classList.add("activeButton");
    scrollContentToTopOnSwitchingExhibitionPage(site);
    site.exhibition.slideTo(index, 500, false);
  
    } else {

      for (let i = 0; i < menubuttons.length; i++) {
        menubuttons[i].classList.remove("activeButton");
      }

    if (index == 0) {
     menubuttons[index].classList.add("activeButton");
    } else {
      menubuttons[index-1].classList.add("activeButton");
    }
    artworkpage.style.opacity = 0;  
    setTimeout(() => {
      site.exhibition.slideTo(index, 0, false);
      artworkpage.style.opacity = 1;
    }, 1000);
  }


}


function scrollContentToTopOnSwitchingArtworkPage(site) {
  
  let exhibitionSlides = document.querySelectorAll(".exhibitionSlide");
  let artworkSlides = document.querySelectorAll(".artworkSlide");

  console.log(exhibitionSlides, artworkSlides);

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