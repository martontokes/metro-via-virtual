
import exhibitionSwiperConfig from "./.config/exhibitionSwiperConfig.mjs"
import artworksSwiperConfig from "./.config/artworksSwiperConfig.mjs"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';

import { useState, useEffect } from "react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import 'swiper/css/free-mode';

import Statement from "/src/components/content/English/Statement";
import Essay from "/src/components/content/English/Essay";
import Curator from "/src/components/content/English/Curator";
import Domestik from "/src/components/content/English/Artworks/Domestik";
import Illumination from "/src/components/content/English/Artworks/Illumination";
import Confidential from "/src/components/content/English/Artworks/Confidential";
import Autosave from "/src/components/content/English/Artworks/Autosave";
import Butterflies from "/src/components/content/English/Artworks/Butterflies";
import StatementZh from "/src/components/content/Chinese/StatementZh";
import CuratorZh from "/src/components/content/Chinese/CuratorZh";
import DomestikZh from "/src/components/content/Chinese/Artworks/DomestikZh";
import IlluminationZh from "/src/components/content/Chinese/Artworks/IlluminationZh";
import ConfidentialZh from "/src/components/content/Chinese/Artworks/ConfidentialZh";
import AutosaveZh from "/src/components/content/Chinese/Artworks/AutosaveZh";
import ButterfliesZh from "/src/components/content/Chinese/Artworks/ButterfliesZh";

export default function Content({ site, incrementLoad, setArtworksMenuOn }) {

  function updateState(swiper) {
    if (swiper.activeIndex == 1) {
      setArtworksMenuOn(true);
    } else {
      setArtworksMenuOn(false);
    }
  }

    return (
      
      <>

  
      </>

    );

}

function updateArtworkArrows(activeIndex) {

  if (activeIndex > 0 && activeIndex < 4) {
    document.getElementById("artworksNext").classList.remove("inactiveArrow");
    document.getElementById("artworksPrev").classList.remove("inactiveArrow");
  }

  if (activeIndex == 4) {
    document.getElementById("artworksNext").classList.add("inactiveArrow");
  }

  if (activeIndex == 0) {
    document.getElementById("artworksPrev").classList.add("inactiveArrow");
  }

}

function ArtworkArrowButtons({site}) {

  return (

    <>
      <button 
          id="artworksNext" 
          className="artworkArrowButton" 
          onClick={() => {site.artworks.slideNext(600)}}>
        <img src="arrowRight.svg" />
      </button>

      <button 
          id="artworksPrev" 
          className="artworkArrowButton inactiveArrow"
          onClick={() => {site.artworks.slidePrev(600)}}>
        <img src="arrowLeft.svg" />
      </button>
    </>

  )
 
}

function updateMenu(site) {

  const menubuttons = document.querySelectorAll(".menubutton");
  for (let i = 0; i < menubuttons.length; i++) {
    menubuttons[i].classList.remove("activeButton");
  }
 menubuttons[site.exhibition.activeIndex].classList.add("activeButton");

}

function updateArtworkMenu(site) {

  
    const menubuttons = document.querySelectorAll(".artworkMenuButton");
    if (menubuttons.length > 0) {
    for (let i = 0; i < menubuttons.length; i++) {
      menubuttons[i].classList.remove("activeButton");
  }
   menubuttons[site.artworks.activeIndex].classList.add("activeButton");
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