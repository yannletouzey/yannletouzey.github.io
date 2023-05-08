export const animateBtn = () =>{
    const linkMore = document.querySelectorAll('.btn-more')
    linkMore.forEach(element => {
        element.addEventListener('mouseenter', ()=>{
            element.style.animationName = 'animateBtn'
            element.style.animationDuration = 0.6+'s'
        })
        element.addEventListener('mouseleave', ()=>{
            element.style.animationName = 'animateBtn2'
            element.style.animationDuration = 0.6+'s'
        })
    });
}