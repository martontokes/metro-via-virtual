import { useEffect } from "react";
import { isMobile } from "react-device-detect";



export default function Menu({ site, isArtworksMenuOn }) {

  return (
    <>
      <div id="mainMenu">
        <button onClick={() => exhibitionButtonHandler(site, 0)} className="menubutton activeButton">{ (site.language == "english")  ? "statement" : "chinese" }</button>
        <button onClick={() => exhibitionButtonHandler(site, 1)} className="menubutton">artworks</button>
        <button onClick={() => exhibitionButtonHandler(site, 2)} className="menubutton">essay</button>
        <button onClick={() => exhibitionButtonHandler(site, 3)} className="menubutton">curator</button>
      </div>

      { !isMobile ? <ArtworksMenu site={site}/> : null}
    </>
  );
}


function ArtworksMenu({site}) {
  return (
    <div id="artworksMenu">
    <button onClick={() => artworkButtonHandler(site, 0)} className="menubutton artworkMenuButton activeButton">Autosave: Redoubt</button>
    <button onClick={() => artworkButtonHandler(site, 1)} className="menubutton artworkMenuButton activeButton">Confidential Records</button>
    <button onClick={() => artworkButtonHandler(site, 2)} className="menubutton artworkMenuButton activeButton">Illumination</button>
    <button onClick={() => artworkButtonHandler(site, 3)} className="menubutton artworkMenuButton activeButton">Butterflies on the Wheel</button>
    <button onClick={() => artworkButtonHandler(site, 4)} className="menubutton artworkMenuButton activeButton">Domestik/Publik</button>
  </div>
  )
}



function artworkButtonHandler(site, index) {

  const artworkpage = document.querySelector(".swiper");

  if (isMobile) {

  artworkButtonScrollTop(site);
  site.artworks.slideTo(index, 500, false);

  } else {

  artworkpage.style.opacity = 0;  
  setTimeout(() => {
    site.artworks.slideTo(index, 0, false);
    setTimeout(() => {
      artworkpage.style.opacity = 1;
    }, 1000);
  }, 1000);

  

  }


}

function exhibitionButtonHandler(site, index) {


  const artworkpage = document.querySelector(".swiper");

  if (isMobile) {

    exhibitionButtonScrollTop(site);
    site.exhibition.slideTo(index, 500, false);
  
    } else {
  
    artworkpage.style.opacity = 0;  
    setTimeout(() => {
      site.exhibition.slideTo(index, 0, false);
      artworkpage.style.opacity = 1;
    }, 1000);

  }
}


function exhibitionButtonScrollTop(site) {

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

function artworkButtonScrollTop(site) {

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