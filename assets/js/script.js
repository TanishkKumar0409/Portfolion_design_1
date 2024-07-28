document
.querySelectorAll(".offcanvas-menu nav ul li")
.forEach((li, index) => {
  li.style.setProperty("--i", index + 1);
});

window.addEventListener("scroll", function () {
   var navigationbar = document.getElementById("navigationbar");
   if (window.scrollY > 50) {
     navigationbar.classList.add("scrolled");
   } else {
     navigationbar.classList.remove("scrolled");
   }
 });