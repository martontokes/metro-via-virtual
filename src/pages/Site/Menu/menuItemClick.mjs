export default function menuItemClick(site, pageName) {

  site.setActivePage(pageName);
  document.getElementById("menu").classList.remove("menuVisible");
  document.getElementById("paginator").classList.remove("invisible");
  document.getElementById("burgerImg").classList.toggle("burgerOff");
}