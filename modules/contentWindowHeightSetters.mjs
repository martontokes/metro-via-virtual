export function setContentWindowSize() {

  if (document.getElementById("mainMenu") != null) {

  let contentWindow = document.querySelector(".fluidHeightContentWindow");
  let contentWindowComputedStyle = window.getComputedStyle(contentWindow);
  let contentWindowMargins = parseFloat(contentWindowComputedStyle.marginTop) + parseFloat(contentWindowComputedStyle.marginBottom);
  let upperMenu = document.getElementById("mainMenu");
  let lowerMenu = document.getElementById("artworksMenu");
  let elementToFetchFluidSize = document.getElementById("placeHolderToFetch100dvhInPixels");
  let upperMenuRect = upperMenu.getBoundingClientRect();
  let lowerMenuRect = lowerMenu.getBoundingClientRect();
  let upperMenuStyle = window.getComputedStyle(upperMenu);
  let lowerMenuStyle = window.getComputedStyle(lowerMenu);
  let upperMenuHeightTotal = upperMenuRect.height + (parseFloat(upperMenuStyle.marginTop) + parseFloat(upperMenuStyle.marginBottom));
  let lowerMenuHeightTotal = lowerMenuRect.height + (parseFloat(lowerMenuStyle.marginTop) + parseFloat(lowerMenuStyle.marginBottom));
  let fluidHeight = elementToFetchFluidSize.getBoundingClientRect();
  document.documentElement.style.setProperty('--fluidHeightContentWindowHeight', `${fluidHeight.height - (upperMenuHeightTotal + lowerMenuHeightTotal + contentWindowMargins)}px`);

  }

}

export function setContentWindowSizeOnMobile() {

  if (document.getElementById("mainMenu") != null) {

  let contentWindow = document.querySelector(".fluidHeightContentWindow");
  let contentWindowComputedStyle = window.getComputedStyle(contentWindow);
  let contentWindowMargins = parseFloat(contentWindowComputedStyle.marginTop) + parseFloat(contentWindowComputedStyle.marginBottom);
  let upperMenu = document.getElementById("mainMenu");
  let elementToFetchFluidSize = document.getElementById("placeHolderToFetch100dvhInPixels");
  let upperMenuRect = upperMenu.getBoundingClientRect();
  let upperMenuStyle = window.getComputedStyle(upperMenu);
  let upperMenuHeightTotal = upperMenuRect.height + (parseFloat(upperMenuStyle.marginTop) + parseFloat(upperMenuStyle.marginBottom));
  let fluidHeight = elementToFetchFluidSize.getBoundingClientRect();
  document.documentElement.style.setProperty('--fluidHeightContentWindowHeight', `${fluidHeight.height - (upperMenuHeightTotal + contentWindowMargins)}px`);

  }

}