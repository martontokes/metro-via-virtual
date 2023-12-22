import Autosave from "./Content/English/Artworks/Autosave";
import Confidential from "./Content/English/Artworks/Confidential";
import Butterflies from "./Content/English/Artworks/Butterflies";
import Domestik from "./Content/English/Artworks/Domestik";
import Essay from "./Content/English/Essay";
import Curator from "./Content/English/Curator";
import Statement from './Content/English/Statement';
import Illumination from "./Content/English/Artworks/Illumination";

import Menu from "./Menu";
import Header from "./Header";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { useState, useEffect } from "react";


export default function MobileContent({ site, swiperState, setSwiperState }) {

  const [itemsLoaded, incrementLoad] = useState(0);


  /* Display Content On Load */

    useEffect(() => {

      if (itemsLoaded == 11) {
      
        addFontRuleToHead();
    
        if ((document.querySelector(".loader")) != null) {
        document.querySelector(".loader").style.opacity = 0;
        }

        setTimeout(() => {
          document.getElementById("loaderContainer").remove();
          resizeSwiperContent();
          document.getElementById("exhibition").style.opacity = 1;
        }, 1000);
        
      }

    }, [itemsLoaded]);


    /* Exhibition Content */

    

  if (site.language === 'english') {

    return (
      
      <>

        <Swiper



          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: false }}
          onSwiper={(swiper) => {swiper.updateAutoHeight(1); }}
          passiveListeners={true}
          onSlideChangeTransitionEnd={() => {

          }}

          preventInteractionOnTransition={true}

          onInit={(swiper) => {
            
            resizeSwiperContent();
            setSwiperState(swiper);

            const menuButtons = document.querySelectorAll(".menubutton");

          }}

          autoHeight={true}
          onDragStart={() => {

          }}

          onSlideChange={(swiper) => {

            var menuButtons = document.querySelectorAll(".menubutton");

            for (let i = 0; i < 4; i++) {
              menuButtons[i].classList.remove("activeButton");
            }

            menuButtons[swiper.activeIndex].classList.add("activeButton");
            
          }}

          onSliderMove={(swiper) => {


            if (document.querySelector(".swiper-slide-next")) { 
            document.querySelector(".swiper-slide-next").scrollTop = 0; }
            if (document.querySelector(".swiper-slide-prev")) {
            document.querySelector(".swiper-slide-prev").scrollTop = 0; }

            if (swiper.activeIndex == 3) {
              document.querySelectorAll(".swiper-slide-active")[0].scrollTop = 0;
            }

            if (swiper.activeIndex == 1) {
              document.querySelectorAll(".swiper-slide-active")[1].scrollTop = 0;
            }

          }}

          onTouchStart={() => {}}

          onSlideResetTransitionEnd={(swiper) => {


      
          }}
         >



          <SwiperSlide>
            <Statement />
          </SwiperSlide>

          <SwiperSlide>
          <Essay />
          </SwiperSlide>

          <SwiperSlide>
          <Swiper

          

spaceBetween={0}
slidesPerView={1}
pagination={{ clickable: false }}
onSwiper={(swiper) => {swiper.updateAutoHeight(1); }}
passiveListeners={true}

          modules={[Pagination]}

          style={{
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-inactive-color": "rgb(50,50,50)",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",

          }}

           onSliderMove={(swiper) => {

            if (document.querySelector(".swiper-slide-next")) { 
            document.querySelector(".swiper-slide-next").scrollTop = 0;
            }

            if (document.querySelector(".swiper-slide-prev")) {
            document.querySelector(".swiper-slide-prev").scrollTop = 0; }

            if (swiper.activeIndex > 0 && swiper.activeIndex < 4 ) {
              document.querySelectorAll(".swiper-slide-prev")[1].scrollTop = 0;
              document.querySelectorAll(".swiper-slide-next")[1].scrollTop = 0;  
            }

            if (swiper.activeIndex == 4 ) {
              document.querySelectorAll(".swiper-slide-prev")[1].scrollTop = 0;
              document.querySelector(".swiper-slide-next").scrollTop = 0;  
            }


    
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
    slides[i].style.height = window.innerHeight - 96 + "px";
    console.log("resized swiper slide");
  }
}


const countLoadedItems = () => {
  
  let counter = 0;

    return function() {
  
      counter += 1;

    }

}

function addFontRuleToHead() {
  var newRuleToDisplayArtworkPageWithFade = `
      #artwork_page {
        display: block;
        opacity: 1;
      }
    `;

      var styleElement = document.createElement('style');
      styleElement.textContent = newRuleToDisplayArtworkPageWithFade;
      document.head.appendChild(styleElement);
}