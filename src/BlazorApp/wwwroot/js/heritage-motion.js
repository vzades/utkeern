(() => {
  document.documentElement.classList.add("js");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealSelector = [
    "section.content > div",
    ".featured-item",
    ".project-case-study",
    ".article-card",
    ".card",
    ".quick-access-card",
    ".impact-item",
    ".rule",
    ".citation-example",
    ".heritage-divider"
  ].join(",");

  let observer;
  let counterObserver;

  function revealElements() {
    const elements = document.querySelectorAll(revealSelector);

    elements.forEach((element, index) => {
      if (element.dataset.revealReady) {
        return;
      }

      element.dataset.revealReady = "true";
      element.classList.add("reveal-on-scroll");
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;

      if (reducedMotion.matches || !observer) {
        element.classList.add("is-visible");
      } else {
        observer.observe(element);
      }
    });
  }

  function animateCounter(element) {
    if (element.dataset.counted || reducedMotion.matches) {
      return;
    }

    const label = element.textContent.trim();
    const match = label.match(/^(\d+)(.*)$/);
    if (!match) {
      return;
    }

    element.dataset.counted = "true";
    const target = Number(match[1]);
    const suffix = match[2];
    const duration = 900;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }

  function prepareCounters() {
    document.querySelectorAll(".impact-number").forEach((element) => {
      if (counterObserver) {
        counterObserver.observe(element);
      } else {
        animateCounter(element);
      }
    });
  }

  function initialize() {
    if (!reducedMotion.matches && "IntersectionObserver" in window) {
      observer ??= new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

      counterObserver ??= new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
    }

    revealElements();
    prepareCounters();
  }

  const mutationObserver = new MutationObserver(() => requestAnimationFrame(initialize));
  mutationObserver.observe(document.getElementById("app"), { childList: true, subtree: true });

  reducedMotion.addEventListener("change", initialize);
  window.addEventListener("load", initialize, { once: true });
  initialize();
})();
