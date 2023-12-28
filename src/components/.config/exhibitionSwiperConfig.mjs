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
      setExhibitionSwiper(swiper);
      console.log(swiper);
      console.log(swiper.slides);
      const menuButtons = document.querySelectorAll(".menubutton");
    },
    autoHeight: true,
    onDragStart: () => {},
    onSlideChange: (swiper) => {
      reRenderMenuOnSlideChange(swiper.activeIndex);
      setExhibitionSwiper(swiper);
    },
    onSliderFirstMove: (swiper) => { onSliderMove_Parent(swiper.activeIndex); },
    onTouchStart: () => {},
    onBeforeTransitionStart: (swiper) => {},
    onSlideResetTransitionEnd: (swiper) => {},
    
  };
  
  export default exhibitionSwiperConfig;