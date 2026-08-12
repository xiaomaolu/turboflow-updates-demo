(() => {
  const drawer = document.querySelector("[data-memo-drawer]");
  const panel = document.querySelector("[data-memo-panel]");
  const toggle = document.querySelector("[data-memo-toggle]");
  const closeButton = document.querySelector("[data-memo-close]");
  const backdrop = document.querySelector("[data-memo-backdrop]");

  if (!drawer || !panel || !toggle || !closeButton || !backdrop) return;

  const mobileQuery = window.matchMedia("(max-width: 620px)");
  let focusFrame = null;

  function setOpen(open, { restoreFocus = true } = {}) {
    if (focusFrame !== null) {
      window.cancelAnimationFrame(focusFrame);
      focusFrame = null;
    }

    drawer.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-visible", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? toggle.dataset.closeLabel : toggle.dataset.openLabel);
    panel.setAttribute("aria-hidden", String(!open));
    panel.toggleAttribute("inert", !open);
    document.body.classList.toggle("memo-open", open && mobileQuery.matches);

    if (open) {
      focusFrame = window.requestAnimationFrame(() => {
        closeButton.focus();
        focusFrame = null;
      });
    } else if (restoreFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  closeButton.addEventListener("click", () => setOpen(false));
  backdrop.addEventListener("click", () => setOpen(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
    }
  });

  mobileQuery.addEventListener("change", () => {
    document.body.classList.toggle(
      "memo-open",
      mobileQuery.matches && toggle.getAttribute("aria-expanded") === "true"
    );
  });

  window.addEventListener("pagehide", () => setOpen(false, { restoreFocus: false }));
})();
