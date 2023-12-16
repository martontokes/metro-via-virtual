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
import 'swiper/css/pagination';

import { useState, useEffect } from "react";


export default function Content({ site }) {

  const [hasLoaded, setLoaded] = useState(false);
  const [displayManual, setDisplayManual] = useState(true);
  const [swiper, setSwiper] = useState(null);
  // Swiper object responsible for the swiping behaviour //

  function resizeSwiperContent() {
    let slides = document.querySelectorAll(".swiper-slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.height = window.innerHeight - 147 + "px";
    }
  }


  if (site.language === 'english') {

    return (
      
      <>

        <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: false }}
      onSwiper={(swiper) => {swiper.updateAutoHeight(1); setSwiper(swiper); }}
      passiveListeners={true}
      onSlideChangeTransitionEnd={() => {
          setDisplayManual(false);
      }}

      onInit={() => { resizeSwiperContent() }}
      // document.querySelector("swiper-slide").style.height = window.innerHeight - 147 + "px";

      onReachEnd={() => {document.getElementById("buttonRight").style.display = "none";}}
      onReachBeginning={() => {document.getElementById("buttonLeft").style.display = "none";}}
      onFromEdge={() => {document.getElementById("buttonRight").style.display = "block"; document.getElementById("buttonLeft").style.display = "block";}}

      autoHeight={true}
      onDragStart={() => {

      }}
      onSliderMove={(swiper) => {
        console.log("Transition started!");
        document.querySelector(".swiper-slide-active").classList.add("scrollbarHidden");

        if (document.querySelector(".swiper-slide-next")) { 
        document.querySelector(".swiper-slide-next").scrollTop = 0; }
        if (document.querySelector(".swiper-slide-prev")) {
        document.querySelector(".swiper-slide-prev").scrollTop = 0; }

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
      (isActive || isNext || isPrev) ? <Domestik swiper={swiper} /> : null)}

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
      (isActive || isNext || isPrev) ? <Autosave swiper={swiper} /> : null)}
            </SwiperSlide>

            <SwiperSlide>
          {({ isActive, isNext, isPrev }) => (
      (isActive || isNext || isPrev) ? <Curator /> : null)}
            </SwiperSlide>
          <button id="buttonLeft" style={{zIndex: "5000", display: "none", position: "fixed", bottom: "0px", width: (window.screen.width - 160) / 2, height: "64px"}} onClick={() => swiper.slidePrev()}><div className="navbutton" style={{width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "rgba(255,255,255,0)"}}><img src="/arrowLeft.svg" style={{height: "20px", width: "40px"}}></img></div></button>
          <button id="buttonRight" style={{zIndex: "5000", position: "fixed", bottom: "0px", right: "0px", width: (window.screen.width - 160) / 2, height: "64px"}} onClick={() => swiper.slideNext()}><div className="navbutton"  style={{width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "rgba(255,255,255,0)"}}><img src="/arrowRight.svg" style={{height: "20px", width: "40px"}}></img></div></button>
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
