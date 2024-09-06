import { Player } from "video-react";
import { useEffect, useRef } from "react";

export default function Autosave({ incrementLoad, isAutoSaveVideoPlaying, setIsAutoSaveVideoPlaying }) {

  useEffect(() => {
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');
    var video3 = document.getElementById('video3');
    var video4 = document.getElementById('video4');

    video1.addEventListener('play', onVideoPlay);
    video2.addEventListener('play', onVideoPlay);
    video3.addEventListener('play', onVideoPlay);
    video4.addEventListener('play', onVideoPlay);
  }, []);

    function onVideoPlay() {
      setIsAutoSaveVideoPlaying(true);
    }

  

  useEffect(() => {
    if (!isAutoSaveVideoPlaying) {
      handleVideoState();
    }
  }, [isAutoSaveVideoPlaying]);

  function handleVideoState() {
      console.log("handle function runs");
      let videos = document.querySelectorAll("video");
      for (let i = 0; i < videos.length; i++) {
        videos[i].pause();
      }
  }

  return (
    <div className="contentContainer fluidHeightContentWindow">
      <h3>Autosave: Redoubt (2018)</h3>
      <div className="artistsBox">
        <div className="artistItem">
          <h4>Andrew Luk</h4>
          <a href="https://www.andrewluk.com" target="_blank" rel="noopener noreferrer">
            www.andrewluk.com
          </a>
        </div>
        <div className="artistItem">
          <h4>Alexis Mailles</h4>
          <a href="https://www.alexismailles.com" target="_blank" rel="noopener noreferrer">
            www.alexismailles.com
          </a>
        </div>
        <div className="artistItem">
          <h4>Peter Nelson</h4>
          <a href="https://www.peteracnelson.com" target="_blank" rel="noopener noreferrer">
            www.peteracnelson.com
          </a>
        </div>
        <button id="autosaveWebsiteLinkButton" onClick={() => {window.open('https://www.peteracnelson.com/autosave-redoubt', '_blank', 'noopener,noreferrer');}}>Visit Autosave: Redoubt website</button>
      </div>

    <video id="video1" src="/AutosaveVideos/01.mp4" disablePictureInPicture={true} controls style={{width: "100%"}}></video>

      <div className="artworkDescription">
        <p style={{ fontStyle: "italic", fontSize: "12.3px", marginTop: "8px" }}>
          More videos at the bottom
        </p>
        <br />
        <p>
          Autosave: Redoubt is made to be a playable map for the computer game
          Counter-Strike: Global Offensive. It is a site-specific recreation of
          the WWII bunkers and tunnels of the Kowloon Peninsula built by the
          British during the 1930s.
          <br />
          <br /> This piece taps into the dysfunctional military architecture of
          the historical site as well as the contradictions embedded in the 3D
          computer game technology for virtual archaeology — the more realistic
          the site recreation became, the less playable it became as a computer
          game.
          <br />
          <br /> Andrew Luk is a Hong Kong artist who works across a range of
          media examining the intricacies of the human experience as well as the
          myths and histories associated with civilisation building. His work
          has been exhibited internationally including in Asia Society (Hong
          Kong), Tai Kwun Contemporary (Hong Kong), HOW Art Museum (Shanghai),
          and Kula Bazaar ACC (Gwangju).
          <br />
          <br /> Alexis Mailles produces hybrid installations that border the
          frontiers of Arte Povera and cyberpunk styles by using digital and
          analogue techniques. He has exhibited worldwide, including the M21
          Museum (Shanghai), the 18th Street Art Center (Los Angeles), the
          Digital Art Center (Taipei), and Espace C.O.N.S.O.L.E (Paris).
          <br />
          <br /> Peter Nelson is a visual artist and academic working at the
          intersection of landscape theory and computer games. Originally
          trained in painting and drawing, Nelson currently produces exhibitions
          across a number of media, from painting and drawing, to animation, 3D
          printed sculpture and interactive game-based systems. He has held
          numerous group and solo exhibitions, including projects with HanArt TZ
          Gallery (Hong Kong), The National Palace Museum (Taiwan), The Sichuan
          Fine Art Academy Museum (Chongqing) and the K11 Art Foundation (Hong
          Kong). He is an Assistant Professor at Hong Kong Baptist University.
        </p>
      </div>

      <video id="video2" src="/AutosaveVideos/02.mp4" controls style={{width: "100%"}}></video>
      <video id="video3" src="/AutosaveVideos/03.mp4" controls style={{width: "100%"}}></video>
      <video id="video4" src="/AutosaveVideos/04.mp4" controls style={{width: "100%"}}></video>

    </div>
  );
}
