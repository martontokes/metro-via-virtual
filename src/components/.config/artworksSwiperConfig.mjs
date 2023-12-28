import { Pagination, Scrollbar } from 'swiper/modules';

const artworksSwiperConfig = {
  
  modules: [Pagination],
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
    "--swiper-pagination-color": "white",
    "--swiper-pagination-bullet-inactive-color": "rgb(50,50,50)",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "8px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
  },
};
  
  export default artworksSwiperConfig;