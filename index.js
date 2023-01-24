const mobileNavToggle = document.querySelector(".portfolio__nav-link-toggle-square");

mobileNavToggle.addEventListener("click", (e) => {
  const container = document.querySelector(".portfolio__nav-links--flex");
  const classListLength = Array.from(container.classList).filter((classNames) => classNames === "stacked" || classNames === "hidden").length;
  const portfolioHeader = document.querySelector(".portfolio__header");

  if (classListLength === 2) {
    container.classList.remove("hidden");
    container.classList.remove("stacked");
    portfolioHeader.classList.remove("portfolio__header--enlarged");
  } else {
    container.classList.add("hidden");
    container.classList.add("stacked");
    portfolioHeader.classList.add("portfolio__header--enlarged");
  }
});
