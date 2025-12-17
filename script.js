
    // === TITLE SCREEN CODE ===
    const titleScreen = document.getElementById("title-screen");

    titleScreen.addEventListener("click", () => {
      titleScreen.style.transition = "opacity 0.8s ease";
      titleScreen.style.opacity = 0;

      setTimeout(() => {
        titleScreen.style.display = "none";
      }, 800);
    });

    // === POPUP CODE ===
    const openBtn = document.getElementById('openPopup');
    const closeBtn = document.getElementById('closePopup');
    const popup = document.getElementById('popup');

    // Open popup
    openBtn.addEventListener('click', () => {
      popup.style.display = 'flex';  // IMPORTANT: use 'flex' since CSS uses flexbox centering
    });

    // Close popup
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    // Close by clicking outside the box
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
