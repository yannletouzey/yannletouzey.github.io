const spanText = document.querySelectorAll(".container-link div");
spanText.forEach((element) => {
  const letters = element.children[0].textContent.split("");
  element.innerHTML = "";
  letters.forEach((e, index) => {
    element.innerHTML += `<span class="span" style="transition-delay: ${
      0.02 * index
    }s">${e}</span>`;
  });
});
