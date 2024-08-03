// Apply index-based custom properties to each list item in the offcanvas menu
document.querySelectorAll(".offcanvas-menu nav ul li").forEach((li, index) => {
  li.style.setProperty("--i", index + 1);
});

// Define colors for navigation items and social links
const hoverColors = [
  "--color-hover-1",
  "--color-hover-2",
  "--color-hover-3",
  "--color-hover-4",
  "--color-hover-5",
  "--color-hover-6",
];

// Function to apply hover colors to elements
function applyHoverColors(selector, colors) {
  document.querySelectorAll(selector).forEach((element, index) => {
    // Cycle through colors using modulo
    const colorIndex = index % colors.length;
    element.style.setProperty("--color-hover", `var(${colors[colorIndex]})`);
  });
}

// Apply hover colors to navigation items and social icons
applyHoverColors("#navigationbar li a", hoverColors);
applyHoverColors(".social-icons a", hoverColors);

// Variables for scroll direction and position detection
let lastScrollTop = 0;
const navbar = document.getElementById("navigationbar");

// Combined scroll event listener for both scroll position and direction
window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Add or remove the "scrolled" class based on scroll position
  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Check scroll direction to add or remove classes for hiding/showing the navbar
  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.classList.remove("scroll-down");
    navbar.classList.add("scroll-up");
  } else {
    // Scrolling up
    navbar.classList.remove("scroll-up");
    navbar.classList.add("scroll-down");
  }

  // Prevent negative scrolling value for mobile devices
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
