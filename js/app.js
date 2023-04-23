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


const title = document.getElementById('title')
function curveText(id) {
    const textWithId = document.getElementById('' + id)
    const text = document.getElementById('' + id).textContent
    textWithId.innerHTML = ""
    const deg = 150
    const textArray = Array.from(text)
    const partDeg = deg / (textArray.length - 1)
    let d = -deg / 2
    for (let i = 0; i < textArray.length; i++) {
        d = Math.trunc(d)
        textWithId.innerHTML += `<span id="${textArray[i]}" style="transform: rotate(${d}deg);">${textArray[i]}</span>`
        d += partDeg
    }
}
//Enter id tag text only (p/h1/h2/...)
curveText("title")