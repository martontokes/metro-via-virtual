import { useEffect, useState } from "react";

export default function Loader({ itemsLoaded, setContentLoaded }) {

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [targetValue, setTargetValue] = useState(0);

  useEffect(() => {
    setTargetValue(Math.min(itemsLoaded * 10, 100));
  }, [itemsLoaded]);

  useEffect(() => {
    document.getElementById("loaderContainer").style.opacity = 1;
  }, []);

  useEffect(() => {
    if (loadingProgress == 100) {
      setContentLoaded(true);
    }
  }, [loadingProgress])

  useEffect(() => {
    const counter = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        // Increment based on the previous state
        if (prevProgress < targetValue) {
          return prevProgress + 1;
        } else {
          clearInterval(counter);// Stop the interval when target is reached
          return prevProgress;
        }
      });
    }, 10);

    return () => {clearInterval(counter); }// Cleanup the interval on component unmount or target reached
  }, [targetValue]);

  return (
    <>
      <div id="loaderContainer">
        <div id="loader"></div>
        {loadingProgress}%
      </div>
    </>
  );
}
