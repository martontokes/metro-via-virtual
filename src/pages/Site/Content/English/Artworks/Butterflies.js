import { useState, useEffect } from "react"

export default function Butterflies() {

    const [isFullscreen, setFullscreen] = useState(false);
    const butterfliesFrame = (<iframe id="butterfliesFrame" frameBorder="no" onLoad={displayVideo} src="/english/butterflies_en.htm"></iframe>);

    const toFullscreen = () => {

      setFullscreen(true);
      document.getElementById("butterfliesExperience").style.pointerEvents = "initial";
      document.getElementById("butterfliesExperience").style.opacity = 1;

    }

    function displayVideo() {

      document.getElementById("butterfliesFrame").style.opacity = 1;
      document.getElementById("manual").style.opacity = 1;
      setTimeout(() => { document.getElementById("manual").style.opacity = 0; }, 12000);
    
    }

    function closeFullscreen() {
      document.getElementById("butterfliesExperience").style.opacity = 0;
      setTimeout(() => { document.getElementById("butterfliesExperience").style.display = "none" }, 2000);
    }
  
    return (
      
      <>
          <div id="description">

            <h3>Butterflies on the Wheel (2020)</h3>
            <div className="artistsBox">
            <h4>Elaine Wong</h4>
            <a href="https://www.miss-wong.com" target="_blank">www.miss-wong.com</a>
            </div>
            <p>Butterflies on the Wheel hails from a cruel imagery – the butterflies flew into a blender and broke their wings. The artwork aims to experiment with videography regarding different forms of presentation through interaction with space. Wong videotaped the cityscape of Hong Kong, and shattered the moving images into broken-down frames. She then projected the images onto her own living room wall. The polygonal and limited space generated multiple reflections, resulting in the fragmentalization of images. It seems to critique the fractured conditions of life caused by the deteriorating spatial capitalization in the city, or perhaps contemplates the relationship between women and the imagery of claustrophobia that Wong has also explored.
            Elaine Wong explores and unveils the manifolds of daily encounters and inner conditions. She regards her practice as an investigation of the potentials of art beyond representation, its relation to sensation, documentation and experience. Her works have been shown internationally, 107 Projects (Australia), the Hong Kong Heritage Museum, Oi! Street Art Space (Hong Kong), EXIS Korea, and Poland Szczecin European Film Festival.</p>
            <button style={{width: "50px", height: "50px"}} onClick={toFullscreen}></button>
            <div id="butterfliesExperience">
            <button onClick={closeFullscreen}></button>
            <p id="manual" style={{textAlign: "center"}}>Click and drag the image to look around Wong's living room. <br />You may move closer to objects by scrolling.</p>
            { isFullscreen ? butterfliesFrame : <></>  }         
          </div>
        </div>
     </>
    )

}

