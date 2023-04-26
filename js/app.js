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

function addSpan(id) {
  const textWithId = document.getElementById('' + id)
  const text = document.getElementById('' + id).textContent
  textWithId.innerHTML = ""
  let textArray = Array.from(text)
  for (let i = 0; i < textArray.length; i++) {
      let e = textArray[i];
      textWithId.innerHTML += `<span id=${i}>${e}</span>`
  }
}
//Enter id tag text only (p/h1/h2/...)
addSpan('banner-bottom-p')
addSpan('header__container--title')

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
        textWithId.innerHTML += `<span id="${textArray[i]}" style="transform: rotate(${d/1.4}deg);">${textArray[i]}</span>`
        d += partDeg
    }
}
//Enter id tag text only (p/h1/h2/...)
curveText("footer__contact--title-one")
curveText("footer__contact--title-two")

// show/hide title link contact
const cubeContainerOne = document.getElementById("footer__contact--cube-container-one")
const cubeContainerTwo = document.getElementById("footer__contact--cube-container-two")

const titleOne = document.getElementById("footer__contact--title-one")
const titleTwo = document.getElementById("footer__contact--title-two")

const cubeOne = document.querySelector("#cube-one")
const cubeTwo = document.querySelector("#cube-two")

cubeContainerOne.addEventListener('mouseenter', ()=>{
  titleOne.classList.add('show')
})
cubeContainerOne.addEventListener('mouseleave', ()=>{
  titleOne.classList.remove('show')
})
cubeContainerTwo.addEventListener('mouseenter', ()=>{
  titleTwo.classList.add('show')
})
cubeContainerTwo.addEventListener('mouseleave', ()=>{
  titleTwo.classList.remove('show')
})

cubeOne.addEventListener('click', () => {
  titleOne.classList.remove('show')
})
cubeTwo.addEventListener('click', () => {
  titleTwo.classList.remove('show')
})