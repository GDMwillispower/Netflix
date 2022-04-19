/* NAVBAR CHANGE COLOR ON SCROLL */
function changeBg() {
  let navbar = document.getElementById("navbar-container");
  let scrollValue = window.scrollY;
  if (scrollValue < 100) {
    console.log(scrollValue);
    navbar.classList.remove("navbar-color");
  } else {
    navbar.classList.add("navbar-color");
  }
}

window.addEventListener("scroll", changeBg);
