import Autosave from "./Content/English/Artworks/Autosave";
import AutosaveZh from "./Content/Chinese/Artworks/AutosaveZh";
import Butterflies from "./Content/English/Artworks/Butterflies";
import ButterfliesZh from "./Content/Chinese/Artworks/ButterfliesZh";
import Confidential from "./Content/English/Artworks/Confidential";
import ConfidentialZh from "./Content/Chinese/Artworks/ConfidentialZh";
import Domestik from "./Content/English/Artworks/Domestik";
import DomestikZh from "./Content/Chinese/Artworks/DomestikZh";
import Essay from "./Content/English/Essay";
import Curator from "./Content/English/Curator";
import Statement from './Content/English/Statement';
import StatementZh from "./Content/Chinese/StatementZh";
import Illumination from "./Content/English/Artworks/Illumination";
import IlluminationZh from "./Content/Chinese/Artworks/IlluminationZh";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Content({ site }) {

  if (site.language === 'english') {
    return (
      <>
        <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => console.log(swiper)}
      autoHeight={true}
      style={{
        "--swiper-pagination-color": "white",
        "--swiper-pagination-bullet-inactive-color": "rgb(50,50,50)",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-horizontal-gap": "6px"
      }}
    >
          <SwiperSlide>
            <Statement />
            </SwiperSlide>
          <SwiperSlide>
          <Confidential />
          </SwiperSlide>
          <SwiperSlide>
          <Illumination />
          </SwiperSlide>
          <SwiperSlide>
          <Butterflies />

          </SwiperSlide>
          <SwiperSlide>
          <Domestik />
          </SwiperSlide>
          <SwiperSlide>
          <Autosave />
          </SwiperSlide>
          <SwiperSlide>
          <Essay />

          </SwiperSlide>
          <SwiperSlide>

            <Curator />
          </SwiperSlide>
          </Swiper>
      </>
    );
  } else {
    return (
      <>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => console.log(swiper)}
      onSwiper={(swiper) => console.log(swiper)}
    >
          <SwiperSlide>
            <StatementZh />
          </SwiperSlide>
          <SwiperSlide>
            <AutosaveZh />
          </SwiperSlide>
          <SwiperSlide>
            <ConfidentialZh />
          </SwiperSlide>
          <SwiperSlide>
            <IlluminationZh />
          </SwiperSlide>
          <SwiperSlide>
            <ButterfliesZh />
          </SwiperSlide>
          <SwiperSlide>
            <DomestikZh />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}
