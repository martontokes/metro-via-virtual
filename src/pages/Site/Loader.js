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
          <div id="welcomeText">
          <p>The exhibition is loading.<br/>Upon entering, you may navigate the exhibition by swiping, or by using the top navigation buttons.</p>
          </div>
          <div className="loader">
          </div>
        </div>
      </>
  )
}
