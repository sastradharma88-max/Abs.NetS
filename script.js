function makeResponsive() {
  let width = window.innerWidth;

  // HOME IMAGE
  let homeImg = document.querySelector(".home-img img");
  if (homeImg) {
    if (width <= 768) {
      homeImg.style.width = "50vw"; // HP
    } else {
      homeImg.style.width = "24vw"; // Laptop
    }
  }

  // TESTIMONIAL GRID
  let wrapper = document.querySelector(".wrapper");
  if (wrapper) {
    if (width <= 768) {
      wrapper.style.display = "grid";
      wrapper.style.gridTemplateColumns = "1fr"; // 1 kolom di HP
      wrapper.style.rowGap = "2rem";
    } else if (width <= 1024) {
      wrapper.style.display = "grid";
      wrapper.style.gridTemplateColumns = "1fr 1fr"; // tablet
      wrapper.style.gap = "3rem";
    } else {
      wrapper.style.display = "grid";
      wrapper.style.gridTemplateColumns = "repeat(3, 1fr)"; // laptop
      wrapper.style.gap = "6rem";
    }
  }

  // SERVICES BOX
  let serviceBoxes = document.querySelectorAll(".services-box");
  serviceBoxes.forEach(box => {
    if (width <= 768) {
      box.style.width = "100%";
      box.style.margin = "0 auto";
    } else {
      box.style.width = "";
      box.style.margin = "";
    }
  });

  // FONT SIZE (contoh)
  let headings = document.querySelectorAll("h1, h2, h3");
  headings.forEach(h => {
    if (width <= 480) {
      h.style.fontSize = "2rem";
    } else if (width <= 768) {
      h.style.fontSize = "2.5rem";
    } else {
      h.style.fontSize = "";
    }
  });
}

// Panggil pertama kali
makeResponsive();

// Update setiap resize
window.addEventListener("resize", makeResponsive);
