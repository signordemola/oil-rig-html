document.addEventListener("DOMContentLoaded", () => {
  const industriesList = document.querySelector(".industries-list");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const cards = document.querySelectorAll(".industry-card");

  const slideStep = 200; // Fixed slide amount in pixels
  let currentPosition = 0;

  function updateButtons() {
    prevBtn.disabled = currentPosition === 0;
    nextBtn.disabled =
      currentPosition >=
      industriesList.scrollWidth - industriesList.offsetWidth;
  }

  function scrollToPosition(position) {
    industriesList.style.transform = `translateX(-${position}px)`;
    currentPosition = position;
    updateButtons();
  }

  prevBtn.addEventListener("click", () => {
    const newPosition = Math.max(0, currentPosition - slideStep);
    scrollToPosition(newPosition);
  });

  nextBtn.addEventListener("click", () => {
    const maxScroll = industriesList.scrollWidth - industriesList.offsetWidth;
    const newPosition = Math.min(maxScroll, currentPosition + slideStep);
    scrollToPosition(newPosition);
  });

  window.addEventListener("resize", () => {
    // Recalculate max scroll position on resize
    const maxScroll = industriesList.scrollWidth - industriesList.offsetWidth;

    // Ensure current position doesn't exceed new max
    if (currentPosition > maxScroll) {
      scrollToPosition(maxScroll);
    } else {
      updateButtons();
    }
  });

  updateButtons();
});
