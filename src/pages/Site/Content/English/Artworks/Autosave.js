import { useState, useEffect } from "react"
import Loader from "pages/Site/Loader";


export default function Autosave({swiper}) {

  const [hasLoaded, setLoaded] = useState(0);

  useEffect(() => {



  }, []);

  useEffect(() => {
    console.log("state change");
    if (hasLoaded == 4) {
      document.querySelector(".pageWithLoader").style.opacity = 1;
    }
  }, [hasLoaded])

    return (

        <>

      { (hasLoaded == 4) ? null : <Loader /> }
      
  <div id="artwork_page" className="pageWithLoader">
    
    <h3>Autosave: Redoubt (2018)</h3>
    <div className="artistsBox">
    <div className="artistItem"><h4>Andrew Luk</h4><a href="https://www.andrewluk.com" target="_blank">www.andrewluk.com</a></div>
    <div className="artistItem"><h4>Alexis Mailles</h4><a href="https://www.alexismailles.com" target="_blank">www.alexismailles.com</a></div>
    <div className="artistItem"><h4>Peter Nelson</h4><a href="https://www.peteracnelson.com" target="_blank">www.peteracnelson.com</a></div>
    </div>
    <div>
    </div>
    <p>Autosave: Redoubt is made to be a playable map for the computer game Counter-Strike: Global Offensive. It is a site-specific recreation of the WWII bunkers and tunnels of the Kowloon Peninsula built by the British during the 1930s.<br /><br /> This piece taps into the dysfunctional military architecture of the historical site as well as the contradictions embedded in the 3D computer game technology for virtual archaeology — the more realistic the site recreation became, the less playable it became as a computer game.
    <br /><br /> Andrew Luk is a Hong Kong artist who works across a range of media examining the intricacies of the human experience as well as the myths and histories associated with civilisation building. His work has been exhibited internationally including in Asia Society (Hong Kong), Tai Kwun Contemporary (Hong Kong), HOW Art Museum (Shanghai), and Kula Bazaar ACC (Gwangju). 
    <br /><br /> Alexis Mailles produces hybrid installations that border the frontiers of Arte Povera and cyberpunk styles by using digital and analogue techniques. He has exhibited worldwide, including the M21 Museum (Shanghai), the 18th Street Art Center (Los Angeles), the Digital Art Center (Taipei), and Espace C.O.N.S.O.L.E (Paris). 
    <br /><br /> Peter Nelson is a visual artist and academic working at the intersection of landscape theory and computer games. Originally trained in painting and drawing, Nelson currently produces exhibitions across a number of media, from painting and drawing, to animation, 3D printed sculpture and interactive game-based systems. He has held numerous group and solo exhibitions, including projects with HanArt TZ Gallery (Hong Kong), The National Palace Museum (Taiwan), The Sichuan Fine Art Academy Museum (Chongqing) and the K11 Art Foundation (Hong Kong). He is an Assistant Professor at Hong Kong Baptist University.</p>
    {(swiper.activeIndex == 6) ? <>
    <div className="autosaveVidContainer">
    <iframe className='autosaveVid asFirst' src="https://www.youtube.com/embed/I3Mr4dbVDy4?si=Voew6fKp45B9FeWl" allowFullScreen={true} frameBorder="no"></iframe>
    <iframe className='autosaveVid' src="https://www.youtube.com/embed/XvERO-f8wfE" allowFullScreen={true} frameBorder="no"></iframe>
    <iframe className='autosaveVid' src="https://www.youtube.com/embed/S1zhsv44qlU" allowFullScreen={true} frameBorder="no"></iframe>
    <iframe className='autosaveVid asLast' src="https://www.youtube.com/embed/hW2qJiNeotc" allowFullScreen={true} frameBorder="no"></iframe>
    </div>
    </> : null}
  </div>


        </>

    )

}

