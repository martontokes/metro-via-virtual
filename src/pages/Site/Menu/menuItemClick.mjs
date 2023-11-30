export default function menuItemClick(site, pageName) {

  // const activePageToId = {
  //   Statement: 1,
  //   Essay: 2,
  //   Curator: 3,
  //   Autosave: 4,
  //   Confidential: 5,
  //   Illumination: 6,
  //   Butterflies: 7,
  //   Domestik: 8,
  //   StatementZh: 1,
  //   AutosaveZh: 4,
  //   ConfidentialZh: 5,
  //   IlluminationZh: 6,
  //   ButterfliesZh: 7,
  //   DomestikZh: 8,
    
  // };

  site.setActivePage(pageName);
  document.getElementById("menu").classList.remove("menuVisible");
  document.getElementById("burgerImg").classList.toggle("burgerOff");
}