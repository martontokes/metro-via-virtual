import Autosave from "./Content/English/Artworks/Autosave";
import AutosaveZh from "./Content/Chinese/Artworks/AutosaveZh";
import Butterflies from "./Content/English/Artworks/Butterflies";
import ButterfliesZh from "./Content/Chinese/Artworks/ButterfliesZh";
import Confidential from "./Content/English/Artworks/Confidential";
import ConfidentialZh from "./Content/Chinese/Artworks/ConfidentialZh";
import Domestik from "./Content/English/Artworks/Domestik";
import DomestikZh from "./Content/Chinese/Artworks/DomestikZh";
import Essay from "./Content/English/Essay";
import Curator from "./Content/English/Curator";
import Statement from './Content/English/Statement';
import StatementZh from "./Content/Chinese/StatementZh";
import Illumination from "./Content/English/Artworks/Illumination";
import IlluminationZh from "./Content/Chinese/Artworks/IlluminationZh";

import Loader from "./Loader";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useState } from "react";


export default function Content({ site }) {

  const [hasLoaded, setLoaded] = useState(false);
 
  // Swiper object responsible for the swiping behaviour //


  if (site.language === 'english') {

    return (
      
      <>

        <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => {swiper.updateAutoHeight(1)}}
      passiveListeners={true}

      longSwiper={false}
      onSlideChangeTransitionEnd={() => {
          scrollTo({top: 0,})
          document.querySelector('.swiper-slide-active').querySelector(".placeholder").style.height = 0 + "px";  
      }}
      autoHeight={true}

      // readjust the height of the neighbouring swiper element's first placeholder divs to prevent scrollTop // 

      onTouchStart={(swiper) => {

        if (document.querySelector('.swiper-slide-prev')) {
        document.querySelector('.swiper-slide-prev').querySelector(".placeholder").style.height = window.scrollY + "px";
        }

        if (document.querySelector('.swiper-slide-next')) {
        document.querySelector('.swiper-slide-next').querySelector(".placeholder").style.height = window.scrollY + "px";  
        }


      }}
      
      style={{
        "--swiper-pagination-color": "white",
        "--swiper-pagination-bullet-inactive-color": "rgb(50,50,50)",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-horizontal-gap": "6px"
      }}>

          <SwiperSlide>

          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Statement /> : null )}
            </SwiperSlide>

          <SwiperSlide>

          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Confidential /> : null)}
            </SwiperSlide>
          <SwiperSlide>

          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Illumination /> : null)}
            </SwiperSlide>
            <SwiperSlide>

          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Butterflies /> : null)}
            </SwiperSlide>

            <SwiperSlide>
          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Domestik /> : null)}
            </SwiperSlide>
            <SwiperSlide>

          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Autosave /> : null)}
            </SwiperSlide>
            <SwiperSlide>

          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Essay /> : null)}
            </SwiperSlide>

            <SwiperSlide>
          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Curator /> : null)}
            </SwiperSlide>
          </Swiper>
   </>

    );

  } else {

    return (

      <>
      
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => console.log(swiper)}
      onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <StatementZh />
          </SwiperSlide>
          <SwiperSlide>
            <AutosaveZh />
          </SwiperSlide>
          <SwiperSlide>
            <ConfidentialZh />
          </SwiperSlide>
          <SwiperSlide>
            <IlluminationZh />
          </SwiperSlide>
          <SwiperSlide>
            <ButterfliesZh />
          </SwiperSlide>
          <SwiperSlide>
            <DomestikZh />
          </SwiperSlide>
        </Swiper>
      </>

    );
  }
}
