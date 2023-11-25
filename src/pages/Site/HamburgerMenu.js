export default function HamburgerMenu({site}) {

  function toggleMenu() {

    document.getElementById("hamburgerMenu").classList.add("opacity0");

    // setTimeout(() => {    
      
      document.getElementById("hamburgerMenu").classList.remove("opacity0");
      document.getElementById("burgerImg").classList.toggle("burgerOff");
    // }, 150)

    document.getElementById("menu").classList.toggle("menuVisible");
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