export default function HamburgerMenu({site}) {

  function toggleMenu() {

    document.getElementById("menu").classList.toggle("menuVisible");
    document.getElementById("menu").classList.toggle("opacity1");
    window.scrollTo(0, 0);
    document.getElementById("content").classList.toggle("invisible");
    document.getElementById("paginator").classList.toggle("invisible");

  }

  return (

    <>

      <button onClick={toggleMenu} id="hamburgerMenu"><img id="burgerImg" src="/hamburgerMenu.svg"></img></button>

    </>
  );
}