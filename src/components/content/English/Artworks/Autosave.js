import { Player } from "video-react"
import { useEffect, useRef } from "react";

export default function Autosave({incrementLoad, autoSaveVideosPlaying}) {

  useEffect(() => {
    stopAllVideos();
  }, [autoSaveVideosPlaying])

  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);

  const stopAllVideos = () => {
    if (playerRef1.current) {
      playerRef1.current.pause();  // Pause video 1
      playerRef1.current.seek(0);  // Seek to the start
    }
    if (playerRef2.current) {
      playerRef2.current.pause();  // Pause video 2
      playerRef2.current.seek(0);  // Seek to the start
    }
    if (playerRef3.current) {
      playerRef3.current.pause();  // Pause video 3
      playerRef3.current.seek(0);  // Seek to the start
    }
    if (playerRef4.current) {
      playerRef4.current.pause();  // Pause video 4
      playerRef4.current.seek(0);  // Seek to the start
    }
  };



  return (

        <>

          <div className="contentContainer fluidHeightContentWindow">
            
            <h3>Autosave: Redoubt (2018)</h3>
            <div className="artistsBox">
            <div className="artistItem"><h4>Andrew Luk</h4><a href="https://www.andrewluk.com" target="_blank">www.andrewluk.com</a></div>
            <div className="artistItem"><h4>Alexis Mailles</h4><a href="https://www.alexismailles.com" target="_blank">www.alexismailles.com</a></div>
            <div className="artistItem"><h4>Peter Nelson</h4><a href="https://www.peteracnelson.com" target="_blank">www.peteracnelson.com</a></div>
            </div>
   
            <Player ref={playerRef1} incrementLoad={incrementLoad}>
              <source style={{width: "100vw"}} src="/AutosaveVideos/01.mp4"></source>
             </Player>
        
            <div className="artworkDescription">
            <p style={{fontStyle: "italic", fontSize: "12.3px"}}>More videos at the bottom</p><br />
            <p>Autosave: Redoubt is made to be a playable map for the computer game Counter-Strike: Global Offensive. It is a site-specific recreation of the WWII bunkers and tunnels of the Kowloon Peninsula built by the British during the 1930s.<br /><br /> This piece taps into the dysfunctional military architecture of the historical site as well as the contradictions embedded in the 3D computer game technology for virtual archaeology — the more realistic the site recreation became, the less playable it became as a computer game.
            <br /><br /> Andrew Luk is a Hong Kong artist who works across a range of media examining the intricacies of the human experience as well as the myths and histories associated with civilisation building. His work has been exhibited internationally including in Asia Society (Hong Kong), Tai Kwun Contemporary (Hong Kong), HOW Art Museum (Shanghai), and Kula Bazaar ACC (Gwangju). 
            <br /><br /> Alexis Mailles produces hybrid installations that border the frontiers of Arte Povera and cyberpunk styles by using digital and analogue techniques. He has exhibited worldwide, including the M21 Museum (Shanghai), the 18th Street Art Center (Los Angeles), the Digital Art Center (Taipei), and Espace C.O.N.S.O.L.E (Paris). 
            <br /><br /> Peter Nelson is a visual artist and academic working at the intersection of landscape theory and computer games. Originally trained in painting and drawing, Nelson currently produces exhibitions across a number of media, from painting and drawing, to animation, 3D printed sculpture and interactive game-based systems. He has held numerous group and solo exhibitions, including projects with HanArt TZ Gallery (Hong Kong), The National Palace Museum (Taiwan), The Sichuan Fine Art Academy Museum (Chongqing) and the K11 Art Foundation (Hong Kong). He is an Assistant Professor at Hong Kong Baptist University.</p>
            </div>
            <Player ref={playerRef2} incrementLoad={incrementLoad}>
              <source src="/AutosaveVideos/02.mp4"></source>
             </Player>
             <Player ref={playerRef3} incrementLoad={incrementLoad}>
              <source src="/AutosaveVideos/03.mp4"></source>
             </Player>
             <Player ref={playerRef4} incrementLoad={incrementLoad}>
              <source src="/AutosaveVideos/04.mp4"></source>
             </Player>
             </div>

        </>

    )

}