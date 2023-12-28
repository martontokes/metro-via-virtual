import exhibitionSwiperConfig from "./.config/exhibitionSwiperConfig.mjs"
import artworksSwiperConfig from "./.config/artworksSwiperConfig.mjs"

import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from "react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Content({ site }) {

  const [itemsLoaded, incrementLoad] = useState(0);

          useEffect(() => {
            console.log("content use Effect triggered");
            if (itemsLoaded == 10) {
              console.log("loaded");
            }

          }, [itemsLoaded]);


    return (
      
      <>


        <Swiper {...exhibitionSwiperConfig}>

          <SwiperSlide><Statement /></SwiperSlide>
          <SwiperSlide>
            
            <Swiper {...artworksSwiperConfig}>
                    
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

