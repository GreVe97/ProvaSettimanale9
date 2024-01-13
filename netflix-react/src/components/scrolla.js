function scrolla(verso, saga) {
    let carosello = document.querySelector(`#${saga} .carousel-inner`);
    let scrollata = carosello.offsetWidth * 0.85;
    let maxScrollLeft = carosello.scrollWidth - carosello.offsetWidth;
    if (verso === -1) {
        carosello.scrollLeft -= scrollata;
    } else {
        carosello.scrollLeft += scrollata;
    }
    if (carosello.scrollLeft >= maxScrollLeft) {
        carosello.scrollLeft = 0;
    }
}
export default scrolla;