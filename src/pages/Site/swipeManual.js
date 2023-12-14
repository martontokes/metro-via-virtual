export default function SwipeManual({displayManual, setDisplayManual}) {

  function onCloseManualPane() {
    document.getElementById("swipeManualContainer").style.bottom = "-150px";

      // setDisplayManual(false);

    
    
  }

  return (

    displayManual ? (<>
      <div id="swipeManualContainer">
        <div style={{width: "80%"}}><p style={{fontWeight: "600", fontSize: "12px"}}>You may proceed through the exhibition by swiping.</p></div>
        <div onClick={onCloseManualPane} style={{position: "absolute", width: "20%", height: "100%", top: "0px", right: "0px", display: "grid", placeItems: "center"}}><img src="/X.svg" style={{height: "30px", position: "absolute", right: "24px"}}></img></div>
      </div>
      </>) : null
    
  );

}
