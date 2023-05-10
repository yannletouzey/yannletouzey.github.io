import { spanText } from "./animateLink.js"
import { addSpan, curveText } from "./utils.js";
import { showText } from "./showText.js";
import { carousel } from "./carousel.js";

// Animation carousel
carousel();

// Add span each letter text
spanText()

// Add span
addSpan('banner-bottom-p')
addSpan('header__container--title')

// Curve text
curveText("footer__contact--title-one")
curveText("footer__contact--title-two")

// show/hide title link contact
showText()