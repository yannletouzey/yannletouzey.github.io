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

export { addSpan, curveText }