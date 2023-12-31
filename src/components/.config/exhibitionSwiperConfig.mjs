import { Pagination, Scrollbar } from 'swiper/modules';

const exhibitionSwiperConfig = {

    touchRatio: 1.2,
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: { clickable: false },
    onSwiper: (swiper) => { swiper.updateAutoHeight(1); },
    passiveListeners: true,
    onSlideChangeTransitionEnd: () => {},
    preventInteractionOnTransition: true,
    onInit: (swiper) => {
      resizeSwiperContent();
    },
    onResize: () => {
      resizeSwiperContent();
    },
    autoHeight: true,
    onDragStart: () => {},
    onSlideChange: (swiper) => {

    },
    onSliderFirstMove: (swiper) => { },
    onTouchStart: () => {},
    onBeforeTransitionStart: (swiper) => {},
    onSlideResetTransitionEnd: (swiper) => {},
    
  };

  function resizeSwiperContent() {

    let slides = document.querySelectorAll(".swiper-slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.height = parseInt(document.querySelector(".div100vh").style.height) - 48 + "px";
      console.log("resized swiper slide");
    }
  
  }
  
  export default exhibitionSwiperConfig;