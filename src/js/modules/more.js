export default function more() {
  const containers = document.querySelectorAll(".container-more");

  if (containers.length) {
    containers.forEach((container) => {
      const btn = container.querySelector("[data-more-btn]");
      const items = container.querySelectorAll("._hidden");
      const itemsMobile = container.querySelectorAll("._hidden-mob");
      const autoheightHtml = container.closest(".autoheight-more")

      let startHiddenHeiht = 0;
      if (itemsMobile.length === 1 && autoheightHtml) {
        startHiddenHeiht = itemsMobile[0].clientHeight;
      }

      btn.addEventListener("click", () => {
        items.forEach((i) => i.classList.remove("_hidden"));
        itemsMobile.forEach((i) => i.classList.remove("_hidden-mob"));

        if (itemsMobile.length === 1 && autoheightHtml) {
          const currentHeight = itemsMobile[0].clientHeight;
          const parentHeight = autoheightHtml.clientHeight;
          const newHeight = (parentHeight - startHiddenHeiht) + currentHeight;
          
          autoheightHtml.style.height = newHeight + "px"
        }

        btn.remove();
      });
    });
  }
}
