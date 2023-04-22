export const carousel = () => {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const carousel = document.getElementById("carousel");
  const data = carousel.clientWidth
  const faces = 4;
  const offsetFace = ((data/2) / 16);
  const lapDeg = 360;
  const degValue = lapDeg / faces;
  let deg = 0
  const slide = (params) => {
    params.style.transitionDuration = "2s";
    params.style.transform = `rotateY(${deg}deg)`;
  };
  prevBtn.addEventListener("click", () => {
    deg += degValue;
    slide(carousel);
  });
  nextBtn.addEventListener("click", () => {
    deg -= degValue;
    slide(carousel);
  });
  const allFaces = document.querySelectorAll(".face-carousel");
  
  for (let index = 0; index < faces; index++) {
    const element = allFaces[index];
    const newDegValue = degValue * index;
    element.style.transform = `rotateY(${newDegValue}deg) translateZ(${offsetFace}rem)`;
  }
  console.log(data);
};