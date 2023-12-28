import exhibitionSwiperConfig from "./.config/exhibitionSwiperConfig.mjs"
import artworksSwiperConfig from "./.config/artworksSwiperConfig.mjs"

export default function Content({ site }) {

  const [itemsLoaded, incrementLoad] = useState(0);

          useEffect(() => {

            if (itemsLoaded == 10) {
              console.log("loaded");
            }

          }, [itemsLoaded]);


    return (
      
      <>


        <Swiper {...exhibitionSwiperConfig}>

          <SwiperSlide><Statement /></SwiperSlide>
          <SwiperSlide>
            
            <Swiper {...artworksSwiperConfig}>
                    
              <SwiperSlide><Domestik incrementLoad={incrementLoad} /></SwiperSlide>
              <SwiperSlide><Illumination incrementLoad={incrementLoad} /></SwiperSlide>
              <SwiperSlide><Confidential incrementLoad={incrementLoad} /></SwiperSlide>
              <SwiperSlide><Autosave incrementLoad={incrementLoad} /></SwiperSlide>
              <SwiperSlide><Butterflies /></SwiperSlide>
            </Swiper>
          </SwiperSlide>

          <SwiperSlide><Essay /></SwiperSlide>
          <SwiperSlide><Curator /></SwiperSlide>

        </Swiper>
  
          
   </>

    );

}

