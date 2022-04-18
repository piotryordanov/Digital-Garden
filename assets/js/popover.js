function htmlToElement(html) {
  const template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function initPopover(baseURL) {
  const basePath = baseURL.replace(window.location.origin, "");
  document.addEventListener("DOMContentLoaded", () => {
    fetchData.then(({ content }) => {
      const links = [...document.getElementsByClassName("internal-link")];
      links
        .filter((li) => li.dataset.src)
        .forEach((li) => {
          const alias = li.dataset.src.replace("/", "");
          let linkDest;
          Object.keys(content).forEach((key) => {
            const value = content[key];
            const slug = value.title.replaceAll(" ", "-").toLowerCase();
            if (slug == alias) {
              linkDest = content[key];
            }
          });
          // const linkDest = content[li.dataset.src.replace(basePath, "")];
          if (linkDest) {
            const popoverElement = `<div class="popover">
    <h3>${linkDest.title}</h3>
    <p>${removeMarkdown(linkDest.content).split(" ", 20).join(" ")}...</p>
    <p class="meta">${new Date(linkDest.lastmodified).toLocaleDateString()}</p>
</div>`;
            const el = htmlToElement(popoverElement);
            li.appendChild(el);
            li.addEventListener("mouseover", () => {
              el.classList.add("visible");
            });
            li.addEventListener("mouseout", () => {
              el.classList.remove("visible");
            });
          }
        });
    });
  });
}
