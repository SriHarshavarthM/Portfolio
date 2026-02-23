const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const yearEl = document.getElementById("year");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
    });
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const pointerCoarse = window.matchMedia("(pointer: coarse)");
const cursorOrb = document.querySelector(".cursor-orb");
const tiltElements = document.querySelectorAll("[data-tilt]");

if (cursorOrb && !reduceMotion.matches && !pointerCoarse.matches) {
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;
  let visible = false;

  const ease = 0.14;

  const updateOrb = () => {
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    const normalizedX = currentX / window.innerWidth - 0.5;
    const normalizedY = currentY / window.innerHeight - 0.5;

    cursorOrb.style.setProperty("--cursor-x", `${currentX}px`);
    cursorOrb.style.setProperty("--cursor-y", `${currentY}px`);
    cursorOrb.style.setProperty("--cursor-rot-y", `${normalizedX * 18}deg`);
    cursorOrb.style.setProperty("--cursor-rot-x", `${normalizedY * -18}deg`);
    cursorOrb.style.setProperty("--cursor-z", `${normalizedY * 120}px`);

    requestAnimationFrame(updateOrb);
  };

  const showOrb = () => {
    if (!visible) {
      cursorOrb.classList.add("is-visible");
      visible = true;
    }
  };

  const hideOrb = () => {
    if (visible) {
      cursorOrb.classList.remove("is-visible");
      visible = false;
    }
  };

  const handlePointerMove = (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    showOrb();
  };

  const handlePointerOut = (event) => {
    if (!event.relatedTarget) {
      hideOrb();
    }
  };

  cursorOrb.style.setProperty("--cursor-scale", "1");

  document.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("pointerout", handlePointerOut);

  document.addEventListener("pointerdown", () => {
    cursorOrb.style.setProperty("--cursor-scale", "1.08");
  });

  document.addEventListener("pointerup", () => {
    cursorOrb.style.setProperty("--cursor-scale", "1");
  });

  window.addEventListener("resize", () => {
    currentX = window.innerWidth / 2;
    currentY = window.innerHeight / 2;
    targetX = currentX;
    targetY = currentY;
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      hideOrb();
    }
  });

  reduceMotion.addEventListener("change", (event) => {
    if (event.matches) {
      hideOrb();
    }
  });

  updateOrb();
}

if (!reduceMotion.matches && tiltElements.length) {
  tiltElements.forEach((element) => {
    const maxTilt = parseFloat(element.dataset.tiltMax || "12");
    let rafId = null;

    const applyTilt = (event) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = event.clientX - centerX;
      const y = event.clientY - centerY;
      const tiltY = ((x / (rect.width / 2)) * maxTilt).toFixed(2);
      const tiltX = ((y / (rect.height / 2)) * -maxTilt).toFixed(2);

      element.style.setProperty("--tilt-x", `${tiltX}deg`);
      element.style.setProperty("--tilt-y", `${tiltY}deg`);
    };

    const handlePointerMove = (event) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => applyTilt(event));
    };

    const resetTilt = () => {
      if (rafId) cancelAnimationFrame(rafId);
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.classList.remove("is-active");
    };

    element.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("pointerenter", () => {
      element.classList.add("is-active");
    });
    element.addEventListener("pointerleave", resetTilt);
    element.addEventListener("pointercancel", resetTilt);
    element.addEventListener("touchend", resetTilt);

    if (element.hasAttribute("data-tilt-reset")) {
      element.addEventListener("mouseleave", resetTilt);
    }
  });
}
