const titleScreen = document.getElementById("title-screen");

titleScreen.addEventListener("click", () => {
  titleScreen.classList.add("fade-out");

  // Remove after fade completes
  setTimeout(() => {
    titleScreen.style.display = "none";
  }, 800);
});
