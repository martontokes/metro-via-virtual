export default function SwipeManual({displayManual, setDisplayManual}) {

  function onCloseManualPane() {
    document.getElementById("swipeManualContainer").style.display = "none";
  }

  return (

    true ? (<>
      <div id="swipeManualContainer" style={{position: "fixed", height: "64px", bottom: "0px",}}>
        <div style={{width: "100%"}}><p style={{margin: "0px", padding: "0px", fontWeight: "600", fontSize: "9px", width: "80%"}}>You may also navigate the exhibition by swiping.</p></div>
        <div onClick={onCloseManualPane} style={{position: "absolute", width: "20%", height: "100%", top: "0px", right: "0px", display: "grid", placeItems: "center"}}></div>
      </div>
      </>) : null
    
  );

}
