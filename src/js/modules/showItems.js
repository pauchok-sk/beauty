export default function showItems() {
  const showParents = document.querySelectorAll(".parent-show");

  if (showParents.length) {
    showParents.forEach((p) => {
      const parentItems = p.querySelector("[data-show]");
      const items = parentItems.children;
      const btn = p.querySelector("[data-show-btn]");

      let numberShow = +parentItems.dataset.show;
      const media = parentItems.dataset.showMedia;
      const step = +parentItems.dataset.showStep;
      const minMax = parentItems.dataset.showMinMax
        ? parentItems.dataset.showMinMax
        : "max";

      const condition = media
        ? window.matchMedia(`(${minMax}-width: ${media}px)`).matches
        : 1;

      if (condition) {
        Array.from(items)
          .slice(numberShow)
          .forEach((item) => item.classList.add("_hidden"));

        numberShow += step;

        btn.addEventListener("click", () => {
          Array.from(items)
            .slice(0, numberShow)
            .forEach((item) => item.classList.remove("_hidden"));
          if (numberShow >= items.length) btn.remove();
          numberShow += step;
        });
      }
    });
  }
}