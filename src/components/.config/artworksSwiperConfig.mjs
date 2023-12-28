const artworksSwiperConfig = {
  modules: [Pagination],
  pagination: true,
  onInit: (swiper) => {
    setArtworksSwiper(swiper);
  },
  onSlideChange: (swiper) => {
    setArtworksSwiper(swiper);
  },
  spaceBetween: 0,
  slidesPerView: 1,
  onSwiper: (swiper) => {
    swiper.updateAutoHeight(1);
  },
  passiveListeners: true,
  onSliderFirstMove: (swiper) => {
    onSliderMove_Child(swiper.activeIndex);
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