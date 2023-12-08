document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".box-title").forEach((title) => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";

      // Passt die Größe der Box dynamisch an
      const box = title.parentElement;
      if (content.style.display === "block") {
        box.style.width = "auto";
        box.style.height = "auto";
      } else {
        box.style.width = "fit-content";
        box.style.height = "fit-content";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const screenHeight = window.innerHeight;
    const secondScreenBottom = document
      .querySelector(".secondscreen")
      .getBoundingClientRect().bottom;

    if (secondScreenBottom < screenHeight) {
      document
        .querySelectorAll(".Anwendungsbereich, .Klang")
        .forEach((section) => {
          section.classList.remove("hidden");
        });
    }
  });
});

// Beam me up
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Für Safari
  document.documentElement.scrollTop = 0; // Für alle anderen Browser
}
