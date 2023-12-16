export default function SwipeManual({displayManual, setDisplayManual}) {

  function onCloseManualPane() {
    document.getElementById("swipeManualContainer").style.display = "none";

      // setDisplayManual(false);

    
    
  }

  return (

    displayManual ? (<>
      <div id="swipeManualContainer" style={{border: "solid 1px white", borderRadius: "10px"}}>
        <div style={{width: "100%"}}><p style={{margin: "0px", padding: "0px", fontWeight: "600", fontSize: "11.2355555556px", width: "80%"}}>You may proceed through the exhibition by swiping, or by tapping the arrow buttons at the bottom of the screen.</p></div>
        <div onClick={onCloseManualPane} style={{position: "absolute", width: "20%", height: "100%", top: "0px", right: "0px", display: "grid", placeItems: "center"}}><img src="/X.svg" style={{height: "26px", position: "absolute", right: "24px",}}></img></div>
      </div>
      </>) : null
    
  );

}
