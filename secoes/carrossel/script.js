const slide = document.getElementById("slide");

let index = 0

function mudaImg1() {
    index = (index + 1) % 3
    slide.style.transform = `translateX(${-index * 580}px)`
}

function mudaImg2() {
    index = (index - 1 + 3) % 3
    slide.style.transform = `translateX(${-index * 590}px)`
}

setInterval(mudaImg1, 10000)