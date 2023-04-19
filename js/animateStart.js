var container = document.querySelector('.box-container');
var boxRight = document.querySelector('.box');
var boxLeft = document.querySelector('.box2');

setTimeout(() => {
    container.style.zIndex = -100
}, 1600);
// boxRight.style.width = "10px";
// container.style.height = window.innerHeight+"px";

const containerHeight = container.clientHeight;

const containerWidth = container.clientWidth;

const diagContainer = Math.sqrt((containerWidth * containerWidth) + (containerHeight * containerHeight));

boxRight.style.height = diagContainer+"px";
boxRight.style.width = containerWidth+"px";
// boxRight.style.transform = 'translateX(-50px)';

boxLeft.style.height = diagContainer+"px";
boxLeft.style.width = containerWidth+"px";
// boxLeft.style.transform = 'translateX(-50px)';

offsetBox = (diagContainer-containerHeight)/2;

boxRight.style.top = "-"+(offsetBox)+"px";
boxLeft.style.top = "-"+(offsetBox)+"px";

rotate = ((Math.acos(containerHeight/diagContainer) * (180/Math.PI)));
// boxRight.style.transform = "rotate("+rotate+"deg)";
// boxLeft.style.transform = "rotate("+rotate+"deg)";

boxRight.style.transition = '1s';
boxRight.style.transform = "rotate(-"+rotate+"deg)";
boxLeft.style.transition = '1s';
boxLeft.style.transform = "rotate(-"+rotate+"deg)";