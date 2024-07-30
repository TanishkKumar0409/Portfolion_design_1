document.querySelectorAll(".offcanvas-menu nav ul li").forEach((li, index) => {
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

// Function to apply hover colors
function applyHoverColors(selector, colors) {
  document.querySelectorAll(selector).forEach((element, index) => {
    // Cycle through colors using modulo
    const colorIndex = (index+1) % colors.length;
    element.style.setProperty("--color-hover", `var(${colors[colorIndex]})`);
  });
}

// Colors for navigation items and social links
const hoverColors = [
  "--color-hover-1",
  "--color-hover-2",
  "--color-hover-3",
  "--color-hover-4",
  "--color-hover-5",
  "--color-hover-6",
];

applyHoverColors("#navigationbar li a", hoverColors);
applyHoverColors(".social-icons a", hoverColors);
