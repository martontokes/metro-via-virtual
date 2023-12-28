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
  
  export default exhibitionSwiperConfig;