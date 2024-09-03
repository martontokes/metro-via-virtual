import { useEffect } from "react";
import ReactPlayer from "react-player"

export default function Domestik({incrementLoad}) {



  return (

    <>

       <div className="contentContainer fluidHeightContentWindow">
        <h3>Domestik / Publik (2020)</h3>
        <div className="artistsBox">
          <h4>Riar Rizaldi</h4>
          <a href="https://www.riarrizaldi.com" target="_blank">www.riarrizaldi.com</a>
        </div>
     
        <p>Domestik/Publik reflects the notions of sound and spatial knowledge as conceived by Indonesian domestic migrant workers in Hong Kong.<br /><br />The first part of the piece focuses on a ‘public ear’ while the second half is an investigation into a ‘domestic ear.’<br /><br />A soundscape of Sunday at Victoria Park, the weekly women’s rights speech, public radio-karaoke, the soundtrack for Jaranan dance and a composed noise of domestic utensils are presented in this sonic-narrative that mimics the aesthetic of radio play.
        <br /><br />Riar Rizaldi works as an artist and amateur researcher. <br /><br />He was born in Indonesia and currently based in Hong Kong. <br /><br />His main focus is on the relationship between capital and technology, extractivism, and theoretical fiction.<br /><br />Through his works, he questions the notions of image politics, materiality, media archaeology and unanticipated consequences of technologies.<br /><br />His works have been shown at Locarno Film Festival, BFI Southbank London, International Film Festival Rotterdam, NTT InterCommunication Center Tokyo, and National Gallery of Indonesia amongst others.
        <br /><br />Domestik/Publik is part of Riar Rizaldi’s project The Right to Do Nothing. 
        <br /><br />For more info about the idea: <br /><span><a href="https://www.ctm-festival.de/festival-2021/open-calls/ctm-radio-lab-2021">https://www.ctm-festival.de/festival-2021/open-calls/ctm-radio-lab-2021</a></span></p>
        <ReactPlayer 
        width="100%"
        style={{maxHeight: "160px", margin: "24px 0px"}}
        url="https://soundcloud.com/m-rton-t-k-s-1/riar-rizaldi-domestikpublik-1"
      />
      </div>

    </>
  
  )

}