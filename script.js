function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", function () {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = this.src;
  });
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "none";
});
