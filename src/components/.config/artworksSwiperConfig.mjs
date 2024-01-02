import { Pagination, Navigation } from 'swiper/modules';

const artworksSwiperConfig = {
  modules: [Pagination],
  pagination: true,
  spaceBetween: 0,
  slidesPerView: 1,
  onSwiper: (swiper) => {
    swiper.updateAutoHeight(1);
  },
  passiveListeners: true,
  style: {
    
    "--swiper-navigation-size": "44px",
    "--swiper-navigation-top-offset": "50%",
    "--swiper-navigation-sides-offset": "10px",
    "--swiper-navigation-color": "black",
    
    "--swiper-pagination-color": "red",
    "--swiper-pagination-bullet-inactive-color": "rgb(50,50,50)",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "8px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
  },
};
  
  export default artworksSwiperConfig;