import { useEffect } from "react";

export default function Loader() {

  useEffect(() => {

    if (document.querySelector(".loader") != null) {
    document.getElementById("loaderContainer").style.opacity = 1;
  
    }

  }, [])

  return (

      <>
        <div id="loaderContainer">
          <div className="loader">
          </div>
        </div>
      </>
  )
}
