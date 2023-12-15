const triggerLoaded = (function()

{

  let x = 0;
  console.log("function created and stored in triggerLoaded");

    return function() {

      x += 1;
      console.log("counter incremented");
      if (x == 4) {
        console.log("setting to block");
        document.querySelector(".pageWithLoader").style.opacity = 1;
        setLoaded(false);
      }

  }

})();

export default triggerLoaded;