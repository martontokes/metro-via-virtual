export default function menuItemClick(site, pageName) {

  site.setActivePage(pageName);
  document.getElementById("menu").classList.remove("menuVisible");
  document.getElementById("content").classList.remove("invisible");

}