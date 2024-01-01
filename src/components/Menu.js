import { useEffect } from "react";

export default function Menu({site}) {

  return (

    <>
      <div id="mainMenu">
        <button onClick={() => statementButtonClickHandler(site)} className="menubutton activeButton">statement</button>
        <button onClick={() => artworksButtonClickHandler(site)} className="menubutton">artworks</button>
        <button onClick={() => essayButtonClickHandler(site)} className="menubutton">essay</button>
        <button onClick={() => curatorButtonClickHandler(site)} className="menubutton">curator</button>
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

  scrollAllToTop(site.exhibition, site.artworks);
  console.log(site.artworks);
  site.artworks.slideTo(index, 500, false);

}

function exhibitionButtonHandler(site) {

  scrollAllToTop(site.exhibition, site.artworks);
  exhibition.slideTo(exhibition.activeIndex, 500, false);
}



function scrollAllToTop(exhibition, artworks) {

  let elements = document.querySelectorAll(".swiper-slide");

  for (let i = 0; i < elements.length; i++) {
    if (i == exhibition.activeIndex) {
      continue;
    }
    elements[i].scrollTo(0,0);
  }

}



function scrollAdjacentSlidesToTop(index) {

  if (document.querySelector(".swiper-slide-next")) { 
    document.querySelector(".swiper-slide-next").scrollTop = 0; }
    if (document.querySelector(".swiper-slide-prev")) {
    document.querySelector(".swiper-slide-prev").scrollTop = 0; }

    if (index == 3) {
      document.querySelectorAll(".swiper-slide-active")[0].scrollTop = 0;
    }

    if (index == 1) {
      document.querySelectorAll(".swiper-slide-active")[1].scrollTop = 0;
    }

    if (index == 0) {
      document.querySelectorAll(".swiper-slide-active")[1].scrollTop = 0;
    }

}

function scrollAdjacentToTop_Artworks(index) {

  if (document.querySelector(".swiper-slide-next")) { 
    document.querySelector(".swiper-slide-next").scrollTop = 0;
    }

    if (document.querySelector(".swiper-slide-prev")) {
    document.querySelector(".swiper-slide-prev").scrollTop = 0; }

    if (index > 0 && index < 4 ) {
      document.querySelectorAll(".swiper-slide-prev")[1].scrollTop = 0;
      document.querySelectorAll(".swiper-slide-next")[1].scrollTop = 0;  
    }

    if (index == 4 ) {
      document.querySelectorAll(".swiper-slide-prev")[1].scrollTop = 0;
      document.querySelector(".swiper-slide-next").scrollTop = 0;  
    }

}



function statementButtonClickHandler(index) {

  console.log(document.querySelectorAll(".swiper-slide"));
  scrollAllToTop(index);
  index.slideTo(0, 500, false);

}

function artworksButtonClickHandler(index) {

  scrollAllToTop(index);
  index.slideTo(1, 500, false);
  console.log(index.activeIndex);
}

function essayButtonClickHandler(index) {

  scrollAllToTop(index);
  index.slideTo(2, 500, false)

}

function curatorButtonClickHandler(index) {

  scrollAllToTop(index);
  index.slideTo(3, 500, false)

}