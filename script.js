
// Navbar Toggle for Mobile
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

// Automatically close mobile menu after clicking a link (optional but useful)
document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", function () {
    const navbar = document.getElementById("navbar");
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  });
});

// Gallery Lightbox
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", function () {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = this.src;
  });
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "none";
});

// Optional: Initialize AOS animations (if you're using AOS library)
AOS.init();
