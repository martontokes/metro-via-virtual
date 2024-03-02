import { useEffect, useState } from "react";

export default function Loader({ itemsLoaded, setContentLoaded }) {

  const [loadingProgressToDisplay, setloadingProgressToDisplay] = useState(0);
  const [targetValue, setTargetValue] = useState(0);

  useEffect(() => {
    setTargetValue(100 / itemsLoaded * 10);
  }, [itemsLoaded]);

  useEffect(() => {
    document.getElementById("loaderContainer").style.opacity = 1;
  }, []);

  useEffect(() => {
    if (loadingProgressToDisplay == 100) {
      setContentLoaded(true);
    }
  }, [loadingProgressToDisplay])

  useEffect(() => {
    const counter = setInterval(() => {
      setloadingProgressToDisplay((prevProgress) => {
        if (prevProgress < targetValue) {
          return prevProgress + 1;
        } else {
          clearInterval(counter);
          return prevProgress;
        }
      });
    }, 10);

    return () => {clearInterval(counter);}
  }, [targetValue]);

  return (
    <>
      <div id="loaderContainer">
        <div id="loader"></div>
        {loadingProgressToDisplay}%
      </div>
    </>
  );
}
