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
    // btn.addEventListener('click', () => {
    //     page.style.display = "block"
        
    // })
}
showPageMore(btnMoreOne, morePageOne)
showPageMore(btnMoreTwo, morePageTwo)
showPageMore(btnMoreThree, morePageThree)
showPageMore(btnMoreFour, morePageFour)