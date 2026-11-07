// Isi URL ini saat APK dan repositori sudah tersedia.
const RELEASE_LINKS = {
  apk: "",
  github: ""
};

document.querySelector("#year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Buka navigasi" : "Tutup navigasi");
  nav.classList.toggle("open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
    nav.classList.remove("open");
  });
});

const linkStatus = document.querySelector(".link-status");
document.querySelectorAll("[data-link]").forEach((button) => {
  button.addEventListener("click", (event) => {
    const url = RELEASE_LINKS[button.dataset.link];
    if (url) {
      event.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    event.preventDefault();
    linkStatus.textContent = button.dataset.link === "apk"
      ? "TAUTAN APK BELUM DIATUR — EDIT RELEASE_LINKS.APK"
      : "REPOSITORI BELUM DIATUR — EDIT RELEASE_LINKS.GITHUB";
  });
});
