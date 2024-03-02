export default function updateMenu(site) {

    const menubuttons = document.querySelectorAll(".menubutton");
    for (let i = 0; i < menubuttons.length; i++) {
      menubuttons[i].classList.remove("activeButton");
    }
   menubuttons[site.exhibition.activeIndex].classList.add("activeButton");
  
}