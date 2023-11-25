export default function Header({site}) {

  function toggleMenu() {

    document.getElementById("menu").classList.toggle("menuVisible");
    window.scrollTo(0, 0);
    document.getElementById("content").classList.toggle("invisible");

  }

  return (

    <>

      <button onClick={toggleMenu} id="hamburgerMenu"><img src="/burgermenu.svg"></img></button>

    </>
  );
}