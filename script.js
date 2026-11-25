const menuToggle = document.querySelector(".nav-toggle");
const navigation = document.getElementById("nav-links");

if (menuToggle && navigation) {
  const mobileLayout = window.matchMedia("(max-width: 680px)");
  const isMenuOpen = () => menuToggle.getAttribute("aria-expanded") === "true";
  const setMenuOpen = (open) => menuToggle.setAttribute("aria-expanded", String(open));

  menuToggle.addEventListener("click", () => setMenuOpen(!isMenuOpen()));

  navigation.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');

    if (!link || !mobileLayout.matches || !isMenuOpen()) return;
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    setMenuOpen(false);
    const destination = document.getElementById(link.hash.slice(1));
    destination?.focus({ preventScroll: true });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !mobileLayout.matches || !isMenuOpen()) return;

    setMenuOpen(false);
    menuToggle.focus();
  });

  mobileLayout.addEventListener("change", () => setMenuOpen(false));

  document.documentElement.classList.add("has-menu-toggle");
  menuToggle.hidden = false;
}

const copyrightYear = document.getElementById("year");
if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();
