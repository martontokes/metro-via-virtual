import { useEffect, useState } from "react";

export default function Illumination() {

    useEffect(() => {
        
        const intervalId = setInterval(buddhachanger, 4200);

        // Clear the interval when the component unmounts or when you don't need it anymore
        return () => clearInterval(intervalId);

    }, []);

    return (

        <>
        <div id="content_">
        <IlluminationDescription />
        <IlluminationContent />
        </div>
        </>

    )
}         

function IlluminationDescription() {
    
    return (
        <>
<div id="description">
          <h3>Illumination (2021)</h3>
          <h4>Kat Suryna</h4>
          <a href="https://www.katsuryna.com" target="_blank">www.katsuryna.com</a>
          <p>Illumination presents the transformation of Buddha’s face in five steps. Through the nuanced changes of light and colors, the Buddha’s varied looks reflect the different spiritual spaces that Suryna has experienced through living in Hong Kong. Lit by warm natural light, the benign face of Buddha is the image Hong Kong aims to achieve via the many Buddha statues in the city. In contrast, inspired by the faces of people on the streets as they stare in concentration at their phones, the demonic look of Buddha lit by cold screen light mirrors an unflattering persona we often encounter/perform online through anonymous identity. The animation is made in collaboration with Sandu Cojocari.
    Kat Suryna is an international figurative artist with a background in academic philosophy. She follows the tradition of Russian academic drawing and painting, in which she was formally instructed. Her work has been exhibited in Estonia, Hungary, Austria, and Hong Kong. Her art focuses on the human body, organic patterns in nature, and architectural narratives.</p>
        </div>

          </>
    )

}

function IlluminationContent() {

    if (imagesLoaded === undefined) {
        var imagesLoaded = 0;
        }
      
        function displayImagesOnLoad() {
            imagesLoaded += 1;
            if (imagesLoaded == 5) {
                setTimeout(() => {
                    document.getElementById("autosaveLoader").style.opacity = 0;
                    setTimeout(() => {
                        document.getElementById("buddhacontainer").style.display = 'block';
                        document.getElementById("buddhacontainer").style.opacity = 1;
                    }, 1000);
                    
                }, 2000);

            }
        }
    
    return (

        <>
            <div id="loaderContainer">
            <div id="autosaveLoader"></div>
            </div>
            <div id="buddhacontainer">
            <img className="buddha" id="buddha1" src="/1.png" onLoad={displayImagesOnLoad}></img>
            <img className="buddha" id="buddha2" src="/2.png" onLoad={displayImagesOnLoad}></img>
            <img className="buddha" id="buddha3" src="/3.png" onLoad={displayImagesOnLoad}></img>
            <img className="buddha" id="buddha4" src="/4.png" onLoad={displayImagesOnLoad}></img>
            <img className="buddha" id="buddha5" src="/5.png" onLoad={displayImagesOnLoad}></img>
            </div>
        </>
    )
}

const buddhachanger = (function () {

        let counter = 2;
        let isCountingUpwards = true;

        return function () {
            const currentBuddhaElement = document.getElementById(`buddha${counter}`);

        if (isCountingUpwards) {
            currentBuddhaElement.style.opacity = 1;
            console.log(`buddha${counter} opacity to 1`);
            counter += 1;
            console.log(`counter is now ${counter}`);
            if (counter == 6) {
                isCountingUpwards = false;
                counter = 5;
            }

        } else {
            currentBuddhaElement.style.opacity = 0;
            console.log(`buddha${counter} opacity to 0`);
            counter -= 1;
            console.log(`counter is now ${counter}`);
            
            if (counter == 1) {
                isCountingUpwards = true;
                counter = 2;
            }
        }





        }
    })
();

