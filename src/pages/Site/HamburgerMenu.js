export default function HamburgerMenu({site}) {

  let isMenuOn = false;

  function toggleMenu() {

    document.getElementById("menu").classList.toggle("menuVisible");
    document.getElementById("menu").classList.toggle("opacity1");
    window.scrollTo(0, 0);

    if (!isMenuOn) {
      document.getElementsByClassName("swiper")[0].style.display = "none";
      isMenuOn = true;
      } else if (isMenuOn) {
      isMenuOn = false;
      document.getElementsByClassName("swiper")[0].style.display = "block";      
      }
  }


    return (

    <>
      <button onClick={toggleMenu} id="hamburgerMenu"><img id="burgerImg" src="/hamburgerMenu.svg"></img></button>
    </>

  );

}