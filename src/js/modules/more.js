export default function more() {
  const containers = document.querySelectorAll(".container-more");

  if (containers.length) {
    containers.forEach((container) => {
      const btn = container.querySelector("[data-more-btn]");
      const items = container.querySelectorAll("._hidden");
      const itemsMobile = container.querySelectorAll("._hidden-mob");

      btn.addEventListener("click", () => {
        items.forEach((i) => i.classList.remove("_hidden"));
        itemsMobile.forEach((i) => i.classList.remove("_hidden-mob"));

        btn.remove();
      });
    });
  }
}
