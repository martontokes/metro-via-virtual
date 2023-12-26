export default function Menu({exhibitionSwiper, artworksSwiper}) {

  const exhibitionSlides = exhibitionSwiper;
  const artworksSlides = artworksSwiper;

    return (

    <>
      <div id="mainMenu">
        <button onClick={() => statementButtonClickHandler(exhibitionSwiper, artworksSwiper)} className="menubutton activeButton">statement</button>
        <button onClick={() => artworksButtonClickHandler(exhibitionSwiper, artworksSwiper)} className="menubutton">artworks</button>
        <button onClick={() => essayButtonClickHandler(exhibitionSwiper, artworksSwiper)} className="menubutton">essay</button>
        <button onClick={() => curatorButtonClickHandler(exhibitionSwiper, artworksSwiper)} className="menubutton">curator</button>
      </div>
    </>

  );

}

function statementButtonClickHandler(index) {

  console.log(document.querySelectorAll(".swiper-slide"));
  scrollAllToTop(index);
  index.slideTo(0, 500, false);

}

function artworksButtonClickHandler(index) {

  scrollAllToTop(index);
  index.slideTo(1, 500, false);
  console.log(index.activeIndex);
}

function essayButtonClickHandler(index) {

  scrollAllToTop(index);
  index.slideTo(2, 500, false)

}

function curatorButtonClickHandler(index) {

  scrollAllToTop(index);
  index.slideTo(3, 500, false)

}

function scrollAllToTop(exhibitionSwiper, artworksSwiper) {

  let elements = document.querySelectorAll(".swiper-slide");

  for (let i = 0; i < elements.length; i++) {
    if (i == exhibitionSwiper.activeIndex) {
      continue;
    }
    elements[i].scrollTo(0,0);
  }

}



function scrollAdjacentSlidesToTop(index) {

  if (document.querySelector(".swiper-slide-next")) { 
    document.querySelector(".swiper-slide-next").scrollTop = 0; }
    if (document.querySelector(".swiper-slide-prev")) {
    document.querySelector(".swiper-slide-prev").scrollTop = 0; }

    if (index == 3) {
      document.querySelectorAll(".swiper-slide-active")[0].scrollTop = 0;
    }

    if (index == 1) {
      document.querySelectorAll(".swiper-slide-active")[1].scrollTop = 0;
    }

    if (index == 0) {
      document.querySelectorAll(".swiper-slide-active")[1].scrollTop = 0;
    }

}

function scrollAdjacentToTop_Artworks(index) {

  if (document.querySelector(".swiper-slide-next")) { 
    document.querySelector(".swiper-slide-next").scrollTop = 0;
    }

    if (document.querySelector(".swiper-slide-prev")) {
    document.querySelector(".swiper-slide-prev").scrollTop = 0; }

    if (index > 0 && index < 4 ) {
      document.querySelectorAll(".swiper-slide-prev")[1].scrollTop = 0;
      document.querySelectorAll(".swiper-slide-next")[1].scrollTop = 0;  
    }

    if (index == 4 ) {
      document.querySelectorAll(".swiper-slide-prev")[1].scrollTop = 0;
      document.querySelector(".swiper-slide-next").scrollTop = 0;  
    }

}