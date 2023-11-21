export default function enterSite(site, language) {

    document.getElementById("wcsInnerContainer").style.opacity = 0;

    setTimeout(() => {
        site.setLanguage(language);
        site.toggleWelcomeScreen(false);
      }, 1000)

  }