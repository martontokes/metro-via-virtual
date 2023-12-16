export default function SwipeManual({displayManual, setDisplayManual}) {

  function onCloseManualPane() {
    document.getElementById("swipeManualContainer").style.display = "none";

      // setDisplayManual(false);

    
    
  }

  return (

    displayManual ? (<>
      <div id="swipeManualContainer" style={{position: "fixed", height: "64px", bottom: "64px",}}>
        <div style={{width: "100%"}}><p style={{margin: "0px", padding: "0px", fontWeight: "600", fontSize: "9px", width: "80%"}}>Welcome to Metro Via Virtual.<br />The exhibition consists of eight pages.<br />You may scroll down each page, and swipe, or use the bottom navigation buttons to navigate the exhibition.</p></div>
        <div onClick={onCloseManualPane} style={{position: "absolute", width: "20%", height: "100%", top: "0px", right: "0px", display: "grid", placeItems: "center"}}><img src="/X.svg" style={{height: "26px", position: "absolute", right: "24px",}}></img></div>
      </div>
      </>) : null
    
  );

}
