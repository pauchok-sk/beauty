export default function more() {
  const moreParents = document.querySelectorAll(".parent-more");

  if (moreParents.length) {
    moreParents.forEach((p) => {
      const parentItems = p.querySelector("[data-more]");
      const items = parentItems.children;
      const btn = p.querySelector("[data-more-btn]");

      let numberShow = +parentItems.dataset.more;
      const media = parentItems.dataset.moreMedia;
      const step = +parentItems.dataset.moreStep;
      const minMax = parentItems.dataset.moreMinMax
        ? parentItems.dataset.moreMinMax
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