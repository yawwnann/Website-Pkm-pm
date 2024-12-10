document.addEventListener("DOMContentLoaded", (event) => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const sections = document.querySelectorAll("[data-section]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-x-0");
        entry.target.classList.remove("opacity-0", "translate-x-full");
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "opacity-100",
            "translate-y-0",
            "slide-in"
          );
          entry.target.classList.remove(
            "opacity-0",
            "translate-y-10",
            "translate-x-10",
            "-translate-x-10"
          );
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".transition").forEach((element) => {
    observer.observe(element);
  });

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Hamburger Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const menuLinks = document.getElementById("menu-links");
  const closeButton = document.getElementById("close-menu");

  menuToggle.addEventListener("click", function () {
    menuLinks.classList.toggle("hidden");
  });

  closeButton.addEventListener("click", function () {
    menuLinks.classList.add("hidden");
  });

  document.addEventListener("click", function (event) {
    if (
      !menuLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setTimeout(() => {
        menuLinks.classList.add("hidden");
      }, 100);
    } else if (navLinks.contains(event.target)) {
      // Jika klik di tautan menu
      menuLinks.classList.add("hidden"); // Tutup menu
    }
  });
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20 /* Mengurangi jarak antar card */,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
