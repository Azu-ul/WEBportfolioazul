    function initNav() {
      const toggle = document.querySelector(".nav-toggle");
      const menu = document.getElementById("nav-menu");
      const backdrop = document.getElementById("nav-backdrop");
      const closeBtn = document.getElementById("nav-menu-close");

      function closeMenu() {
        menu.classList.remove("is-open");
        backdrop.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      }

      toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        backdrop.classList.toggle("is-open", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("nav-open", isOpen);
      });

      backdrop.addEventListener("click", closeMenu);
      closeBtn.addEventListener("click", closeMenu);

      menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menu.classList.contains("is-open")) {
          closeMenu();
          toggle.focus();
        }
      });
    }

    function initImageModal() {
      const modal = document.getElementById("img-modal");
      const modalImg = document.getElementById("img-modal-img");
      const closeBtn = document.getElementById("img-modal-close");
      const triggers = document.querySelectorAll(".project-visual img");

      function openModal(img) {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        closeBtn.focus();
      }

      function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        modalImg.src = "";
      }

      triggers.forEach((img) => {
        img.setAttribute("role", "button");
        img.setAttribute("tabindex", "0");
        img.addEventListener("click", () => openModal(img));
        img.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(img);
          }
        });
      });

      closeBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
      });
    }

    document.addEventListener("DOMContentLoaded", () => {
      initNav();
      initImageModal();
      document.getElementById("year").textContent = new Date().getFullYear();
    });