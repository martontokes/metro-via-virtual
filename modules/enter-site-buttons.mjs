export function enterSite(site) {

    document.getElementById("welcomeOuterContainer").style.opacity = 0;
  
      setTimeout(() => {
        site.setLanguage("english");
        site.setWelcomeScreen(false);
        setTimeout(() => {
          document.getElementById("exhibition").style.opacity = 1;
        }, 50);
      }, 1000)
  
  
  
    }
  
  export function enterSiteZh(site) {
  
      document.getElementById("welcomeOuterContainer").style.opacity = 0;
  
      setTimeout(() => {
          site.setLanguage("chinese");
          site.setWelcomeScreen(false);
          setTimeout(() => {
            document.getElementById("exhibition").style.opacity = 1;
          }, 50);
        }, 1000)
  
    }