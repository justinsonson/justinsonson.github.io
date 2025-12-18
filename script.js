const titleScreen = document.getElementById("title-screen");
    titleScreen.addEventListener("click", () => {
      titleScreen.style.transition = "opacity 0.8s ease";
      titleScreen.style.opacity = 0;

      setTimeout(() => {
        titleScreen.style.display = "none";
      }, 800);
    });

