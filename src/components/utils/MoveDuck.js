function MoveDuck() {
  const duck = document.getElementById("duck");
  let i = 0;
  setInterval(function () {
    const location = window.location.href.split("/");
    const split = location[location.length-1];
    
    // makes sure it does screw with the hero page
    if(split === "about" || split === "portfolio" || split === "timeline" || split === "contact") {
      // allows for screen size changes and constantly updates the size accordingly
      const invis = document.getElementById("invisible"); 
      let right = invis.offsetLeft;
      if(i >= right+20) {
        duck.style.marginRight = i;
        i = -20;
      }
      else {
        duck.style.marginRight = i + "px";
        i+=1;
      }
    }
    else {
      return;
    }
  }, 30);
}

export default MoveDuck