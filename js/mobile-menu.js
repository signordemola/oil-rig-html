document.addEventListener("DOMContentLoaded", () => {
  const mobileOpen = document.getElementById("mobile-menu-open");
  const mobileClose = document.getElementById("mobile-menu-close");
  const mobileNav = document.getElementById("mobile-nav");
  const overlay = document.getElementById("overlay");

  mobileOpen.addEventListener("click", () => {
    overlay.style.display = "block";
    mobileNav.style.transform = "translateX(0%)";
    document.body.classList.add("mobile-open", "overflow-hidden");
  });

  mobileClose.addEventListener("click", () => {
    overlay.style.display = "none";
    mobileNav.style.transform = "translateX(110%)";
    document.body.classList.remove("mobile-open", "overflow-hidden");
  });
});
