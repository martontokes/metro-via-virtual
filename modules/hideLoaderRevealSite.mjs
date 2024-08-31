export default function hideLoaderRevealSite() {

  document.getElementById("loaderContainer").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("loaderContainer").remove();
    document.getElementById("exhibition").style.opacity = 1;
  }, 1000);

}