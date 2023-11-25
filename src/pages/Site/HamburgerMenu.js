export default function Header({site}) {

  function toggleMenu() {

    document.getElementById("menu").classList.toggle("menuVisible");
    window.scrollTo(0, 0);
    document.getElementById("content").classList.toggle("invisible");
    document.getElementById("burgerImg").classList.toggle("burgerOff");

  }

  return (

    <>

      <button onClick={toggleMenu} id="hamburgerMenu"><img id="burgerImg" src="/burgermenu.svg"></img></button>

    </>
  );
}