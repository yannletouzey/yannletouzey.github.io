export const showText = () => {
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
}