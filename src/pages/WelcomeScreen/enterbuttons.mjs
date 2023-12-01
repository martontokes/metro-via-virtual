export function enterSite(site) {

    document.getElementById("wcsOuterContainer").style.opacity = 0;

    setTimeout(() => {
        site.setLanguage("english");
        site.toggleWelcomeScreen(false);
        site.setActivePage("Statement");
      }, 1000)

  }

export function enterSiteZh(site) {

    document.getElementById("wcsOuterContainer").style.opacity = 0;

    setTimeout(() => {
        site.setLanguage("chinese");
        site.toggleWelcomeScreen(false);
        site.setActivePage("StatementZh");
        setTimeout(() => {
          document.getElementById("exhibition").style.opacity = 1;
        }, 50);
      }, 1000)

  }