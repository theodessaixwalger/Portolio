document.addEventListener("DOMContentLoaded", function () {
        const menuBtn = document.querySelector(".menu-btn");
        const navMenu = document.querySelector(".nav-menu");
        const navItems = document.querySelectorAll(".nav-item");
        let menuOpen = false;

        function toggleMenu() {
          if (!menuOpen) {
            menuBtn.classList.add("open");
            navMenu.classList.add("active");
            document.body.style.overflow = "hidden";
            menuOpen = true;
          } else {
            menuBtn.classList.remove("open");
            navMenu.classList.remove("active");
            document.body.style.overflow = "";
            menuOpen = false;
          }
        }

        menuBtn.addEventListener("click", toggleMenu);

        navItems.forEach((item) => {
          item.addEventListener("click", function () {
            if (menuOpen) {
              toggleMenu();
            }
          });
        });

        window.addEventListener("resize", function () {
          if (window.innerWidth > 768 && menuOpen) {
            toggleMenu();
          }
        });

        const typingTextElement = document.querySelector(".typing-text span");
      });

      document.addEventListener("DOMContentLoaded", function () {
        const observerOptions = {
          rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("animate-in");

                const levelFill = entry.target.querySelector(".level-fill");
                if (levelFill) {
                  levelFill.classList.add("animate-level");
                }
              }, index * 100);
            }
          });
        }, observerOptions);

        const skillCards = document.querySelectorAll(".skill-card");
        skillCards.forEach((card) => {
          observer.observe(card);
        });
      });