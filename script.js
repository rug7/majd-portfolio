const header = document.querySelector(".site-header");

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();
