import Autosave from "./Content/English/Artworks/Autosave";
import Confidential from "./Content/English/Artworks/Confidential";
import Butterflies from "./Content/English/Artworks/Butterflies";
import Domestik from "./Content/English/Artworks/Domestik";
import Essay from "./Content/English/Essay";
import Curator from "./Content/English/Curator";
import Statement from './Content/English/Statement';
import Illumination from "./Content/English/Artworks/Illumination";
import Loader from "./Loader";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { useState, useEffect } from "react";


export default function Content({ site }) {

  const [itemsLoaded, incrementLoad] = useState(0);

  useEffect(() => {

    if (itemsLoaded == 11) {
      
      var newRuleToDisplayArtworkPageWithFade = `
      #artwork_page {
        display: block;
        opacity: 1;
      }
    `;

      var styleElement = document.createElement('style');
      styleElement.textContent = newRuleToDisplayArtworkPageWithFade;
    
      document.head.appendChild(styleElement);
      document.getElementById("loaderContainer").remove();
      resizeSwiperContent();

    }

  }, [itemsLoaded])






  if (site.language === 'english') {

    return (
      
      <>

      <Loader />

        <Swiper
      // install Swiper modules

      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: false }}
      onSwiper={(swiper) => {swiper.updateAutoHeight(1); }}
      passiveListeners={true}
      onSlideChangeTransitionEnd={() => {

      }}

      preventInteractionOnTransition={true}

      onInit={() => {resizeSwiperContent();}}
      // document.querySelector("swiper-slide").style.height = window.innerHeight - 147 + "px";

      // onReachEnd={() => {document.getElementById("buttonRight").style.display = "none";}}
      // onReachBeginning={() => {document.getElementById("buttonLeft").style.display = "none";}}
      // onFromEdge={() => {document.getElementById("buttonRight").style.display = "block"; document.getElementById("buttonLeft").style.display = "block";}}

      autoHeight={true}
      onDragStart={() => {

      }}
      onSliderMove={(swiper) => {


        if (document.querySelector(".swiper-slide-next")) { 
        document.querySelector(".swiper-slide-next").scrollTop = 0; }
        if (document.querySelector(".swiper-slide-prev")) {
        document.querySelector(".swiper-slide-prev").scrollTop = 0; }

      }}

      onTouchStart={() => {}}

      onSlideResetTransitionEnd={(swiper) => {


  
      }}
      style={{
        "--swiper-pagination-color": "white",
        "--swiper-pagination-bullet-inactive-color": "rgb(50,50,50)",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-horizontal-gap": "6px"
      }}>

          <SwiperSlide>
            <Statement />
          </SwiperSlide>

          <SwiperSlide>
          <Essay />
          </SwiperSlide>

          <SwiperSlide>
          <Swiper
           onSliderMove={(swiper) => {


            if (document.querySelector(".swiper-slide-next")) { 
            document.querySelector(".swiper-slide-next").scrollTop = 0;
            }
                        
            if (document.querySelector(".swiper-slide-prev")) {
            document.querySelector(".swiper-slide-prev").scrollTop = 0; }
    
          }}>

          <SwiperSlide>
            <Confidential incrementLoad={incrementLoad} /> 
          </SwiperSlide>
          
          <SwiperSlide>
            <Domestik incrementLoad={incrementLoad} />
          </SwiperSlide>

            <SwiperSlide>
              <Illumination incrementLoad={incrementLoad} />
            </SwiperSlide>

            <SwiperSlide>
              <Butterflies incrementLoad={incrementLoad} />
            </SwiperSlide>

            <SwiperSlide>
              <Autosave incrementLoad={incrementLoad} />
            </SwiperSlide>

            </Swiper>
            </SwiperSlide>

            <SwiperSlide>
              <Curator />
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




function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function resizeSwiperContent() {
  let slides = document.querySelectorAll(".swiper-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.height = window.innerHeight - 104 + "px";
    console.log("resized swiper slide");
  }
}


const countLoadedItems = () => {
  
  let counter = 0;

    return function() {
  
      counter += 1;

    }

}