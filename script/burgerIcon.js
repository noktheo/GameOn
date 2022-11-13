
// event text

function editNav() {
    var x = document.getElementById("eventNavMobil");
  
    if (x.className === "navOff") {
      x.className += " navOn";
    } else {
      x.className = "navOff";
    }
  }


// anim
(function () {

    const burgerButton = document.getElementById("burgerButton");
  
    burgerButton.addEventListener("click", function () {
        burgerButton.classList.toggle("open");
    })
  
})();