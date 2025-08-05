
// Navbar Toggle for Mobile
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

// Close navbar on link click (optional)
document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("navbar").classList.remove("active");
  });
});

// Lightbox for gallery (if any)
document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", function () {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = this.src;
  });
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "none";
});

// AOS animation init (if used)
AOS.init();
