function modalAparece() {
    const modal = document.getElementById("modal")
    const darkground = document.getElementById("darkground")

    darkground.style.backgroundColor = "rgba(0, 0, 0, 0.4)"

    modal.style.display = "flex"
    modal.style.position = "fixed"
    modal.style.top = "50%"
    modal.style.left = "50%"
    modal.style.transform = "translate(-50%,-50%)"
}