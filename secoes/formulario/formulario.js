const passar = document.getElementById("passar");
const slider = document.getElementById("slide");
var index = 1;

passar.addEventListener("click", () =>{
    let move = -170;
    if (index < 6) {
        move = move * index
        slider.style.transform = `translateX(${move}%)`
        index ++
    }
    
});