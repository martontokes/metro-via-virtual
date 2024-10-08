import { useState, useEffect } from "react"

export default function Butterflies({}) {

  const handleClick = () => {
    window.open('/butterflies/index.htm', '_blank');
  }

    return (
      
      <>

<div className="contentContainer fluidHeightContentWindow">
            <h3>Butterflies on the Wheel (2020)</h3>
            <div className="artistsBox">
              <h4>Elaine Wong</h4>
              <a href="https://www.miss-wong.com" target="_blank">www.miss-wong.com</a>
             
            </div>

                       
            <p>Butterflies on the Wheel hails from a cruel imagery – the butterflies flew into a blender and broke their wings.<br /><br />The artwork aims to experiment with videography regarding different forms of presentation through interaction with space.<br /><br />Wong videotaped the cityscape of Hong Kong, and shattered the moving images into broken-down frames.<br /><br />She then projected the images onto her own living room wall. The polygonal and limited space generated multiple reflections, resulting in the fragmentalization of images.<br /><br />It seems to critique the fractured conditions of life caused by the deteriorating spatial capitalization in the city, or perhaps contemplates the relationship between women and the imagery of claustrophobia that Wong has also explored.
            Elaine Wong explores and unveils the manifolds of daily encounters and inner conditions.<br /><br />She regards her practice as an investigation of the potentials of art beyond representation, its relation to sensation, documentation and experience. Her works have been shown internationally, 107 Projects (Australia), the Hong Kong Heritage Museum, Oi! Street Art Space (Hong Kong), EXIS Korea, and Poland Szczecin European Film Festival.</p>
            <button id="butterfliesVisitButton" onClick={handleClick}>Visit 360° Artwork</button>
          </div>
     </>

    )

}