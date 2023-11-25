export default function Header({site}) {

  function toggleMenu() {

    document.getElementById("menu").classList.toggle("menuVisible");

  }

  return (

    <>

      <button onClick={toggleMenu} id="burgerMenu"><img src="/burgermenu.svg"></img></button>

    </>
  );
}