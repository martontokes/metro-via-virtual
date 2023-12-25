import { useState, useEffect } from "react";

import Menu from "./Menu";
import Header from "./Header";

import Autosave from "./Content/English/Artworks/Autosave";
import Confidential from "./Content/English/Artworks/Confidential";
import Butterflies from "./Content/English/Artworks/Butterflies";
import Domestik from "./Content/English/Artworks/Domestik";
import Essay from "./Content/English/Essay";
import Curator from "./Content/English/Curator";
import Statement from './Content/English/Statement';
import Illumination from "./Content/English/Artworks/Illumination";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// Event handlers and helpers at the bottom //

export default function Exhibition({ site, setExhibitionSwiper, setArtworksSwiper }) {

  const [itemsLoaded, incrementLoad] = useState(0);
  const [readingTimeExceeded, setTimeExceeded] = useState(false);

          useEffect(() => {
            setTimeout(() => {
              setTimeExceeded(true);
            }, 7000);
          }, []);

        /* Display Content On Load */

          useEffect(() => {

            if (itemsLoaded == 10 && readingTimeExceeded == true) {
              onContentLoad();
            }

          }, [itemsLoaded, readingTimeExceeded]);

  /* Exhibition content "Swipers" returned by an if, based on site.language */

  if (site.language === 'english') {

    return (
      
      <>

        <Swiper


          touchRatio={1.2}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: false }}
          onSwiper={(swiper) => {swiper.updateAutoHeight(1); }}
          passiveListeners={true}
          onSlideChangeTransitionEnd={() => {}}
          preventInteractionOnTransition={true}
          onInit={(swiper) => {
            resizeSwiperContent();
            setExhibitionSwiper(swiper);
            console.log(swiper);
            console.log(swiper.slides);
            const menuButtons = document.querySelectorAll(".menubutton");
            }}
          autoHeight={true}
          onDragStart={() => {}}
          onSlideChange={(swiper) => { reRenderMenuOnSlideChange(swiper.activeIndex);
          setExhibitionSwiper(swiper);
          }}
          onSliderFirstMove={(swiper) => { onSliderMove_Parent(swiper.activeIndex); }}
          onTouchStart={() => {}}
          onBeforeTransitionStart={(swiper) => {

          }}
          onSlideResetTransitionEnd={(swiper) => {}}>



          <SwiperSlide><Statement /></SwiperSlide>
          <SwiperSlide>
            <Swiper

            onInit={(swiper) => {setArtworksSwiper(swiper);}}
            onSlideChange={(swiper) => {setArtworksSwiper(swiper);}}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => {swiper.updateAutoHeight(1); }}
            passiveListeners={true}
            onSliderFirstMove={(swiper) => { onSliderMove_Child(swiper.activeIndex); }}
            onBeforeTransitionStart={(swiper) => {

            }}
            style={{

              "--swiper-pagination-color": "white",
              "--swiper-pagination-bullet-inactive-color": "rgb(50,50,50)",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",

            }}>
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


      /// Helpers and Handlers ///


// function isIOS() {

//   return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// }

function resizeSwiperContent() {

  let slides = document.querySelectorAll(".swiper-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.height = window.innerHeight - 56 + "px";
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

function onContentLoad() {

  addFontRuleToHead();
    
    if ((document.querySelector(".loader")) != null) {
    document.getElementById("loaderContainer").style.opacity = 0;
    }

    setTimeout(() => {
      document.getElementById("loaderContainer").remove();
      resizeSwiperContent();
      document.getElementById("exhibition").style.opacity = 1;
    }, 1000);

}

function reRenderMenuOnSlideChange(index) {

  var menuButtons = document.querySelectorAll(".menubutton");
  for (let i = 0; i < 4; i++) {
    menuButtons[i].classList.remove("activeButton");
  }
  menuButtons[index].classList.add("activeButton");

}

function onSliderMove_Parent(index) {

  let elements = document.querySelectorAll(".exhibitionSlide");
  if (index.activeIndex == 0) {

  }

}

// function onSliderMove_Parent(index) {

//   let elements = document.querySelector(".swiper").querySelectorAll(".swiper-slide");
//     for (let i = 0; i < elements.length; i++) {
//       if (i == index.activeIndex) {
//         continue;
//       }
//       elements[i].scrollTo(0,0);
//     }
// }

function onSliderMove_Child(index) {

  let elements = document.querySelector(".swiper").querySelectorAll(".swiper-slide");
  for (let i = 0; i < elements.length; i++) {
    console.log(index.activeIndex);
    if (i == index.activeIndex) {
      continue;
    }
    elements[i].scrollTo(0,0);
  }

}