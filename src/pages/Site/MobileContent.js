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
import SwipeManual from "./swipeManual";

import Loader from "./Loader";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useState, useEffect } from "react";


export default function Content({ site }) {

  const [hasLoaded, setLoaded] = useState(false);
  const [displayManual, setDisplayManual] = useState(true);
  const [swiper, setSwiper] = useState(null);
  // Swiper object responsible for the swiping behaviour //

  useEffect(() => {



  }, []);


  if (site.language === 'english') {

    return (
      
      <>

        <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true, hide: true, }}
      onSwiper={(swiper) => {swiper.updateAutoHeight(1); setSwiper(swiper);}}
      passiveListeners={true}
      onSlideChangeTransitionEnd={() => {
          setDisplayManual(false);
      }}
      autoHeight={true}
      onInit={() => { document.querySelector(".swiper-slide").style.height = window.innerHeight - 147 + "px"; }}
      onDragStart={() => {

      }}
      onSliderFirstMove={(swiper) => {
        document.querySelector(".swiper-slide-active").classList.add("scrollbarHidden");
        document.querySelector(".swiper-slide-next").scrollTop = 0;

      }}
      onSlideResetTransitionEnd={(swiper) => {
        console.log("slide reset transition end!");
        document.querySelector(".swiper-slide-active").classList.remove("scrollbarHidden");    
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
          (isActive || isNext || isPrev) ? <Essay /> : null)}
            </SwiperSlide>

          <SwiperSlide>

          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Confidential swiper={swiper} /> : null)}
            </SwiperSlide>
          <SwiperSlide>

          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Illumination /> : null)}
            </SwiperSlide>
            <SwiperSlide>

          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Butterflies swiper={swiper} /> : null)}
            </SwiperSlide>

            <SwiperSlide>
          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Domestik swiper={swiper} /> : null)}
            </SwiperSlide>
            <SwiperSlide>

          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Autosave swiper={swiper} /> : null)}
            </SwiperSlide>

            <SwiperSlide>
          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Curator /> : null)}
            </SwiperSlide>
          </Swiper>
          <SwipeManual displayManual={displayManual} setDisplayManual={setDisplayManual} />
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
