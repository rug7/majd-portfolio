const header = document.querySelector(".site-header");
const revealTargets = document.querySelectorAll(
  ".section, .impact-strip article, .timeline-item, .project-card, .skills-grid article, .credential-grid article"
);

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  revealTargets.forEach((target) => target.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -60px" }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
}
