const nav-home-ul = document.querySelector(".nav-home-ul");
const nav-home-li = document.querySelectorAll(".nav-home-li");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (nav-home-ul.classList.contains("showMenu")) {
    nav-home-ul.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    nav-home-ul.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

nav-home-li.forEach( 
    function(nav-home-li) { 
        nav-home-li.addEventListener("click", toggleMenu);
    }
  )

hamburger.addEventListener("click", toggleMenu);