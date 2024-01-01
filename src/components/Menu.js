import { useEffect } from "react";

export default function Menu({site}) {

  return (

    <>
      <div id="mainMenu">
        <button onClick={() => exhibitionButtonHandler(site, 0)} className="menubutton activeButton">statement</button>
        <button onClick={() => exhibitionButtonHandler(site, 1)} className="menubutton">artworks</button>
        <button onClick={() => exhibitionButtonHandler(site, 2)} className="menubutton">essay</button>
        <button onClick={() => exhibitionButtonHandler(site, 3)} className="menubutton">curator</button>
      </div>
      <div id="artworksMenu">
        <button onClick={() => artworkButtonHandler(site, 0)} className="menubutton artworkMenuButton activeButton">Autosave: Redoubt</button>
        <button onClick={() => artworkButtonHandler(site, 1)} className="menubutton artworkMenuButton activeButton">Confidential Records</button>
        <button onClick={() => artworkButtonHandler(site, 2)} className="menubutton artworkMenuButton activeButton">Illumination</button>
        <button onClick={() => artworkButtonHandler(site, 3)} className="menubutton artworkMenuButton activeButton">Butterflies on the Wheel</button>
        <button onClick={() => artworkButtonHandler(site, 4)} className="menubutton artworkMenuButton activeButton">Domestik/Publik</button>
      </div>
      
    </>

  );

}

function artworkButtonHandler(site, index) {

  scrollAllToTop(site);
  site.artworks.slideTo(index, 500, false);

}

function exhibitionButtonHandler(site, index) {

  scrollAllToTop(site);
  site.exhibition.slideTo(index, 500, false);

}


function scrollAllToTop(site) {

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