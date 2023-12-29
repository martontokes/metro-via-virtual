import { Pagination, Navigation } from 'swiper/modules';

const artworksSwiperConfig = {
  navigation: true,
  modules: [Pagination, Navigation],
  pagination: true,
  
  spaceBetween: 0,
  slidesPerView: 1,
  onSwiper: (swiper) => {
    swiper.updateAutoHeight(1);
  },
  passiveListeners: true,
  onSliderFirstMove: (swiper) => {
  },
  onBeforeTransitionStart: (swiper) => {
    // Add any additional logic for before transition starts
  },
  style: {
    
    "--swiper-navigation-size": "44px",
    "--swiper-navigation-top-offset": "50%",
    "--swiper-navigation-sides-offset": "10px",
    "--swiper-navigation-color": "black",
    
    "--swiper-pagination-color": "white",
    "--swiper-pagination-bullet-inactive-color": "rgb(50,50,50)",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "8px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
  },
};
  
  export default artworksSwiperConfig;