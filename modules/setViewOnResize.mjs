export default function setViewOnResize(setView) {
    
    let width = window.innerWidth;

    if (width < 853) {
      setView('single');
    } 
    
    else if (width > 852 && width < 1280) {
      setView('double');
    }

    else {
      setView('withMenu');
    }
    

};