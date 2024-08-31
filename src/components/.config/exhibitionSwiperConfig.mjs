import { Pagination } from 'swiper/modules';
import { isMobile } from 'react-device-detect';

const exhibitionSwiperConfig = {
    touchRatio: 1.2,
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: { clickable: false },

    onSwiper: (swiper) => { swiper.updateAutoHeight(1); },
    passiveListeners: true,
    preventInteractionOnTransition: true,
    autoHeight: true,
    allowTouchMove: isMobile ? true : false,
    onDragStart: () => {},
    onSliderFirstMove: (swiper) => { },
    onTouchStart: () => {},
    onBeforeTransitionStart: (swiper) => {},
    onSlideResetTransitionEnd: (swiper) => {},
  };
  
  export default exhibitionSwiperConfig;