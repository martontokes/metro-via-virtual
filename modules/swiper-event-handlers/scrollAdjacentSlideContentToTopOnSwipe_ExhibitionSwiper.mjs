export default function scrollAdjacentSlideContentToTopOnSwipe_ExhibitionSwiper() {

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

}