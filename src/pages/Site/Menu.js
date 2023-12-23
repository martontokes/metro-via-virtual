export default function Menu({swiperState}) {


    return (

    <>
      <div id="mainMenu">
        <button onClick={() => swiperState.slideTo(0, 500, false)} className="menubutton activeButton">statement</button>
        <button onClick={() => swiperState.slideTo(1, 500, false)} className="menubutton">artworks</button>
        <button onClick={() => swiperState.slideTo(2, 500, false)} className="menubutton">essay</button>
        <button onClick={() => swiperState.slideTo(3, 500, false)} className="menubutton">curator</button>
      </div>
      <div id="artworksMenu"></div>
    </>

  );

}