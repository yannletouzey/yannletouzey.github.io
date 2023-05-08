const btnMoreOne = document.getElementById('btn-more-info-one')
const btnMoreTwo = document.getElementById('btn-more-info-two')
const btnMoreThree = document.getElementById('btn-more-info-three')
const btnMoreFour = document.getElementById('btn-more-info-four')

const morePageOne = document.querySelector('.website-one')
const morePageTwo = document.querySelector('.website-two')
const morePageThree = document.querySelector('.website-three')
const morePageFour = document.querySelector('.website-four')

let widthFace = document.getElementById('main__container--carousel-face').clientWidth / 16

function showPageMore(btn, page){
    btn.addEventListener('click', () => {
        page.style.display = "block"
        // page.style.width = "100%"
        // page.style.maxWidth = "60rem"

        // if (window.innerWidth >= (350 + (widthFace * 16))) {
        //     page.style.maxWidth = (window.innerWidth - 300) + "px"
        //     page.style.width = (widthFace * 5) + "rem"
        //     window.addEventListener('resize', () => {
        //         page.style.minWidth = ((widthFace * 16) + (widthFace / 2)) + "px"
        //         page.style.maxWidth = (window.innerWidth - 300) + "px"
        //         page.style.width = (widthFace * 5) + "rem"
        //     })
        // } else {
        //     page.style.width = widthFace + "rem"
        //     window.addEventListener('resize', () => {
        //         if (window.innerWidth >= (350 + (widthFace * 16))) {
        //             page.style.minWidth = ((widthFace * 16) + (widthFace / 2)) + "px"
        //             page.style.maxWidth = (window.innerWidth - 300) + "px"
        //             page.style.width = (widthFace * 5) + "rem"
        //         }
        //     })
        // }
    })
}
showPageMore(btnMoreOne, morePageOne)
showPageMore(btnMoreTwo, morePageTwo)
showPageMore(btnMoreThree, morePageThree)
showPageMore(btnMoreFour, morePageFour)