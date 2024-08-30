import React, { useEffect, useState } from "react"

import Menu from "components/Menu"
import Header from "components/Header"
import MobileContent from "components/MobileContent"
import WelcomeScreen from "components/WelcomeScreen"
import Loader from "/src/components/Loader";

import { isMobile } from "react-device-detect"

export default function App() {

  const [isWelcomeScreenOn, setWelcomeScreen] = useState(true);
  const [itemsLoaded, incrementLoad] = useState(4);
  const [contentLoaded, setContentLoaded] = useState(false);
  
  const [language, setLanguage] = useState('');

  const [exhibition, setExhibition] = useState('');
  const [artworks, setArtworks] = useState('');
  
  const [isArtworksMenuOn, setArtworksMenuOn] = useState(false);

  const site = { language, setLanguage, exhibition, setExhibition, artworks, setArtworks, setWelcomeScreen };

  useEffect(() => {

    if (contentLoaded) {
      hideLoaderRevealSite();
    }
  }, [contentLoaded]);

  useEffect(() => {
    window.addEventListener('resize', setContentWindowSize)
  }, [])

/* mod to commit */

    return (

      <>

        { isWelcomeScreenOn ? <WelcomeScreen site={site} /> :

        <>
        <Loader setContentLoaded={setContentLoaded} itemsLoaded={itemsLoaded}/>

        <div id="exhibition">
        <Menu site={site} isArtworksMenuOn={isArtworksMenuOn}  />
        <MobileContent site={site} incrementLoad={incrementLoad} setArtworksMenuOn={setArtworksMenuOn}/>
        <div id="placeHolderToFetch100dvhInPixels"></div>       
        </div>
        </>
        
        } 
        
      </>

    )

}




function hideLoaderRevealSite() {

  document.getElementById("loaderContainer").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("loaderContainer").remove();
    document.getElementById("exhibition").style.opacity = 1;
  }, 1000);

}

function setContentWindowSize() {

  let pixelsToSubtract;
  let upperMenu = document.getElementById("mainMenu");
  let lowerMenu = document.getElementById("artworksMenu");
  let elementToFetchFluidSize = document.getElementById("placeHolderToFetch100dvhInPixels");
  let upperMenuRect = upperMenu.getBoundingClientRect();
  let lowerMenuRect = lowerMenu.getBoundingClientRect();
  let upperMenuStyle = window.getComputedStyle(upperMenu);
  let lowerMenuStyle = window.getComputedStyle(lowerMenu);
  let upperMenuHeightTotal = upperMenuRect.height + (parseFloat(upperMenuStyle.marginTop) + parseFloat(upperMenuStyle.marginBottom));
  let lowerMenuHeightTotal = lowerMenuRect.height + (parseFloat(lowerMenuStyle.marginTop) + parseFloat(lowerMenuStyle.marginBottom));
  let fluidHeight = elementToFetchFluidSize.getBoundingClientRect();
  
  console.log(fluidHeight.height);
  console.log(upperMenuHeightTotal);
  console.log(lowerMenuHeightTotal);
  
  document.documentElement.style.setProperty('--fluidHeightContentWindowHeight', `${fluidHeight.height - (upperMenuHeightTotal + lowerMenuHeightTotal)}px`);
  console.log(document.documentElement.style.getPropertyValue('--fluidHeightContentWindowHeight'));
}

  // if (document.querySelectorAll(".fluidHeightContentWindow") != null) {

  //   for (let i = 0; i < document.querySelectorAll(".fluidHeightContentWindow").length; i++) {

  //     if (!isMobile) {
  //     let computedStyleOfElementToResize = window.getComputedStyle(document.querySelectorAll(".fluidHeightContentWindow")[i]);
  //     console.log("top margin:" + parseInt(computedStyleOfElementToResize.marginTop));
  //     console.log("window inner:" + window.innerHeight);
  //     console.log("result: " + (window.innerHeight - parseInt(computedStyleOfElementToResize.marginTop)) + "px");
  //     document.querySelectorAll(".fluidHeightContentWindow")[i].style.height = (window.innerHeight - parseInt(computedStyleOfElementToResize.marginTop)) + "px";

  //     }
  //   }
  // }