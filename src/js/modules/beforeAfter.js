export default function beforeAfter() {
  const ranges = document.querySelectorAll(".before-after__range");

  if (ranges.length) {
    ranges.forEach((range) => {
      const [beforeItem, afterItem] = range
        .closest(".swiper-slide")
        .querySelectorAll(".before-after__slide-item");
      const beforeTitle = beforeItem.querySelector(
        ".before-after__slide-item-title"
      );
      const view = range.closest(".swiper-slide").querySelector(".before-after__range-view");

      range.addEventListener("input", (e) => {
        afterItem.style.width = `${100 - e.target.value}%`;
        beforeTitle.style.width = `${e.target.value}%`;
        view.style.left = `${e.target.value}%`;
      });
    });
  }
}
