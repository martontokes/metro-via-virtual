import exhibitionSwiperConfig from "./.config/exhibitionSwiperConfig.mjs"
import artworksSwiperConfig from "./.config/artworksSwiperConfig.mjs"

import { Swiper, SwiperSlide } from 'swiper/react';

import { useState, useEffect } from "react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Statement from "./content/English/Statement";
import Essay from "./content/English/Essay";
import Curator from "./content/English/Curator";
import Domestik from "./content/English/Artworks/Domestik";
import Illumination from "./content/English/Artworks/Illumination";
import Confidential from "./content/English/Artworks/Confidential";
import Autosave from "./content/English/Artworks/Autosave";
import Butterflies from "./content/English/Artworks/Butterflies";

export default function Content({ site }) {

  const [itemsLoaded, incrementLoad] = useState(0);

          useEffect(() => {

            if (itemsLoaded == 10) {
              console.log("loaded");
            }
          }, [itemsLoaded]);

    return (
      
      <>

        <Swiper {...exhibitionSwiperConfig}
        onInit={(swiper) => {site.setExhibition(swiper);}}
        onSlideChange={(swiper) => {site.setExhibition(swiper);}}>

          <SwiperSlide><Statement /></SwiperSlide>
          <SwiperSlide>

            <Swiper {...artworksSwiperConfig}
            onInit={(swiper) => {site.setArtworks(swiper);}}
            onSlideChange={(swiper) => {site.setArtworks(swiper);}}>  

              <SwiperSlide><Domestik incrementLoad={incrementLoad} /></SwiperSlide>
              <SwiperSlide><Illumination incrementLoad={incrementLoad} /></SwiperSlide>
              <SwiperSlide><Confidential incrementLoad={incrementLoad} /></SwiperSlide>
              <SwiperSlide><Autosave incrementLoad={incrementLoad} /></SwiperSlide>
              <SwiperSlide><Butterflies /></SwiperSlide>

            </Swiper>

          </SwiperSlide>

          <SwiperSlide><Essay /></SwiperSlide>
          <SwiperSlide><Curator /></SwiperSlide>
          
        </Swiper>
  
      </>

    );

}

