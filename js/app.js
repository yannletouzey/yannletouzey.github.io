import { spanText } from "./link/animateLink.js"
import { addSpan, curveText } from "./utils.js";
import { showText } from "./showText/showText.js";

// Add span each letter text
spanText()

// Animate btn => more info
// animateBtn()

// Add span
addSpan('banner-bottom-p')
addSpan('header__container--title')

// Curve text
curveText("footer__contact--title-one")
curveText("footer__contact--title-two")

// show/hide title link contact
showText()