import { useEffect, useState } from "react";

export default function Illumination() {

    useEffect(() => {
        
    // Start slideshow on mounting
    const intervalId = setInterval(illuminationSlideshow, 1000);
    return () => clearInterval(intervalId);

    }, []);

    return (

        <>
        
            <div id="placeholder3" className="placeholder"></div>
            <div id="artwork_page">
                <h3>Illumination (2021)</h3>
                <div className="artistsBox">
                    <h4>Kat Suryna</h4>
                    <a href="https://www.katsuryna.com" target="_blank">www.katsuryna.com</a>
                </div>
            <div id="buddhacontainer">
                <img className="buddha" id="buddha1" src="/1.png" ></img>
                <img className="buddha" id="buddha2" src="/2.png" ></img>
                <img className="buddha" id="buddha3" src="/3.png" ></img>
                <img className="buddha" id="buddha4" src="/4.png" ></img>
                <img className="buddha" id="buddha5" src="/5.png" ></img>
            </div>
            <p>Illumination presents the transformation of Buddha’s face in five steps. Through the nuanced changes of light and colors, the Buddha’s varied looks reflect the different spiritual spaces that Suryna has experienced through living in Hong Kong.</p>
            <br />    
            <p> Lit by warm natural light, the benign face of Buddha is the image Hong Kong aims to achieve via the many Buddha statues in the city. In contrast, inspired by the faces of people on the streets as they stare in concentration at their phones, the demonic look of Buddha lit by cold screen light mirrors an unflattering persona we often encounter/perform online through anonymous identity. The animation is made in collaboration with Sandu Cojocari.
            <br /><br />Kat Suryna is an international figurative artist with a background in academic philosophy. She follows the tradition of Russian academic drawing and painting, in which she was formally instructed. Her work has been exhibited in Estonia, Hungary, Austria, and Hong Kong. Her art focuses on the human body, organic patterns in nature, and architectural narratives.</p>
            </div>
        </>
    )
}         




const illuminationSlideshow = (function () {

        let counter = 2;
        let isCountingUpwards = true;

        return function () {

        const currentBuddhaElement = document.getElementById(`buddha${counter}`);

            if (isCountingUpwards) {

                currentBuddhaElement.style.opacity = 1;
                counter += 1;

                if (counter == 6) {
                    isCountingUpwards = false;
                    counter = 5;
                }

            } 
            
            else {

                currentBuddhaElement.style.opacity = 0;
                counter -= 1;
                if (counter == 1) {
                    isCountingUpwards = true;
                    counter = 2;
                }
            }

        }
    })
();

