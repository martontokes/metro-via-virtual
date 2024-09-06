import exhibitionSwiperConfig from "./.config/exhibitionSwiperConfig.mjs"
import artworksSwiperConfig from "./.config/artworksSwiperConfig.mjs"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';

import { useState, useEffect } from "react";

import { isMobile } from "react-device-detect";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import 'swiper/css/free-mode';

import { setContentWindowSize, setContentWindowSizeOnMobile } from "/modules/contentWindowHeightSetters.mjs"

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

import SwipeInstructions from "./SwipeInstructions";

export default function MobileContent({ site, incrementLoad }) {

  const [soundCloudPlaying, setSoundCloudPlaying] = useState(true);

  useEffect(() => {
    isMobile ? setContentWindowSizeOnMobile() : setContentWindowSize();
  }, []);

    return (
      
      <>

        <Swiper {...exhibitionSwiperConfig} 
        onInit={(swiper) => {site.setExhibition(swiper);}}
        onSlideChange={(swiper) => {site.setExhibition(swiper); updateActiveArtworkButtonOnNavigation(site);}}
        onSliderMove={(swiper) => {scrollContentToTopOnSwitchingExhibitionPage(site);}}
        className="exhibitionSwiper">



          <SwiperSlide className="exhibitionSlide">
            {(site.language == "english") ? <Statement /> : <StatementZh /> }
          </SwiperSlide>

          <SwiperSlide className="exhibitionSlide">
  
            <Swiper {...artworksSwiperConfig} 
            onInit={(swiper) => {site.setArtworks(swiper);}}
            onSlideChange={(swiper) => {site.setArtworks(swiper); updateActiveArtworkButtonOnNavigation(site); setSoundCloudPlaying(false)}} 
            onSliderMove={(swiper) => {scrollContentToTopOnSwitchingArtworkPage(site)}}
            className="artworksSwiper"
            modules={[Scrollbar]}
            scrollbar={true}>  
              {/* <ArtworkArrowButtons site={site} /> */}
              {(site.language == "english") ? 
              
                <>

                  <SwiperSlide className="artworkSlide"><Domestik incrementLoad={incrementLoad} soundCloudPlaying={soundCloudPlaying} /></SwiperSlide>
                  <SwiperSlide className="artworkSlide"><Illumination incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide className="artworkSlide"><Confidential incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide className="artworkSlide"><Autosave incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide className="artworkSlide"><Butterflies /></SwiperSlide>
                  <Scrollbar />

              
                </> : 

                <>

                  <SwiperSlide><DomestikZh incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide><IlluminationZh incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide><ConfidentialZh incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide><AutosaveZh incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide><ButterfliesZh /></SwiperSlide>

                </>
                
              }

            </Swiper>
          </SwiperSlide>

          <SwiperSlide className="exhibitionSlide">
          {(site.language == "english") ? <Essay /> : null }
          </SwiperSlide>

          <SwiperSlide className="exhibitionSlide">
          {(site.language == "english") ? <Curator /> : <CuratorZh /> }
          </SwiperSlide>

        </Swiper>
  
      </>

    );

}


function updateActiveArtworkButtonOnNavigation(site) {

 

    if (isMobile) {
      const artworkMenuButtons = document.querySelectorAll(".artworkMenuButton");
      const exhibitionMenuButtons = document.querySelectorAll(".uppermenu");
      if (artworkMenuButtons.length > 0) {
        artworkMenuButtons[site.artworks.activeIndex].classList.add("activeButton");
      }
      for (let i = 0; i < exhibitionMenuButtons.length; i++) {
        exhibitionMenuButtons[i].classList.remove("activeButton");
      }
    exhibitionMenuButtons[site.exhibition.activeIndex].classList.add("activeButton");
  }

  
    

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

