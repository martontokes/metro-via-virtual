import exhibitionSwiperConfig from "./.config/exhibitionSwiperConfig.mjs"
import artworksSwiperConfig from "./.config/artworksSwiperConfig.mjs"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { useState, useEffect } from "react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation'

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

export default function Content({ site, incrementLoad }) {

    return (
      
      <>



        <Swiper {...exhibitionSwiperConfig} 
        onInit={(swiper) => {site.setExhibition(swiper);}}
        onSlideChange={(swiper) => {site.setExhibition(swiper); updateMenu(site);}}
        >

          <SwiperSlide>
          {(site.language == "english") ? <Statement /> : <StatementZh /> }
          </SwiperSlide>

          <SwiperSlide>
            <Swiper {...artworksSwiperConfig}
            onInit={(swiper) => {site.setArtworks(swiper);}}
            onSlideChange={(swiper) => {site.setArtworks(swiper); updateArtworkMenu(site);}} className="innerSwiper-wrapper"
>  

              {(site.language == "english") ? 
              
                <>

                  <SwiperSlide><Domestik incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide><Illumination incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide><Confidential incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide><Autosave incrementLoad={incrementLoad} /></SwiperSlide>
                  <SwiperSlide><Butterflies /></SwiperSlide>
              
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

          <SwiperSlide>
          {(site.language == "english") ? <Essay /> : null }
          </SwiperSlide>

          <SwiperSlide>
          {(site.language == "english") ? <Curator /> : <CuratorZh /> }
          </SwiperSlide>

        </Swiper>
  
      </>

    );

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
    for (let i = 0; i < menubuttons.length; i++) {
      menubuttons[i].classList.remove("activeButton");
  }
   menubuttons[site.artworks.activeIndex].classList.add("activeButton");

}